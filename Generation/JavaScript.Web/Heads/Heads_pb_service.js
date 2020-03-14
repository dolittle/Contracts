// package: dolittle.runtime.heads
// file: Heads/Heads.proto

var Heads_Heads_pb = require("../Heads/Heads_pb");
var Heads_HeadInfo_pb = require("../Heads/HeadInfo_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Heads = (function () {
  function Heads() {}
  Heads.serviceName = "dolittle.runtime.heads.Heads";
  return Heads;
}());

Heads.Connect = {
  methodName: "Connect",
  service: Heads,
  requestStream: false,
  responseStream: true,
  requestType: Heads_HeadInfo_pb.HeadInfo,
  responseType: google_protobuf_empty_pb.Empty
};

exports.Heads = Heads;

function HeadsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HeadsClient.prototype.connect = function connect(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Heads.Connect, {
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

exports.HeadsClient = HeadsClient;

