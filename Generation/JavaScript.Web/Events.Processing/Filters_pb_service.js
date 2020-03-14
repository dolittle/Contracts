// package: dolittle.runtime.events.processing
// file: Events.Processing/Filters.proto

var Events_Processing_Filters_pb = require("../Events.Processing/Filters_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Filters = (function () {
  function Filters() {}
  Filters.serviceName = "dolittle.runtime.events.processing.Filters";
  return Filters;
}());

Filters.Connect = {
  methodName: "Connect",
  service: Filters,
  requestStream: true,
  responseStream: true,
  requestType: Events_Processing_Filters_pb.FilterClientToRuntimeResponse,
  responseType: Events_Processing_Filters_pb.FilterRuntimeToClientRequest
};

exports.Filters = Filters;

function FiltersClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FiltersClient.prototype.connect = function connect(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Filters.Connect, {
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

exports.FiltersClient = FiltersClient;

