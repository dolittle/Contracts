// package: dolittle.dependencyinversion
// file: DependencyInversion/container.proto

var DependencyInversion_container_pb = require("../DependencyInversion/container_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Container = (function () {
  function Container() {}
  Container.serviceName = "dolittle.dependencyinversion.Container";
  return Container;
}());

Container.GetBindings = {
  methodName: "GetBindings",
  service: Container,
  requestStream: false,
  responseStream: false,
  requestType: DependencyInversion_container_pb.GetBindingsRequest,
  responseType: DependencyInversion_container_pb.Bindings
};

exports.Container = Container;

function ContainerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ContainerClient.prototype.getBindings = function getBindings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Container.GetBindings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ContainerClient = ContainerClient;

