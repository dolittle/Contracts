// package: dolittle.runtime.events.processing
// file: Events.Processing/Processors.proto

var Events_Processing_Processors_pb = require("../Events.Processing/Processors_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Processors = (function () {
  function Processors() {}
  Processors.serviceName = "dolittle.runtime.events.processing.Processors";
  return Processors;
}());

Processors.Connect = {
  methodName: "Connect",
  service: Processors,
  requestStream: true,
  responseStream: true,
  requestType: Events_Processing_Processors_pb.ProcessorClientToRuntimeResponse,
  responseType: Events_Processing_Processors_pb.ProcessorRuntimeToClientRequest
};

exports.Processors = Processors;

function ProcessorsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProcessorsClient.prototype.connect = function connect(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Processors.Connect, {
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

exports.ProcessorsClient = ProcessorsClient;

