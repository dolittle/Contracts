"use strict";
// source: Events/EventStore.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var Events_Aggregate_pb = require('../Events/Aggregate_pb.js');
goog.object.extend(proto, Events_Aggregate_pb);
var Events_AggregateEventCommitResponse_pb = require('../Events/AggregateEventCommitResponse_pb.js');
goog.object.extend(proto, Events_AggregateEventCommitResponse_pb);
var Events_EventCommitResponse_pb = require('../Events/EventCommitResponse_pb.js');
goog.object.extend(proto, Events_EventCommitResponse_pb);
var Events_FetchForAggregateResponse_pb = require('../Events/FetchForAggregateResponse_pb.js');
goog.object.extend(proto, Events_FetchForAggregateResponse_pb);
var Events_UncommittedEvents_pb = require('../Events/UncommittedEvents_pb.js');
goog.object.extend(proto, Events_UncommittedEvents_pb);
var Events_UncommittedAggregateEvents_pb = require('../Events/UncommittedAggregateEvents_pb.js');
goog.object.extend(proto, Events_UncommittedAggregateEvents_pb);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdG9yZV9wYi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiRXZlbnRzL0V2ZW50U3RvcmVfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtDQUFrQztBQUNsQzs7Ozs7O0dBTUc7QUFDSCxpQ0FBaUM7QUFFakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0FBRXZDLElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDL0MsSUFBSSxzQ0FBc0MsR0FBRyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUNyRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztBQUNsRSxJQUFJLDZCQUE2QixHQUFHLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3pELElBQUksbUNBQW1DLEdBQUcsT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDL0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7QUFDL0QsSUFBSSwyQkFBMkIsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUN2RCxJQUFJLG9DQUFvQyxHQUFHLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQ2pHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc291cmNlOiBFdmVudHMvRXZlbnRTdG9yZS5wcm90b1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBFdmVudHNfQWdncmVnYXRlX3BiID0gcmVxdWlyZSgnLi4vRXZlbnRzL0FnZ3JlZ2F0ZV9wYi5qcycpO1xuZ29vZy5vYmplY3QuZXh0ZW5kKHByb3RvLCBFdmVudHNfQWdncmVnYXRlX3BiKTtcbnZhciBFdmVudHNfQWdncmVnYXRlRXZlbnRDb21taXRSZXNwb25zZV9wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlX3BiLmpzJyk7XG5nb29nLm9iamVjdC5leHRlbmQocHJvdG8sIEV2ZW50c19BZ2dyZWdhdGVFdmVudENvbW1pdFJlc3BvbnNlX3BiKTtcbnZhciBFdmVudHNfRXZlbnRDb21taXRSZXNwb25zZV9wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9FdmVudENvbW1pdFJlc3BvbnNlX3BiLmpzJyk7XG5nb29nLm9iamVjdC5leHRlbmQocHJvdG8sIEV2ZW50c19FdmVudENvbW1pdFJlc3BvbnNlX3BiKTtcbnZhciBFdmVudHNfRmV0Y2hGb3JBZ2dyZWdhdGVSZXNwb25zZV9wYiA9IHJlcXVpcmUoJy4uL0V2ZW50cy9GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlX3BiLmpzJyk7XG5nb29nLm9iamVjdC5leHRlbmQocHJvdG8sIEV2ZW50c19GZXRjaEZvckFnZ3JlZ2F0ZVJlc3BvbnNlX3BiKTtcbnZhciBFdmVudHNfVW5jb21taXR0ZWRFdmVudHNfcGIgPSByZXF1aXJlKCcuLi9FdmVudHMvVW5jb21taXR0ZWRFdmVudHNfcGIuanMnKTtcbmdvb2cub2JqZWN0LmV4dGVuZChwcm90bywgRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRzX3BiKTtcbnZhciBFdmVudHNfVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHNfcGIgPSByZXF1aXJlKCcuLi9FdmVudHMvVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHNfcGIuanMnKTtcbmdvb2cub2JqZWN0LmV4dGVuZChwcm90bywgRXZlbnRzX1VuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzX3BiKTtcbiJdfQ==