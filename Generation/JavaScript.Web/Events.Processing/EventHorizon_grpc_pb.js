// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Processing_EventHorizon_pb = require('../Events.Processing/EventHorizon_pb.js');
var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');

function serialize_dolittle_runtime_events_processing_EventHorizonPublisherToSubscriberResponse(arg) {
  if (!(arg instanceof Events_Processing_EventHorizon_pb.EventHorizonPublisherToSubscriberResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.EventHorizonPublisherToSubscriberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_EventHorizonPublisherToSubscriberResponse(buffer_arg) {
  return Events_Processing_EventHorizon_pb.EventHorizonPublisherToSubscriberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_processing_EventHorizonSubscriberToPublisherRequest(arg) {
  if (!(arg instanceof Events_Processing_EventHorizon_pb.EventHorizonSubscriberToPublisherRequest)) {
    throw new Error('Expected argument of type dolittle.runtime.events.processing.EventHorizonSubscriberToPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_processing_EventHorizonSubscriberToPublisherRequest(buffer_arg) {
  return Events_Processing_EventHorizon_pb.EventHorizonSubscriberToPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventHorizonService = exports.EventHorizonService = {
  subscribe: {
    path: '/dolittle.runtime.events.processing.EventHorizon/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: Events_Processing_EventHorizon_pb.EventHorizonSubscriberToPublisherRequest,
    responseType: Events_Processing_EventHorizon_pb.EventHorizonPublisherToSubscriberResponse,
    requestSerialize: serialize_dolittle_runtime_events_processing_EventHorizonSubscriberToPublisherRequest,
    requestDeserialize: deserialize_dolittle_runtime_events_processing_EventHorizonSubscriberToPublisherRequest,
    responseSerialize: serialize_dolittle_runtime_events_processing_EventHorizonPublisherToSubscriberResponse,
    responseDeserialize: deserialize_dolittle_runtime_events_processing_EventHorizonPublisherToSubscriberResponse,
  },
};

exports.EventHorizonClient = grpc.makeGenericClientConstructor(EventHorizonService);
