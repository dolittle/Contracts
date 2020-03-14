"use strict";
// package: dolittle.runtime.services
// file: Services/BoundServices.proto
var Services_BoundServices_pb = require("../Services/BoundServices_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;
var BoundServices = (function () {
    function BoundServices() { }
    BoundServices.serviceName = "dolittle.runtime.services.BoundServices";
    return BoundServices;
}());
BoundServices.GetForServiceType = {
    methodName: "GetForServiceType",
    service: BoundServices,
    requestStream: false,
    responseStream: false,
    requestType: Services_BoundServices_pb.ServiceType,
    responseType: Services_BoundServices_pb.Services
};
exports.BoundServices = BoundServices;
function BoundServicesClient(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
}
BoundServicesClient.prototype.getForServiceType = function getForServiceType(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(BoundServices.GetForServiceType, {
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
exports.BoundServicesClient = BoundServicesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm91bmRTZXJ2aWNlc19wYl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJTZXJ2aWNlcy9Cb3VuZFNlcnZpY2VzX3BiX3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFFckMsSUFBSSx5QkFBeUIsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN4RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFcEQsSUFBSSxhQUFhLEdBQUcsQ0FBQztJQUNuQixTQUFTLGFBQWEsS0FBSSxDQUFDO0lBQzNCLGFBQWEsQ0FBQyxXQUFXLEdBQUcseUNBQXlDLENBQUM7SUFDdEUsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVMLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRztJQUNoQyxVQUFVLEVBQUUsbUJBQW1CO0lBQy9CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxXQUFXO0lBQ2xELFlBQVksRUFBRSx5QkFBeUIsQ0FBQyxRQUFRO0NBQ2pELENBQUM7QUFFRixPQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUV0QyxTQUFTLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxPQUFPO0lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRUQsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQzdHLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO1FBQ3ZELE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1FBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDekIsS0FBSyxFQUFFLFVBQVUsUUFBUTtZQUN2QixJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDNUMsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUMzQixHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ2pDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1FBQ0gsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUNILE9BQU87UUFDTCxNQUFNLEVBQUU7WUFDTixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2U6IGRvbGl0dGxlLnJ1bnRpbWUuc2VydmljZXNcbi8vIGZpbGU6IFNlcnZpY2VzL0JvdW5kU2VydmljZXMucHJvdG9cblxudmFyIFNlcnZpY2VzX0JvdW5kU2VydmljZXNfcGIgPSByZXF1aXJlKFwiLi4vU2VydmljZXMvQm91bmRTZXJ2aWNlc19wYlwiKTtcbnZhciBncnBjID0gcmVxdWlyZShcIkBpbXByb2JhYmxlLWVuZy9ncnBjLXdlYlwiKS5ncnBjO1xuXG52YXIgQm91bmRTZXJ2aWNlcyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJvdW5kU2VydmljZXMoKSB7fVxuICBCb3VuZFNlcnZpY2VzLnNlcnZpY2VOYW1lID0gXCJkb2xpdHRsZS5ydW50aW1lLnNlcnZpY2VzLkJvdW5kU2VydmljZXNcIjtcbiAgcmV0dXJuIEJvdW5kU2VydmljZXM7XG59KCkpO1xuXG5Cb3VuZFNlcnZpY2VzLkdldEZvclNlcnZpY2VUeXBlID0ge1xuICBtZXRob2ROYW1lOiBcIkdldEZvclNlcnZpY2VUeXBlXCIsXG4gIHNlcnZpY2U6IEJvdW5kU2VydmljZXMsXG4gIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gIHJlcXVlc3RUeXBlOiBTZXJ2aWNlc19Cb3VuZFNlcnZpY2VzX3BiLlNlcnZpY2VUeXBlLFxuICByZXNwb25zZVR5cGU6IFNlcnZpY2VzX0JvdW5kU2VydmljZXNfcGIuU2VydmljZXNcbn07XG5cbmV4cG9ydHMuQm91bmRTZXJ2aWNlcyA9IEJvdW5kU2VydmljZXM7XG5cbmZ1bmN0aW9uIEJvdW5kU2VydmljZXNDbGllbnQoc2VydmljZUhvc3QsIG9wdGlvbnMpIHtcbiAgdGhpcy5zZXJ2aWNlSG9zdCA9IHNlcnZpY2VIb3N0O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xufVxuXG5Cb3VuZFNlcnZpY2VzQ2xpZW50LnByb3RvdHlwZS5nZXRGb3JTZXJ2aWNlVHlwZSA9IGZ1bmN0aW9uIGdldEZvclNlcnZpY2VUeXBlKHJlcXVlc3RNZXNzYWdlLCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTtcbiAgfVxuICB2YXIgY2xpZW50ID0gZ3JwYy51bmFyeShCb3VuZFNlcnZpY2VzLkdldEZvclNlcnZpY2VUeXBlLCB7XG4gICAgcmVxdWVzdDogcmVxdWVzdE1lc3NhZ2UsXG4gICAgaG9zdDogdGhpcy5zZXJ2aWNlSG9zdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgdHJhbnNwb3J0OiB0aGlzLm9wdGlvbnMudHJhbnNwb3J0LFxuICAgIGRlYnVnOiB0aGlzLm9wdGlvbnMuZGVidWcsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IGdycGMuQ29kZS5PSykge1xuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSk7XG4gICAgICAgICAgZXJyLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgZXJyLm1ldGFkYXRhID0gcmVzcG9uc2UudHJhaWxlcnM7XG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkJvdW5kU2VydmljZXNDbGllbnQgPSBCb3VuZFNlcnZpY2VzQ2xpZW50O1xuXG4iXX0=