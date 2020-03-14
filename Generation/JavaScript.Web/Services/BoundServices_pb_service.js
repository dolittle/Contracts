// package: dolittle.runtime.services
// file: Services/BoundServices.proto

var Services_BoundServices_pb = require("../Services/BoundServices_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BoundServices = (function () {
  function BoundServices() {}
  BoundServices.serviceName = "dolittle.runtime.services.BoundServices";
  return BoundServices;
}());

BoundServices.GetForServiceType = {
  methodName: "GetForServiceType",
  service: BoundServices,
  requestStream: false,
  responseStream: false,
  requestType: Services_BoundServices_pb.ServiceType,
  responseType: Services_BoundServices_pb.Services
};

exports.BoundServices = BoundServices;

function BoundServicesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BoundServicesClient.prototype.getForServiceType = function getForServiceType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoundServices.GetForServiceType, {
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

exports.BoundServicesClient = BoundServicesClient;

