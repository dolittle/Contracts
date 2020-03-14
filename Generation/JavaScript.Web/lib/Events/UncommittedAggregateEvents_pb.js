"use strict";
// source: Events/UncommittedAggregateEvents.proto
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
var Events_UncommittedEvent_pb = require('../Events/UncommittedEvent_pb.js');
goog.object.extend(proto, Events_UncommittedEvent_pb);
goog.exportSymbol('proto.dolittle.runtime.events.UncommittedAggregateEvents', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.dolittle.runtime.events.UncommittedAggregateEvents.repeatedFields_, null);
};
goog.inherits(proto.dolittle.runtime.events.UncommittedAggregateEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.dolittle.runtime.events.UncommittedAggregateEvents.displayName = 'proto.dolittle.runtime.events.UncommittedAggregateEvents';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.repeatedFields_ = [4];
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.toObject = function (opt_includeInstance) {
        return proto.dolittle.runtime.events.UncommittedAggregateEvents.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.dolittle.runtime.events.UncommittedAggregateEvents} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.dolittle.runtime.events.UncommittedAggregateEvents.toObject = function (includeInstance, msg) {
        var f, obj = {
            eventsource: msg.getEventsource_asB64(),
            aggregateroot: msg.getAggregateroot_asB64(),
            aggregaterootversion: jspb.Message.getFieldWithDefault(msg, 3, 0),
            eventsList: jspb.Message.toObjectList(msg.getEventsList(), Events_UncommittedEvent_pb.UncommittedEvent.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.dolittle.runtime.events.UncommittedAggregateEvents;
    return proto.dolittle.runtime.events.UncommittedAggregateEvents.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.UncommittedAggregateEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setEventsource(value);
                break;
            case 2:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setAggregateroot(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setAggregaterootversion(value);
                break;
            case 4:
                var value = new Events_UncommittedEvent_pb.UncommittedEvent;
                reader.readMessage(value, Events_UncommittedEvent_pb.UncommittedEvent.deserializeBinaryFromReader);
                msg.addEvents(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.dolittle.runtime.events.UncommittedAggregateEvents.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.UncommittedAggregateEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getEventsource_asU8();
    if (f.length > 0) {
        writer.writeBytes(1, f);
    }
    f = message.getAggregateroot_asU8();
    if (f.length > 0) {
        writer.writeBytes(2, f);
    }
    f = message.getAggregaterootversion();
    if (f !== 0) {
        writer.writeUint32(3, f);
    }
    f = message.getEventsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(4, f, Events_UncommittedEvent_pb.UncommittedEvent.serializeBinaryToWriter);
    }
};
/**
 * optional bytes eventSource = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getEventsource = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/**
 * optional bytes eventSource = 1;
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {string}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getEventsource_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEventsource()));
};
/**
 * optional bytes eventSource = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getEventsource_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEventsource()));
};
/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents} returns this
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.setEventsource = function (value) {
    return jspb.Message.setProto3BytesField(this, 1, value);
};
/**
 * optional bytes aggregateRoot = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getAggregateroot = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/**
 * optional bytes aggregateRoot = 2;
 * This is a type-conversion wrapper around `getAggregateroot()`
 * @return {string}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getAggregateroot_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAggregateroot()));
};
/**
 * optional bytes aggregateRoot = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAggregateroot()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getAggregateroot_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAggregateroot()));
};
/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents} returns this
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.setAggregateroot = function (value) {
    return jspb.Message.setProto3BytesField(this, 2, value);
};
/**
 * optional uint32 aggregateRootVersion = 3;
 * @return {number}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getAggregaterootversion = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents} returns this
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.setAggregaterootversion = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * repeated UncommittedEvent Events = 4;
 * @return {!Array<!proto.dolittle.runtime.events.UncommittedEvent>}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.getEventsList = function () {
    return /** @type{!Array<!proto.dolittle.runtime.events.UncommittedEvent>} */ (jspb.Message.getRepeatedWrapperField(this, Events_UncommittedEvent_pb.UncommittedEvent, 4));
};
/**
 * @param {!Array<!proto.dolittle.runtime.events.UncommittedEvent>} value
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents} returns this
*/
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.setEventsList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 4, value);
};
/**
 * @param {!proto.dolittle.runtime.events.UncommittedEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dolittle.runtime.events.UncommittedEvent}
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.addEvents = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dolittle.runtime.events.UncommittedEvent, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dolittle.runtime.events.UncommittedAggregateEvents} returns this
 */
proto.dolittle.runtime.events.UncommittedAggregateEvents.prototype.clearEventsList = function () {
    return this.setEventsList([]);
};
goog.object.extend(exports, proto.dolittle.runtime.events);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHNfcGIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIkV2ZW50cy9VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c19wYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQWtEO0FBQ2xEOzs7Ozs7R0FNRztBQUNILGlDQUFpQztBQUVqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7QUFFdkMsSUFBSSwwQkFBMEIsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLDBEQUEwRCxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1Rjs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsVUFBUyxRQUFRO0lBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakksQ0FBQyxDQUFDO0FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RGLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEs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L1VuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50X3BiID0gcmVxdWlyZSgnLi4vRXZlbnRzL1VuY29tbWl0dGVkRXZlbnRfcGIuanMnKTtcbmdvb2cub2JqZWN0LmV4dGVuZChwcm90bywgRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRfcGIpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzJywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cyA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMuZGlzcGxheU5hbWUgPSAncHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMnO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5yZXBlYXRlZEZpZWxkc18gPSBbNF07XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHN9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBldmVudHNvdXJjZTogbXNnLmdldEV2ZW50c291cmNlX2FzQjY0KCksXG4gICAgYWdncmVnYXRlcm9vdDogbXNnLmdldEFnZ3JlZ2F0ZXJvb3RfYXNCNjQoKSxcbiAgICBhZ2dyZWdhdGVyb290dmVyc2lvbjoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCAwKSxcbiAgICBldmVudHNMaXN0OiBqc3BiLk1lc3NhZ2UudG9PYmplY3RMaXN0KG1zZy5nZXRFdmVudHNMaXN0KCksXG4gICAgRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRfcGIuVW5jb21taXR0ZWRFdmVudC50b09iamVjdCwgaW5jbHVkZUluc3RhbmNlKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHN9XG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHM7XG4gIHJldHVybiBwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c30gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c31cbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldEV2ZW50c291cmNlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChyZWFkZXIucmVhZEJ5dGVzKCkpO1xuICAgICAgbXNnLnNldEFnZ3JlZ2F0ZXJvb3QodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZFVpbnQzMigpKTtcbiAgICAgIG1zZy5zZXRBZ2dyZWdhdGVyb290dmVyc2lvbih2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgRXZlbnRzX1VuY29tbWl0dGVkRXZlbnRfcGIuVW5jb21taXR0ZWRFdmVudDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxFdmVudHNfVW5jb21taXR0ZWRFdmVudF9wYi5VbmNvbW1pdHRlZEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuYWRkRXZlbnRzKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHN9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEV2ZW50c291cmNlX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEFnZ3JlZ2F0ZXJvb3RfYXNVOCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlQnl0ZXMoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0QWdncmVnYXRlcm9vdHZlcnNpb24oKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVVaW50MzIoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RXZlbnRzTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgNCxcbiAgICAgIGYsXG4gICAgICBFdmVudHNfVW5jb21taXR0ZWRFdmVudF9wYi5VbmNvbW1pdHRlZEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIGV2ZW50U291cmNlID0gMTtcbiAqIEByZXR1cm4geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfVxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuZ2V0RXZlbnRzb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IShzdHJpbmd8VWludDhBcnJheSl9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgZXZlbnRTb3VyY2UgPSAxO1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0RXZlbnRzb3VyY2UoKWBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMucHJvdG90eXBlLmdldEV2ZW50c291cmNlX2FzQjY0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzQjY0KFxuICAgICAgdGhpcy5nZXRFdmVudHNvdXJjZSgpKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgZXZlbnRTb3VyY2UgPSAxO1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRFdmVudHNvdXJjZSgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS5nZXRFdmVudHNvdXJjZV9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0RXZlbnRzb3VyY2UoKSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuc2V0RXZlbnRzb3VyY2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIGFnZ3JlZ2F0ZVJvb3QgPSAyO1xuICogQHJldHVybiB7IShzdHJpbmd8VWludDhBcnJheSl9XG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS5nZXRBZ2dyZWdhdGVyb290ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIGFnZ3JlZ2F0ZVJvb3QgPSAyO1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0QWdncmVnYXRlcm9vdCgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuZ2V0QWdncmVnYXRlcm9vdF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuYnl0ZXNBc0I2NChcbiAgICAgIHRoaXMuZ2V0QWdncmVnYXRlcm9vdCgpKSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgYWdncmVnYXRlUm9vdCA9IDI7XG4gKiBOb3RlIHRoYXQgVWludDhBcnJheSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBicm93c2Vycy5cbiAqIEBzZWUgaHR0cDovL2Nhbml1c2UuY29tL1VpbnQ4QXJyYXlcbiAqIFRoaXMgaXMgYSB0eXBlLWNvbnZlcnNpb24gd3JhcHBlciBhcm91bmQgYGdldEFnZ3JlZ2F0ZXJvb3QoKWBcbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuZ2V0QWdncmVnYXRlcm9vdF9hc1U4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoanNwYi5NZXNzYWdlLmJ5dGVzQXNVOChcbiAgICAgIHRoaXMuZ2V0QWdncmVnYXRlcm9vdCgpKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshKHN0cmluZ3xVaW50OEFycmF5KX0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS5zZXRBZ2dyZWdhdGVyb290ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCeXRlc0ZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCB1aW50MzIgYWdncmVnYXRlUm9vdFZlcnNpb24gPSAzO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuZ2V0QWdncmVnYXRlcm9vdHZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMucHJvdG90eXBlLnNldEFnZ3JlZ2F0ZXJvb3R2ZXJzaW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgVW5jb21taXR0ZWRFdmVudCBFdmVudHMgPSA0O1xuICogQHJldHVybiB7IUFycmF5PCFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEV2ZW50Pn1cbiAqL1xucHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHMucHJvdG90eXBlLmdldEV2ZW50c0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkRXZlbnQ+fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIEV2ZW50c19VbmNvbW1pdHRlZEV2ZW50X3BiLlVuY29tbWl0dGVkRXZlbnQsIDQpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFBcnJheTwhcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRFdmVudD59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRBZ2dyZWdhdGVFdmVudHN9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS5zZXRFdmVudHNMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCA0LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRFdmVudD19IG9wdF92YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEV2ZW50fVxuICovXG5wcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50cy5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24ob3B0X3ZhbHVlLCBvcHRfaW5kZXgpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5hZGRUb1JlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDQsIG9wdF92YWx1ZSwgcHJvdG8uZG9saXR0bGUucnVudGltZS5ldmVudHMuVW5jb21taXR0ZWRFdmVudCwgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cy5VbmNvbW1pdHRlZEFnZ3JlZ2F0ZUV2ZW50c30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLmRvbGl0dGxlLnJ1bnRpbWUuZXZlbnRzLlVuY29tbWl0dGVkQWdncmVnYXRlRXZlbnRzLnByb3RvdHlwZS5jbGVhckV2ZW50c0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0RXZlbnRzTGlzdChbXSk7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5kb2xpdHRsZS5ydW50aW1lLmV2ZW50cyk7XG4iXX0=