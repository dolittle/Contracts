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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc29yc19ncnBjX3BiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJFdmVudHMuUHJvY2Vzc2luZy9Qcm9jZXNzb3JzX2dycGNfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBRWpDLDBCQUEwQjtBQUMxQiwrQ0FBK0M7QUFDL0MscUdBQXFHO0FBQ3JHLEVBQUU7QUFDRixZQUFZLENBQUM7QUFDYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSwrQkFBK0IsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUN2RixJQUFJLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBRXpFLFNBQVMsNkVBQTZFLENBQUMsR0FBRztJQUN4RixJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksK0JBQStCLENBQUMsZ0NBQWdDLENBQUMsRUFBRTtRQUN0RixNQUFNLElBQUksS0FBSyxDQUFDLCtGQUErRixDQUFDLENBQUM7S0FDbEg7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELFNBQVMsK0VBQStFLENBQUMsVUFBVTtJQUNqRyxPQUFPLCtCQUErQixDQUFDLGdDQUFnQyxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUVELFNBQVMsNEVBQTRFLENBQUMsR0FBRztJQUN2RixJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksK0JBQStCLENBQUMsK0JBQStCLENBQUMsRUFBRTtRQUNyRixNQUFNLElBQUksS0FBSyxDQUFDLDhGQUE4RixDQUFDLENBQUM7S0FDakg7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELFNBQVMsOEVBQThFLENBQUMsVUFBVTtJQUNoRyxPQUFPLCtCQUErQixDQUFDLCtCQUErQixDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDdkgsQ0FBQztBQUdELElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixHQUFHO0lBQ2xELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSx3REFBd0Q7UUFDOUQsYUFBYSxFQUFFLElBQUk7UUFDbkIsY0FBYyxFQUFFLElBQUk7UUFDcEIsV0FBVyxFQUFFLCtCQUErQixDQUFDLGdDQUFnQztRQUM3RSxZQUFZLEVBQUUsK0JBQStCLENBQUMsK0JBQStCO1FBQzdFLGdCQUFnQixFQUFFLDZFQUE2RTtRQUMvRixrQkFBa0IsRUFBRSwrRUFBK0U7UUFDbkcsaUJBQWlCLEVBQUUsNEVBQTRFO1FBQy9GLG1CQUFtQixFQUFFLDhFQUE4RTtLQUNwRztDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxuLy8gT3JpZ2luYWwgZmlsZSBjb21tZW50czpcbi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuLy9cbid1c2Ugc3RyaWN0JztcbnZhciBncnBjID0gcmVxdWlyZSgnZ3JwYycpO1xudmFyIEV2ZW50c19Qcm9jZXNzaW5nX1Byb2Nlc3NvcnNfcGIgPSByZXF1aXJlKCcuLi9FdmVudHMuUHJvY2Vzc2luZy9Qcm9jZXNzb3JzX3BiLmpzJyk7XG52YXIgRXZlbnRzX0NvbW1pdHRlZEV2ZW50X3BiID0gcmVxdWlyZSgnLi4vRXZlbnRzL0NvbW1pdHRlZEV2ZW50X3BiLmpzJyk7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19wcm9jZXNzaW5nX1Byb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlKGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBFdmVudHNfUHJvY2Vzc2luZ19Qcm9jZXNzb3JzX3BiLlByb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5wcm9jZXNzaW5nLlByb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlJyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX3Byb2Nlc3NpbmdfUHJvY2Vzc29yQ2xpZW50VG9SdW50aW1lUmVzcG9uc2UoYnVmZmVyX2FyZykge1xuICByZXR1cm4gRXZlbnRzX1Byb2Nlc3NpbmdfUHJvY2Vzc29yc19wYi5Qcm9jZXNzb3JDbGllbnRUb1J1bnRpbWVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19wcm9jZXNzaW5nX1Byb2Nlc3NvclJ1bnRpbWVUb0NsaWVudFJlcXVlc3QoYXJnKSB7XG4gIGlmICghKGFyZyBpbnN0YW5jZW9mIEV2ZW50c19Qcm9jZXNzaW5nX1Byb2Nlc3NvcnNfcGIuUHJvY2Vzc29yUnVudGltZVRvQ2xpZW50UmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgZG9saXR0bGUucnVudGltZS5ldmVudHMucHJvY2Vzc2luZy5Qcm9jZXNzb3JSdW50aW1lVG9DbGllbnRSZXF1ZXN0Jyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX3Byb2Nlc3NpbmdfUHJvY2Vzc29yUnVudGltZVRvQ2xpZW50UmVxdWVzdChidWZmZXJfYXJnKSB7XG4gIHJldHVybiBFdmVudHNfUHJvY2Vzc2luZ19Qcm9jZXNzb3JzX3BiLlByb2Nlc3NvclJ1bnRpbWVUb0NsaWVudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkobmV3IFVpbnQ4QXJyYXkoYnVmZmVyX2FyZykpO1xufVxuXG5cbnZhciBQcm9jZXNzb3JzU2VydmljZSA9IGV4cG9ydHMuUHJvY2Vzc29yc1NlcnZpY2UgPSB7XG4gIGNvbm5lY3Q6IHtcbiAgICBwYXRoOiAnL2RvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLnByb2Nlc3NpbmcuUHJvY2Vzc29ycy9Db25uZWN0JyxcbiAgICByZXF1ZXN0U3RyZWFtOiB0cnVlLFxuICAgIHJlc3BvbnNlU3RyZWFtOiB0cnVlLFxuICAgIHJlcXVlc3RUeXBlOiBFdmVudHNfUHJvY2Vzc2luZ19Qcm9jZXNzb3JzX3BiLlByb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlLFxuICAgIHJlc3BvbnNlVHlwZTogRXZlbnRzX1Byb2Nlc3NpbmdfUHJvY2Vzc29yc19wYi5Qcm9jZXNzb3JSdW50aW1lVG9DbGllbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RTZXJpYWxpemU6IHNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19wcm9jZXNzaW5nX1Byb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlLFxuICAgIHJlcXVlc3REZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfZG9saXR0bGVfcnVudGltZV9ldmVudHNfcHJvY2Vzc2luZ19Qcm9jZXNzb3JDbGllbnRUb1J1bnRpbWVSZXNwb25zZSxcbiAgICByZXNwb25zZVNlcmlhbGl6ZTogc2VyaWFsaXplX2RvbGl0dGxlX3J1bnRpbWVfZXZlbnRzX3Byb2Nlc3NpbmdfUHJvY2Vzc29yUnVudGltZVRvQ2xpZW50UmVxdWVzdCxcbiAgICByZXNwb25zZURlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV9kb2xpdHRsZV9ydW50aW1lX2V2ZW50c19wcm9jZXNzaW5nX1Byb2Nlc3NvclJ1bnRpbWVUb0NsaWVudFJlcXVlc3QsXG4gIH0sXG59O1xuXG5leHBvcnRzLlByb2Nlc3NvcnNDbGllbnQgPSBncnBjLm1ha2VHZW5lcmljQ2xpZW50Q29uc3RydWN0b3IoUHJvY2Vzc29yc1NlcnZpY2UpO1xuIl19