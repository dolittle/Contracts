// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
var grpc = require('grpc');
var Heads_Heads_pb = require('../Heads/Heads_pb.js');
var Heads_HeadInfo_pb = require('../Heads/HeadInfo_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dolittle_runtime_heads_HeadInfo(arg) {
  if (!(arg instanceof Heads_HeadInfo_pb.HeadInfo)) {
    throw new Error('Expected argument of type dolittle.runtime.heads.HeadInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_heads_HeadInfo(buffer_arg) {
  return Heads_HeadInfo_pb.HeadInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the Head service
var HeadsService = exports.HeadsService = {
  connect: {
    path: '/dolittle.runtime.heads.Heads/Connect',
    requestStream: false,
    responseStream: true,
    requestType: Heads_HeadInfo_pb.HeadInfo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dolittle_runtime_heads_HeadInfo,
    requestDeserialize: deserialize_dolittle_runtime_heads_HeadInfo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.HeadsClient = grpc.makeGenericClientConstructor(HeadsService);
