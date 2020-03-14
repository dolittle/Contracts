// package: dolittle.runtime.events.processing
// file: Events.Processing/EventHorizon.proto

var Events_Processing_EventHorizon_pb = require("../Events.Processing/EventHorizon_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EventHorizon = (function () {
  function EventHorizon() {}
  EventHorizon.serviceName = "dolittle.runtime.events.processing.EventHorizon";
  return EventHorizon;
}());

EventHorizon.Subscribe = {
  methodName: "Subscribe",
  service: EventHorizon,
  requestStream: false,
  responseStream: true,
  requestType: Events_Processing_EventHorizon_pb.EventHorizonSubscriberToPublisherRequest,
  responseType: Events_Processing_EventHorizon_pb.EventHorizonPublisherToSubscriberResponse
};

exports.EventHorizon = EventHorizon;

function EventHorizonClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EventHorizonClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(EventHorizon.Subscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.EventHorizonClient = EventHorizonClient;

