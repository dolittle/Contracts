"use strict";
// package: dolittle.dependencyinversion
// file: DependencyInversion/container.proto
var DependencyInversion_container_pb = require("../DependencyInversion/container_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;
var Container = (function () {
    function Container() { }
    Container.serviceName = "dolittle.dependencyinversion.Container";
    return Container;
}());
Container.GetBindings = {
    methodName: "GetBindings",
    service: Container,
    requestStream: false,
    responseStream: false,
    requestType: DependencyInversion_container_pb.GetBindingsRequest,
    responseType: DependencyInversion_container_pb.Bindings
};
exports.Container = Container;
function ContainerClient(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
}
ContainerClient.prototype.getBindings = function getBindings(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(Container.GetBindings, {
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
exports.ContainerClient = ContainerClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyX3BiX3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIkRlcGVuZGVuY3lJbnZlcnNpb24vY29udGFpbmVyX3BiX3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF3QztBQUN4Qyw0Q0FBNEM7QUFFNUMsSUFBSSxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUN0RixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFcEQsSUFBSSxTQUFTLEdBQUcsQ0FBQztJQUNmLFNBQVMsU0FBUyxLQUFJLENBQUM7SUFDdkIsU0FBUyxDQUFDLFdBQVcsR0FBRyx3Q0FBd0MsQ0FBQztJQUNqRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRUwsU0FBUyxDQUFDLFdBQVcsR0FBRztJQUN0QixVQUFVLEVBQUUsYUFBYTtJQUN6QixPQUFPLEVBQUUsU0FBUztJQUNsQixhQUFhLEVBQUUsS0FBSztJQUNwQixjQUFjLEVBQUUsS0FBSztJQUNyQixXQUFXLEVBQUUsZ0NBQWdDLENBQUMsa0JBQWtCO0lBQ2hFLFlBQVksRUFBRSxnQ0FBZ0MsQ0FBQyxRQUFRO0NBQ3hELENBQUM7QUFFRixPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUU5QixTQUFTLGVBQWUsQ0FBQyxXQUFXLEVBQUUsT0FBTztJQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUVELGVBQWUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsV0FBVyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUTtJQUM3RixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzFCLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekI7SUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7UUFDN0MsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztRQUN6QixLQUFLLEVBQUUsVUFBVSxRQUFRO1lBQ3ZCLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM1QyxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDakMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTztRQUNMLE1BQU0sRUFBRTtZQUNOLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlOiBkb2xpdHRsZS5kZXBlbmRlbmN5aW52ZXJzaW9uXG4vLyBmaWxlOiBEZXBlbmRlbmN5SW52ZXJzaW9uL2NvbnRhaW5lci5wcm90b1xuXG52YXIgRGVwZW5kZW5jeUludmVyc2lvbl9jb250YWluZXJfcGIgPSByZXF1aXJlKFwiLi4vRGVwZW5kZW5jeUludmVyc2lvbi9jb250YWluZXJfcGJcIik7XG52YXIgZ3JwYyA9IHJlcXVpcmUoXCJAaW1wcm9iYWJsZS1lbmcvZ3JwYy13ZWJcIikuZ3JwYztcblxudmFyIENvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbnRhaW5lcigpIHt9XG4gIENvbnRhaW5lci5zZXJ2aWNlTmFtZSA9IFwiZG9saXR0bGUuZGVwZW5kZW5jeWludmVyc2lvbi5Db250YWluZXJcIjtcbiAgcmV0dXJuIENvbnRhaW5lcjtcbn0oKSk7XG5cbkNvbnRhaW5lci5HZXRCaW5kaW5ncyA9IHtcbiAgbWV0aG9kTmFtZTogXCJHZXRCaW5kaW5nc1wiLFxuICBzZXJ2aWNlOiBDb250YWluZXIsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBEZXBlbmRlbmN5SW52ZXJzaW9uX2NvbnRhaW5lcl9wYi5HZXRCaW5kaW5nc1JlcXVlc3QsXG4gIHJlc3BvbnNlVHlwZTogRGVwZW5kZW5jeUludmVyc2lvbl9jb250YWluZXJfcGIuQmluZGluZ3Ncbn07XG5cbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuXG5mdW5jdGlvbiBDb250YWluZXJDbGllbnQoc2VydmljZUhvc3QsIG9wdGlvbnMpIHtcbiAgdGhpcy5zZXJ2aWNlSG9zdCA9IHNlcnZpY2VIb3N0O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xufVxuXG5Db250YWluZXJDbGllbnQucHJvdG90eXBlLmdldEJpbmRpbmdzID0gZnVuY3Rpb24gZ2V0QmluZGluZ3MocmVxdWVzdE1lc3NhZ2UsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzFdO1xuICB9XG4gIHZhciBjbGllbnQgPSBncnBjLnVuYXJ5KENvbnRhaW5lci5HZXRCaW5kaW5ncywge1xuICAgIHJlcXVlc3Q6IHJlcXVlc3RNZXNzYWdlLFxuICAgIGhvc3Q6IHRoaXMuc2VydmljZUhvc3QsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgIHRyYW5zcG9ydDogdGhpcy5vcHRpb25zLnRyYW5zcG9ydCxcbiAgICBkZWJ1ZzogdGhpcy5vcHRpb25zLmRlYnVnLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSBncnBjLkNvZGUuT0spIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpO1xuICAgICAgICAgIGVyci5jb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgIGVyci5tZXRhZGF0YSA9IHJlc3BvbnNlLnRyYWlsZXJzO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5Db250YWluZXJDbGllbnQgPSBDb250YWluZXJDbGllbnQ7XG5cbiJdfQ==