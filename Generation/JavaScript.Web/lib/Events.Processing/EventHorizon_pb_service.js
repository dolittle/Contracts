"use strict";
// package: dolittle.runtime.events.processing
// file: Events.Processing/EventHorizon.proto
var Events_Processing_EventHorizon_pb = require("../Events.Processing/EventHorizon_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;
var EventHorizon = (function () {
    function EventHorizon() { }
    EventHorizon.serviceName = "dolittle.runtime.events.processing.EventHorizon";
    return EventHorizon;
}());
EventHorizon.Subscribe = {
    methodName: "Subscribe",
    service: EventHorizon,
    requestStream: false,
    responseStream: true,
    requestType: Events_Processing_EventHorizon_pb.EventHorizonSubscriberToPublisherRequest,
    responseType: Events_Processing_EventHorizon_pb.EventHorizonPublisherToSubscriberResponse
};
exports.EventHorizon = EventHorizon;
function EventHorizonClient(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
}
EventHorizonClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
    var listeners = {
        data: [],
        end: [],
        status: []
    };
    var client = grpc.invoke(EventHorizon.Subscribe, {
        request: requestMessage,
        host: this.serviceHost,
        metadata: metadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onMessage: function (responseMessage) {
            listeners.data.forEach(function (handler) {
                handler(responseMessage);
            });
        },
        onEnd: function (status, statusMessage, trailers) {
            listeners.status.forEach(function (handler) {
                handler({ code: status, details: statusMessage, metadata: trailers });
            });
            listeners.end.forEach(function (handler) {
                handler({ code: status, details: statusMessage, metadata: trailers });
            });
            listeners = null;
        }
    });
    return {
        on: function (type, handler) {
            listeners[type].push(handler);
            return this;
        },
        cancel: function () {
            listeners = null;
            client.close();
        }
    };
};
exports.EventHorizonClient = EventHorizonClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRIb3Jpem9uX3BiX3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIkV2ZW50cy5Qcm9jZXNzaW5nL0V2ZW50SG9yaXpvbl9wYl9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBRTdDLElBQUksaUNBQWlDLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDeEYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXBELElBQUksWUFBWSxHQUFHLENBQUM7SUFDbEIsU0FBUyxZQUFZLEtBQUksQ0FBQztJQUMxQixZQUFZLENBQUMsV0FBVyxHQUFHLGlEQUFpRCxDQUFDO0lBQzdFLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFTCxZQUFZLENBQUMsU0FBUyxHQUFHO0lBQ3ZCLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFdBQVcsRUFBRSxpQ0FBaUMsQ0FBQyx3Q0FBd0M7SUFDdkYsWUFBWSxFQUFFLGlDQUFpQyxDQUFDLHlDQUF5QztDQUMxRixDQUFDO0FBRUYsT0FBTyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFcEMsU0FBUyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsT0FBTztJQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsY0FBYyxFQUFFLFFBQVE7SUFDbEYsSUFBSSxTQUFTLEdBQUc7UUFDZCxJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1FBQy9DLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1FBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDekIsU0FBUyxFQUFFLFVBQVUsZUFBZTtZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87Z0JBQ3RDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxLQUFLLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVE7WUFDOUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUN4QyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7WUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87Z0JBQ3JDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUNILFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUNILE9BQU87UUFDTCxFQUFFLEVBQUUsVUFBVSxJQUFJLEVBQUUsT0FBTztZQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sRUFBRTtZQUNOLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDakIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZTogZG9saXR0bGUucnVudGltZS5ldmVudHMucHJvY2Vzc2luZ1xuLy8gZmlsZTogRXZlbnRzLlByb2Nlc3NpbmcvRXZlbnRIb3Jpem9uLnByb3RvXG5cbnZhciBFdmVudHNfUHJvY2Vzc2luZ19FdmVudEhvcml6b25fcGIgPSByZXF1aXJlKFwiLi4vRXZlbnRzLlByb2Nlc3NpbmcvRXZlbnRIb3Jpem9uX3BiXCIpO1xudmFyIGdycGMgPSByZXF1aXJlKFwiQGltcHJvYmFibGUtZW5nL2dycGMtd2ViXCIpLmdycGM7XG5cbnZhciBFdmVudEhvcml6b24gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudEhvcml6b24oKSB7fVxuICBFdmVudEhvcml6b24uc2VydmljZU5hbWUgPSBcImRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLnByb2Nlc3NpbmcuRXZlbnRIb3Jpem9uXCI7XG4gIHJldHVybiBFdmVudEhvcml6b247XG59KCkpO1xuXG5FdmVudEhvcml6b24uU3Vic2NyaWJlID0ge1xuICBtZXRob2ROYW1lOiBcIlN1YnNjcmliZVwiLFxuICBzZXJ2aWNlOiBFdmVudEhvcml6b24sXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogdHJ1ZSxcbiAgcmVxdWVzdFR5cGU6IEV2ZW50c19Qcm9jZXNzaW5nX0V2ZW50SG9yaXpvbl9wYi5FdmVudEhvcml6b25TdWJzY3JpYmVyVG9QdWJsaXNoZXJSZXF1ZXN0LFxuICByZXNwb25zZVR5cGU6IEV2ZW50c19Qcm9jZXNzaW5nX0V2ZW50SG9yaXpvbl9wYi5FdmVudEhvcml6b25QdWJsaXNoZXJUb1N1YnNjcmliZXJSZXNwb25zZVxufTtcblxuZXhwb3J0cy5FdmVudEhvcml6b24gPSBFdmVudEhvcml6b247XG5cbmZ1bmN0aW9uIEV2ZW50SG9yaXpvbkNsaWVudChzZXJ2aWNlSG9zdCwgb3B0aW9ucykge1xuICB0aGlzLnNlcnZpY2VIb3N0ID0gc2VydmljZUhvc3Q7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG59XG5cbkV2ZW50SG9yaXpvbkNsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSkge1xuICB2YXIgbGlzdGVuZXJzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIGVuZDogW10sXG4gICAgc3RhdHVzOiBbXVxuICB9O1xuICB2YXIgY2xpZW50ID0gZ3JwYy5pbnZva2UoRXZlbnRIb3Jpem9uLlN1YnNjcmliZSwge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uTWVzc2FnZTogZnVuY3Rpb24gKHJlc3BvbnNlTWVzc2FnZSkge1xuICAgICAgbGlzdGVuZXJzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyKHJlc3BvbnNlTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uRW5kOiBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNNZXNzYWdlLCB0cmFpbGVycykge1xuICAgICAgbGlzdGVuZXJzLnN0YXR1cy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoeyBjb2RlOiBzdGF0dXMsIGRldGFpbHM6IHN0YXR1c01lc3NhZ2UsIG1ldGFkYXRhOiB0cmFpbGVycyB9KTtcbiAgICAgIH0pO1xuICAgICAgbGlzdGVuZXJzLmVuZC5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIoeyBjb2RlOiBzdGF0dXMsIGRldGFpbHM6IHN0YXR1c01lc3NhZ2UsIG1ldGFkYXRhOiB0cmFpbGVycyB9KTtcbiAgICAgIH0pO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdLnB1c2goaGFuZGxlcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuRXZlbnRIb3Jpem9uQ2xpZW50ID0gRXZlbnRIb3Jpem9uQ2xpZW50O1xuXG4iXX0=