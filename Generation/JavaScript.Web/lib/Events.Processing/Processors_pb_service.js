"use strict";
// package: dolittle.runtime.events.processing
// file: Events.Processing/Processors.proto
var Events_Processing_Processors_pb = require("../Events.Processing/Processors_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;
var Processors = (function () {
    function Processors() { }
    Processors.serviceName = "dolittle.runtime.events.processing.Processors";
    return Processors;
}());
Processors.Connect = {
    methodName: "Connect",
    service: Processors,
    requestStream: true,
    responseStream: true,
    requestType: Events_Processing_Processors_pb.ProcessorClientToRuntimeResponse,
    responseType: Events_Processing_Processors_pb.ProcessorRuntimeToClientRequest
};
exports.Processors = Processors;
function ProcessorsClient(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
}
ProcessorsClient.prototype.connect = function connect(metadata) {
    var listeners = {
        data: [],
        end: [],
        status: []
    };
    var client = grpc.client(Processors.Connect, {
        host: this.serviceHost,
        metadata: metadata,
        transport: this.options.transport
    });
    client.onEnd(function (status, statusMessage, trailers) {
        listeners.status.forEach(function (handler) {
            handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners.end.forEach(function (handler) {
            handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners = null;
    });
    client.onMessage(function (message) {
        listeners.data.forEach(function (handler) {
            handler(message);
        });
    });
    client.start(metadata);
    return {
        on: function (type, handler) {
            listeners[type].push(handler);
            return this;
        },
        write: function (requestMessage) {
            client.send(requestMessage);
            return this;
        },
        end: function () {
            client.finishSend();
        },
        cancel: function () {
            listeners = null;
            client.close();
        }
    };
};
exports.ProcessorsClient = ProcessorsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc29yc19wYl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJFdmVudHMuUHJvY2Vzc2luZy9Qcm9jZXNzb3JzX3BiX3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QywyQ0FBMkM7QUFFM0MsSUFBSSwrQkFBK0IsR0FBRyxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUNwRixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFcEQsSUFBSSxVQUFVLEdBQUcsQ0FBQztJQUNoQixTQUFTLFVBQVUsS0FBSSxDQUFDO0lBQ3hCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsK0NBQStDLENBQUM7SUFDekUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVMLFVBQVUsQ0FBQyxPQUFPLEdBQUc7SUFDbkIsVUFBVSxFQUFFLFNBQVM7SUFDckIsT0FBTyxFQUFFLFVBQVU7SUFDbkIsYUFBYSxFQUFFLElBQUk7SUFDbkIsY0FBYyxFQUFFLElBQUk7SUFDcEIsV0FBVyxFQUFFLCtCQUErQixDQUFDLGdDQUFnQztJQUM3RSxZQUFZLEVBQUUsK0JBQStCLENBQUMsK0JBQStCO0NBQzlFLENBQUM7QUFFRixPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUVoQyxTQUFTLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPO0lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRUQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxRQUFRO0lBQzVELElBQUksU0FBUyxHQUFHO1FBQ2QsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUNGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztLQUNsQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRO1FBQ3BELFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztZQUN4QyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDckMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxPQUFPO1FBQ2hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTztZQUN0QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsT0FBTztRQUNMLEVBQUUsRUFBRSxVQUFVLElBQUksRUFBRSxPQUFPO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsS0FBSyxFQUFFLFVBQVUsY0FBYztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELEdBQUcsRUFBRTtZQUNILE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlOiBkb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5wcm9jZXNzaW5nXG4vLyBmaWxlOiBFdmVudHMuUHJvY2Vzc2luZy9Qcm9jZXNzb3JzLnByb3RvXG5cbnZhciBFdmVudHNfUHJvY2Vzc2luZ19Qcm9jZXNzb3JzX3BiID0gcmVxdWlyZShcIi4uL0V2ZW50cy5Qcm9jZXNzaW5nL1Byb2Nlc3NvcnNfcGJcIik7XG52YXIgZ3JwYyA9IHJlcXVpcmUoXCJAaW1wcm9iYWJsZS1lbmcvZ3JwYy13ZWJcIikuZ3JwYztcblxudmFyIFByb2Nlc3NvcnMgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9jZXNzb3JzKCkge31cbiAgUHJvY2Vzc29ycy5zZXJ2aWNlTmFtZSA9IFwiZG9saXR0bGUucnVudGltZS5ldmVudHMucHJvY2Vzc2luZy5Qcm9jZXNzb3JzXCI7XG4gIHJldHVybiBQcm9jZXNzb3JzO1xufSgpKTtcblxuUHJvY2Vzc29ycy5Db25uZWN0ID0ge1xuICBtZXRob2ROYW1lOiBcIkNvbm5lY3RcIixcbiAgc2VydmljZTogUHJvY2Vzc29ycyxcbiAgcmVxdWVzdFN0cmVhbTogdHJ1ZSxcbiAgcmVzcG9uc2VTdHJlYW06IHRydWUsXG4gIHJlcXVlc3RUeXBlOiBFdmVudHNfUHJvY2Vzc2luZ19Qcm9jZXNzb3JzX3BiLlByb2Nlc3NvckNsaWVudFRvUnVudGltZVJlc3BvbnNlLFxuICByZXNwb25zZVR5cGU6IEV2ZW50c19Qcm9jZXNzaW5nX1Byb2Nlc3NvcnNfcGIuUHJvY2Vzc29yUnVudGltZVRvQ2xpZW50UmVxdWVzdFxufTtcblxuZXhwb3J0cy5Qcm9jZXNzb3JzID0gUHJvY2Vzc29ycztcblxuZnVuY3Rpb24gUHJvY2Vzc29yc0NsaWVudChzZXJ2aWNlSG9zdCwgb3B0aW9ucykge1xuICB0aGlzLnNlcnZpY2VIb3N0ID0gc2VydmljZUhvc3Q7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG59XG5cblByb2Nlc3NvcnNDbGllbnQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiBjb25uZWN0KG1ldGFkYXRhKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB7XG4gICAgZGF0YTogW10sXG4gICAgZW5kOiBbXSxcbiAgICBzdGF0dXM6IFtdXG4gIH07XG4gIHZhciBjbGllbnQgPSBncnBjLmNsaWVudChQcm9jZXNzb3JzLkNvbm5lY3QsIHtcbiAgICBob3N0OiB0aGlzLnNlcnZpY2VIb3N0LFxuICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICB0cmFuc3BvcnQ6IHRoaXMub3B0aW9ucy50cmFuc3BvcnRcbiAgfSk7XG4gIGNsaWVudC5vbkVuZChmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNNZXNzYWdlLCB0cmFpbGVycykge1xuICAgIGxpc3RlbmVycy5zdGF0dXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcih7IGNvZGU6IHN0YXR1cywgZGV0YWlsczogc3RhdHVzTWVzc2FnZSwgbWV0YWRhdGE6IHRyYWlsZXJzIH0pO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycy5lbmQuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcih7IGNvZGU6IHN0YXR1cywgZGV0YWlsczogc3RhdHVzTWVzc2FnZSwgbWV0YWRhdGE6IHRyYWlsZXJzIH0pO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IG51bGw7XG4gIH0pO1xuICBjbGllbnQub25NZXNzYWdlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbGlzdGVuZXJzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihtZXNzYWdlKTtcbiAgICB9KVxuICB9KTtcbiAgY2xpZW50LnN0YXJ0KG1ldGFkYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBvbjogZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB3cml0ZTogZnVuY3Rpb24gKHJlcXVlc3RNZXNzYWdlKSB7XG4gICAgICBjbGllbnQuc2VuZChyZXF1ZXN0TWVzc2FnZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgY2xpZW50LmZpbmlzaFNlbmQoKTtcbiAgICB9LFxuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuUHJvY2Vzc29yc0NsaWVudCA9IFByb2Nlc3NvcnNDbGllbnQ7XG5cbiJdfQ==