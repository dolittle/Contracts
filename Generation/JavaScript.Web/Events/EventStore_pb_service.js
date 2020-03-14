// package: dolittle.runtime.events
// file: Events/EventStore.proto

var Events_EventStore_pb = require("../Events/EventStore_pb");
var Events_Aggregate_pb = require("../Events/Aggregate_pb");
var Events_AggregateEventCommitResponse_pb = require("../Events/AggregateEventCommitResponse_pb");
var Events_EventCommitResponse_pb = require("../Events/EventCommitResponse_pb");
var Events_FetchForAggregateResponse_pb = require("../Events/FetchForAggregateResponse_pb");
var Events_UncommittedEvents_pb = require("../Events/UncommittedEvents_pb");
var Events_UncommittedAggregateEvents_pb = require("../Events/UncommittedAggregateEvents_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EventStore = (function () {
  function EventStore() {}
  EventStore.serviceName = "dolittle.runtime.events.EventStore";
  return EventStore;
}());

EventStore.Commit = {
  methodName: "Commit",
  service: EventStore,
  requestStream: false,
  responseStream: false,
  requestType: Events_UncommittedEvents_pb.UncommittedEvents,
  responseType: Events_EventCommitResponse_pb.EventCommitResponse
};

EventStore.CommitForAggregate = {
  methodName: "CommitForAggregate",
  service: EventStore,
  requestStream: false,
  responseStream: false,
  requestType: Events_UncommittedAggregateEvents_pb.UncommittedAggregateEvents,
  responseType: Events_AggregateEventCommitResponse_pb.AggregateEventCommitResponse
};

EventStore.FetchForAggregate = {
  methodName: "FetchForAggregate",
  service: EventStore,
  requestStream: false,
  responseStream: false,
  requestType: Events_Aggregate_pb.Aggregate,
  responseType: Events_FetchForAggregateResponse_pb.FetchForAggregateResponse
};

exports.EventStore = EventStore;

function EventStoreClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EventStoreClient.prototype.commit = function commit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventStore.Commit, {
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

EventStoreClient.prototype.commitForAggregate = function commitForAggregate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventStore.CommitForAggregate, {
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

EventStoreClient.prototype.fetchForAggregate = function fetchForAggregate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EventStore.FetchForAggregate, {
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

exports.EventStoreClient = EventStoreClient;

