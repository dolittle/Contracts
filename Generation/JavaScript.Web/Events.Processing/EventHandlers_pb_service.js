// package: dolittle.runtime.events.processing
// file: Events.Processing/EventHandlers.proto

var Events_Processing_EventHandlers_pb = require("../Events.Processing/EventHandlers_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EventHandlers = (function () {
  function EventHandlers() {}
  EventHandlers.serviceName = "dolittle.runtime.events.processing.EventHandlers";
  return EventHandlers;
}());

EventHandlers.Connect = {
  methodName: "Connect",
  service: EventHandlers,
  requestStream: true,
  responseStream: true,
  requestType: Events_Processing_EventHandlers_pb.EventHandlerClientToRuntimeResponse,
  responseType: Events_Processing_EventHandlers_pb.EventHandlerRuntimeToClientRequest
};

exports.EventHandlers = EventHandlers;

function EventHandlersClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EventHandlersClient.prototype.connect = function connect(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(EventHandlers.Connect, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.EventHandlersClient = EventHandlersClient;

