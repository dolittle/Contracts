// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Processing_Filters_pb = require('../Events.Processing/Filters_pb.js');
var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');

function serialize_dolittle_runtime_events_processing_FilterClientToRuntimeResponse(arg) {
  if (!(arg instanceof Events_Processing_Filters_pb.FilterClientToRuntimeResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.FilterClientToRuntimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_FilterClientToRuntimeResponse(buffer_arg) {
  return Events_Processing_Filters_pb.FilterClientToRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_processing_FilterRuntimeToClientRequest(arg) {
  if (!(arg instanceof Events_Processing_Filters_pb.FilterRuntimeToClientRequest)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.FilterRuntimeToClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_FilterRuntimeToClientRequest(buffer_arg) {
  return Events_Processing_Filters_pb.FilterRuntimeToClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FiltersService = exports.FiltersService = {
  connect: {
    path: '/dolittle.runtime.events.processing.Filters/Connect',
    requestStream: true,
    responseStream: true,
    requestType: Events_Processing_Filters_pb.FilterClientToRuntimeResponse,
    responseType: Events_Processing_Filters_pb.FilterRuntimeToClientRequest,
    requestSerialize: serialize_dolittle_runtime_events_processing_FilterClientToRuntimeResponse,
    requestDeserialize: deserialize_dolittle_runtime_events_processing_FilterClientToRuntimeResponse,
    responseSerialize: serialize_dolittle_runtime_events_processing_FilterRuntimeToClientRequest,
    responseDeserialize: deserialize_dolittle_runtime_events_processing_FilterRuntimeToClientRequest,
  },
};

exports.FiltersClient = grpc.makeGenericClientConstructor(FiltersService);
