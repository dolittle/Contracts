// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Services_BoundServices_pb = require('../Services/BoundServices_pb.js');

function serialize_dolittle_runtime_services_ServiceType(arg) {
  if (!(arg instanceof Services_BoundServices_pb.ServiceType)) {
    throw new Error('Expected argument of type dolittle.runtime.services.ServiceType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_services_ServiceType(buffer_arg) {
  return Services_BoundServices_pb.ServiceType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_services_Services(arg) {
  if (!(arg instanceof Services_BoundServices_pb.Services)) {
    throw new Error('Expected argument of type dolittle.runtime.services.Services');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_services_Services(buffer_arg) {
  return Services_BoundServices_pb.Services.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents all the bound gRPC services in the system
var BoundServicesService = exports.BoundServicesService = {
  getForServiceType: {
    path: '/dolittle.runtime.services.BoundServices/GetForServiceType',
    requestStream: false,
    responseStream: false,
    requestType: Services_BoundServices_pb.ServiceType,
    responseType: Services_BoundServices_pb.Services,
    requestSerialize: serialize_dolittle_runtime_services_ServiceType,
    requestDeserialize: deserialize_dolittle_runtime_services_ServiceType,
    responseSerialize: serialize_dolittle_runtime_services_Services,
    responseDeserialize: deserialize_dolittle_runtime_services_Services,
  },
};

exports.BoundServicesClient = grpc.makeGenericClientConstructor(BoundServicesService);
