// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var DependencyInversion_container_pb = require('../DependencyInversion/container_pb.js');

function serialize_dolittle_dependencyinversion_Bindings(arg) {
  if (!(arg instanceof DependencyInversion_container_pb.Bindings)) {
    throw new Error('Expected argument of type dolittle.dependencyinversion.Bindings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_dependencyinversion_Bindings(buffer_arg) {
  return DependencyInversion_container_pb.Bindings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_dependencyinversion_GetBindingsRequest(arg) {
  if (!(arg instanceof DependencyInversion_container_pb.GetBindingsRequest)) {
    throw new Error('Expected argument of type dolittle.dependencyinversion.GetBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_dependencyinversion_GetBindingsRequest(buffer_arg) {
  return DependencyInversion_container_pb.GetBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the IoC container
var ContainerService = exports.ContainerService = {
  getBindings: {
    path: '/dolittle.dependencyinversion.Container/GetBindings',
    requestStream: false,
    responseStream: false,
    requestType: DependencyInversion_container_pb.GetBindingsRequest,
    responseType: DependencyInversion_container_pb.Bindings,
    requestSerialize: serialize_dolittle_dependencyinversion_GetBindingsRequest,
    requestDeserialize: deserialize_dolittle_dependencyinversion_GetBindingsRequest,
    responseSerialize: serialize_dolittle_dependencyinversion_Bindings,
    responseDeserialize: deserialize_dolittle_dependencyinversion_Bindings,
  },
};

exports.ContainerClient = grpc.makeGenericClientConstructor(ContainerService);
