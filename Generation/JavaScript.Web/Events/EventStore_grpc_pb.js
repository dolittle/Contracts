// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Events_Aggregate_pb = require('../Events/Aggregate_pb.js');
var Events_AggregateEventCommitResponse_pb = require('../Events/AggregateEventCommitResponse_pb.js');
var Events_EventCommitResponse_pb = require('../Events/EventCommitResponse_pb.js');
var Events_FetchForAggregateResponse_pb = require('../Events/FetchForAggregateResponse_pb.js');
var Events_UncommittedEvents_pb = require('../Events/UncommittedEvents_pb.js');
var Events_UncommittedAggregateEvents_pb = require('../Events/UncommittedAggregateEvents_pb.js');

function serialize_dolittle_runtime_events_Aggregate(arg) {
  if (!(arg instanceof Events_Aggregate_pb.Aggregate)) {
    throw new Error('Expected argument of type dolittle.runtime.events.Aggregate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_Aggregate(buffer_arg) {
  return Events_Aggregate_pb.Aggregate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_AggregateEventCommitResponse(arg) {
  if (!(arg instanceof Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.AggregateEventCommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_AggregateEventCommitResponse(buffer_arg) {
  return Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_EventCommitResponse(arg) {
  if (!(arg instanceof Events_EventCommitResponse_pb.EventCommitResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.EventCommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_EventCommitResponse(buffer_arg) {
  return Events_EventCommitResponse_pb.EventCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_FetchForAggregateResponse(arg) {
  if (!(arg instanceof Events_FetchForAggregateResponse_pb.FetchForAggregateResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.events.FetchForAggregateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_FetchForAggregateResponse(buffer_arg) {
  return Events_FetchForAggregateResponse_pb.FetchForAggregateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_UncommittedAggregateEvents(arg) {
  if (!(arg instanceof Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents)) {
    throw new Error('Expected argument of type dolittle.runtime.events.UncommittedAggregateEvents');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_UncommittedAggregateEvents(buffer_arg) {
  return Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_events_UncommittedEvents(arg) {
  if (!(arg instanceof Events_UncommittedEvents_pb.UncommittedEvents)) {
    throw new Error('Expected argument of type dolittle.runtime.events.UncommittedEvents');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_events_UncommittedEvents(buffer_arg) {
  return Events_UncommittedEvents_pb.UncommittedEvents.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the Event Store service
var EventStoreService = exports.EventStoreService = {
  commit: {
    path: '/dolittle.runtime.events.EventStore/Commit',
    requestStream: false,
    responseStream: false,
    requestType: Events_UncommittedEvents_pb.UncommittedEvents,
    responseType: Events_EventCommitResponse_pb.EventCommitResponse,
    requestSerialize: serialize_dolittle_runtime_events_UncommittedEvents,
    requestDeserialize: deserialize_dolittle_runtime_events_UncommittedEvents,
    responseSerialize: serialize_dolittle_runtime_events_EventCommitResponse,
    responseDeserialize: deserialize_dolittle_runtime_events_EventCommitResponse,
  },
  commitForAggregate: {
    path: '/dolittle.runtime.events.EventStore/CommitForAggregate',
    requestStream: false,
    responseStream: false,
    requestType: Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents,
    responseType: Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse,
    requestSerialize: serialize_dolittle_runtime_events_UncommittedAggregateEvents,
    requestDeserialize: deserialize_dolittle_runtime_events_UncommittedAggregateEvents,
    responseSerialize: serialize_dolittle_runtime_events_AggregateEventCommitResponse,
    responseDeserialize: deserialize_dolittle_runtime_events_AggregateEventCommitResponse,
  },
  fetchForAggregate: {
    path: '/dolittle.runtime.events.EventStore/FetchForAggregate',
    requestStream: false,
    responseStream: false,
    requestType: Events_Aggregate_pb.Aggregate,
    responseType: Events_FetchForAggregateResponse_pb.FetchForAggregateResponse,
    requestSerialize: serialize_dolittle_runtime_events_Aggregate,
    requestDeserialize: deserialize_dolittle_runtime_events_Aggregate,
    responseSerialize: serialize_dolittle_runtime_events_FetchForAggregateResponse,
    responseDeserialize: deserialize_dolittle_runtime_events_FetchForAggregateResponse,
  },
};

exports.EventStoreClient = grpc.makeGenericClientConstructor(EventStoreService);
