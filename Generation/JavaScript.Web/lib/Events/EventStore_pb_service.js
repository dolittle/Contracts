"use strict";
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
    function EventStore() { }
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
                }
                else {
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
                }
                else {
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
                }
                else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdG9yZV9wYl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJFdmVudHMvRXZlbnRTdG9yZV9wYl9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBRWhDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDOUQsSUFBSSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxJQUFJLHNDQUFzQyxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQ2xHLElBQUksNkJBQTZCLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDaEYsSUFBSSxtQ0FBbUMsR0FBRyxPQUFPLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUM1RixJQUFJLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzVFLElBQUksb0NBQW9DLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDOUYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXBELElBQUksVUFBVSxHQUFHLENBQUM7SUFDaEIsU0FBUyxVQUFVLEtBQUksQ0FBQztJQUN4QixVQUFVLENBQUMsV0FBVyxHQUFHLG9DQUFvQyxDQUFDO0lBQzlELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFTCxVQUFVLENBQUMsTUFBTSxHQUFHO0lBQ2xCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFdBQVcsRUFBRSwyQkFBMkIsQ0FBQyxpQkFBaUI7SUFDMUQsWUFBWSxFQUFFLDZCQUE2QixDQUFDLG1CQUFtQjtDQUNoRSxDQUFDO0FBRUYs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LFNBQVM7UUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztRQUN6QixLQUFLLEVBQUUsVUFBVSxRQUFRO1lBQ3ZCLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM1QyxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDakMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTztRQUNMLE1BQU0sRUFBRTtZQUNOLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZTogZG9saXR0bGUucnVudGltZS5ldmVudHNcbi8vIGZpbGU6IEV2ZW50cy9FdmVudFN0b3JlLnByb3RvXG5cbnZhciBFdmVudHNfRXZlbnRTdG9yZV9wYiA9IHJlcXVpcmUoXCIuLi9FdmVudHMvRXZlbnRTdG9yZV9wYlwiKTtcbnZhciBFdmVudHNfQWdncmVnYXRlX3BiID0gcmVxdWlyZShcIi4uL0V2ZW50cy9BZ2dyZWdhdGVfcGJcIik7XG52YXIgRXZlbnRzX0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2VfcGIgPSByZXF1aXJlKFwiLi4vRXZlbnRzL0FnZ3JlZ2F0ZUV2ZW50Q29tbWl0UmVzcG9uc2VfcGJcIik7XG52YXIgRXZlbnRzX0V2ZW50Q29tbWl0UmVzcG9uc2VfcGIgPSByZXF1aXJlKFwiLi4vRXZlbnRzL0V2ZW50Q29tbWl0UmVzcG9uc2VfcGJcIik7XG52YXIgRXZlbnRzX0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2VfcGIgPSByZXF1aXJlKFwiLi4vRXZlbnRzL0ZldGNoRm9yQWdncmVnYXRlUmVzcG9uc2VfcGJcIik7XG52YXIgRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRzX3BiID0gcmVxdWlyZShcIi4uL0V2ZW50cy9VbmNvbW1pdHRlZEV2ZW50c19wYlwiKTtcbnZhciBFdmVudHNfVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHNfcGIgPSByZXF1aXJlKFwiLi4vRXZlbnRzL1VuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzX3BiXCIpO1xudmFyIGdycGMgPSByZXF1aXJlKFwiQGltcHJvYmFibGUtZW5nL2dycGMtd2ViXCIpLmdycGM7XG5cbnZhciBFdmVudFN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRTdG9yZSgpIHt9XG4gIEV2ZW50U3RvcmUuc2VydmljZU5hbWUgPSBcImRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLkV2ZW50U3RvcmVcIjtcbiAgcmV0dXJuIEV2ZW50U3RvcmU7XG59KCkpO1xuXG5FdmVudFN0b3JlLkNvbW1pdCA9IHtcbiAgbWV0aG9kTmFtZTogXCJDb21taXRcIixcbiAgc2VydmljZTogRXZlbnRTdG9yZSxcbiAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgcmVxdWVzdFR5cGU6IEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50c19wYi5VbmNvbW1pdHRlZEV2ZW50cyxcbiAgcmVzcG9uc2VUeXBlOiBFdmVudHNfRXZlbnRDb21taXRSZXNwb25zZV9wYi5FdmVudENvbW1pdFJlc3BvbnNlXG59O1xuXG5FdmVudFN0b3JlLkNvbW1pdEZvckFnZ3JlZ2F0ZSA9IHtcbiAgbWV0aG9kTmFtZTogXCJDb21taXRGb3JBZ2dyZWdhdGVcIixcbiAgc2VydmljZTogRXZlbnRTdG9yZSxcbiAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgcmVxdWVzdFR5cGU6IEV2ZW50c19VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c19wYi5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cyxcbiAgcmVzcG9uc2VUeXBlOiBFdmVudHNfQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZV9wYi5BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlXG59O1xuXG5FdmVudFN0b3JlLkZldGNoRm9yQWdncmVnYXRlID0ge1xuICBtZXRob2ROYW1lOiBcIkZldGNoRm9yQWdncmVnYXRlXCIsXG4gIHNlcnZpY2U6IEV2ZW50U3RvcmUsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBFdmVudHNfQWdncmVnYXRlX3BiLkFnZ3JlZ2F0ZSxcbiAgcmVzcG9uc2VUeXBlOiBFdmVudHNfRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZV9wYi5GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlXG59O1xuXG5leHBvcnRzLkV2ZW50U3RvcmUgPSBFdmVudFN0b3JlO1xuXG5mdW5jdGlvbiBFdmVudFN0b3JlQ2xpZW50KHNlcnZpY2VIb3N0LCBvcHRpb25zKSB7XG4gIHRoaXMuc2VydmljZUhvc3QgPSBzZXJ2aWNlSG9zdDtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbn1cblxuRXZlbnRTdG9yZUNsaWVudC5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gY29tbWl0KHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTtcbiAgfVxuICB2YXIgY2xpZW50ID0gZ3JwYy51bmFyeShFdmVudFN0b3JlLkNvbW1pdCwge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSBncnBjLkNvZGUuT0spIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpO1xuICAgICAgICAgIGVyci5jb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgIGVyci5tZXRhZGF0YSA9IHJlc3BvbnNlLnRyYWlsZXJzO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgfVxuICB9O1xufTtcblxuRXZlbnRTdG9yZUNsaWVudC5wcm90b3R5cGUuY29tbWl0Rm9yQWdncmVnYXRlID0gZnVuY3Rpb24gY29tbWl0Rm9yQWdncmVnYXRlKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTtcbiAgfVxuICB2YXIgY2xpZW50ID0gZ3JwYy51bmFyeShFdmVudFN0b3JlLkNvbW1pdEZvckFnZ3JlZ2F0ZSwge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSBncnBjLkNvZGUuT0spIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpO1xuICAgICAgICAgIGVyci5jb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgIGVyci5tZXRhZGF0YSA9IHJlc3BvbnNlLnRyYWlsZXJzO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgfVxuICB9O1xufTtcblxuRXZlbnRTdG9yZUNsaWVudC5wcm90b3R5cGUuZmV0Y2hGb3JBZ2dyZWdhdGUgPSBmdW5jdGlvbiBmZXRjaEZvckFnZ3JlZ2F0ZShyZXF1ZXN0TWVzc2FnZSwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMV07XG4gIH1cbiAgdmFyIGNsaWVudCA9IGdycGMudW5hcnkoRXZlbnRTdG9yZS5GZXRjaEZvckFnZ3JlZ2F0ZSwge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSBncnBjLkNvZGUuT0spIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpO1xuICAgICAgICAgIGVyci5jb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgIGVyci5tZXRhZGF0YSA9IHJlc3BvbnNlLnRyYWlsZXJzO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5FdmVudFN0b3JlQ2xpZW50ID0gRXZlbnRTdG9yZUNsaWVudDtcblxuIl19