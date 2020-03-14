// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Processing_EventHandlers_pb = require('../Events.Processing/EventHandlers_pb.js');
var Artifacts_Artifact_pb = require('../Artifacts/Artifact_pb.js');
var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');

function serialize_dolittle_runtime_events_processing_EventHandlerClientToRuntimeResponse(arg) {
  if (!(arg instanceof Events_Processing_EventHandlers_pb.EventHandlerClientToRuntimeResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.EventHandlerClientToRuntimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_EventHandlerClientToRuntimeResponse(buffer_arg) {
  return Events_Processing_EventHandlers_pb.EventHandlerClientToRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_processing_EventHandlerRuntimeToClientRequest(arg) {
  if (!(arg instanceof Events_Processing_EventHandlers_pb.EventHandlerRuntimeToClientRequest)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.EventHandlerRuntimeToClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_EventHandlerRuntimeToClientRequest(buffer_arg) {
  return Events_Processing_EventHandlers_pb.EventHandlerRuntimeToClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventHandlersService = exports.EventHandlersService = {
  connect: {
    path: '/dolittle.runtime.events.processing.EventHandlers/Connect',
    requestStream: true,
    responseStream: true,
    requestType: Events_Processing_EventHandlers_pb.EventHandlerClientToRuntimeResponse,
    responseType: Events_Processing_EventHandlers_pb.EventHandlerRuntimeToClientRequest,
    requestSerialize: serialize_dolittle_runtime_events_processing_EventHandlerClientToRuntimeResponse,
    requestDeserialize: deserialize_dolittle_runtime_events_processing_EventHandlerClientToRuntimeResponse,
    responseSerialize: serialize_dolittle_runtime_events_processing_EventHandlerRuntimeToClientRequest,
    responseDeserialize: deserialize_dolittle_runtime_events_processing_EventHandlerRuntimeToClientRequest,
  },
};

exports.EventHandlersClient = grpc.makeGenericClientConstructor(EventHandlersService);
