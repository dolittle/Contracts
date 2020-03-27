// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Processing_Processors_pb = require('../Events.Processing/Processors_pb.js');
var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');

function serialize_dolittle_runtime_events_processing_ProcessorClientToRuntimeResponse(arg) {
  if (!(arg instanceof Events_Processing_Processors_pb.ProcessorClientToRuntimeResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.ProcessorClientToRuntimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_ProcessorClientToRuntimeResponse(buffer_arg) {
  return Events_Processing_Processors_pb.ProcessorClientToRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_processing_ProcessorRuntimeToClientRequest(arg) {
  if (!(arg instanceof Events_Processing_Processors_pb.ProcessorRuntimeToClientRequest)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.ProcessorRuntimeToClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_ProcessorRuntimeToClientRequest(buffer_arg) {
  return Events_Processing_Processors_pb.ProcessorRuntimeToClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProcessorsService = exports.ProcessorsService = {
  connect: {
    path: '/dolittle.runtime.events.processing.Processors/Connect',
    requestStream: true,
    responseStream: true,
    requestType: Events_Processing_Processors_pb.ProcessorClientToRuntimeResponse,
    responseType: Events_Processing_Processors_pb.ProcessorRuntimeToClientRequest,
    requestSerialize: serialize_dolittle_runtime_events_processing_ProcessorClientToRuntimeResponse,
    requestDeserialize: deserialize_dolittle_runtime_events_processing_ProcessorClientToRuntimeResponse,
    responseSerialize: serialize_dolittle_runtime_events_processing_ProcessorRuntimeToClientRequest,
    responseDeserialize: deserialize_dolittle_runtime_events_processing_ProcessorRuntimeToClientRequest,
  },
};

exports.ProcessorsClient = grpc.makeGenericClientConstructor(ProcessorsService);
