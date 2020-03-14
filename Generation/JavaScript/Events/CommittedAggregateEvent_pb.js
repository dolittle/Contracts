// source: Events/CommittedAggregateEvent.proto
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

var Artifacts_Artifact_pb = require('../Artifacts/Artifact_pb.js');
goog.object.extend(proto, Artifacts_Artifact_pb);
var Events_Cause_pb = require('../Events/Cause_pb.js');
goog.object.extend(proto, Events_Cause_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.dolittle.runtime.events.CommittedAggregateEvent', null, global);
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
proto.dolittle.runtime.events.CommittedAggregateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.CommittedAggregateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.CommittedAggregateEvent.displayName = 'proto.dolittle.runtime.events.CommittedAggregateEvent';
}



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
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.CommittedAggregateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.CommittedAggregateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventlogsequencenumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    occurred: (f = msg.getOccurred()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    aggregaterootversion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    eventsource: msg.getEventsource_asB64(),
    correlation: msg.getCorrelation_asB64(),
    microservice: msg.getMicroservice_asB64(),
    tenant: msg.getTenant_asB64(),
    cause: (f = msg.getCause()) && Events_Cause_pb.Cause.toObject(includeInstance, f),
    type: (f = msg.getType()) && Artifacts_Artifact_pb.Artifact.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.CommittedAggregateEvent;
  return proto.dolittle.runtime.events.CommittedAggregateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.CommittedAggregateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEventlogsequencenumber(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOccurred(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAggregaterootversion(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEventsource(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCorrelation(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMicroservice(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTenant(value);
      break;
    case 8:
      var value = new Events_Cause_pb.Cause;
      reader.readMessage(value,Events_Cause_pb.Cause.deserializeBinaryFromReader);
      msg.setCause(value);
      break;
    case 9:
      var value = new Artifacts_Artifact_pb.Artifact;
      reader.readMessage(value,Artifacts_Artifact_pb.Artifact.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
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
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.CommittedAggregateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.CommittedAggregateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventlogsequencenumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOccurred();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAggregaterootversion();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEventsource_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getCorrelation_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getMicroservice_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getTenant_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getCause();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      Events_Cause_pb.Cause.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Artifacts_Artifact_pb.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional uint32 eventLogSequenceNumber = 1;
 * @return {number}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getEventlogsequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setEventlogsequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp occurred = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getOccurred = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
*/
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setOccurred = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.clearOccurred = function() {
  return this.setOccurred(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.hasOccurred = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 aggregateRootVersion = 3;
 * @return {number}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getAggregaterootversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setAggregaterootversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes eventSource = 4;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getEventsource = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes eventSource = 4;
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {string}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getEventsource_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEventsource()));
};


/**
 * optional bytes eventSource = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEventsource()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getEventsource_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEventsource()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setEventsource = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes correlation = 5;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getCorrelation = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes correlation = 5;
 * This is a type-conversion wrapper around `getCorrelation()`
 * @return {string}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getCorrelation_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCorrelation()));
};


/**
 * optional bytes correlation = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCorrelation()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getCorrelation_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCorrelation()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setCorrelation = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes microservice = 6;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getMicroservice = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes microservice = 6;
 * This is a type-conversion wrapper around `getMicroservice()`
 * @return {string}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getMicroservice_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMicroservice()));
};


/**
 * optional bytes microservice = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMicroservice()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getMicroservice_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMicroservice()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setMicroservice = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes tenant = 7;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getTenant = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes tenant = 7;
 * This is a type-conversion wrapper around `getTenant()`
 * @return {string}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getTenant_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTenant()));
};


/**
 * optional bytes tenant = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTenant()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getTenant_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTenant()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setTenant = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional Cause cause = 8;
 * @return {?proto.dolittle.runtime.events.Cause}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getCause = function() {
  return /** @type{?proto.dolittle.runtime.events.Cause} */ (
    jspb.Message.getWrapperField(this, Events_Cause_pb.Cause, 8));
};


/**
 * @param {?proto.dolittle.runtime.events.Cause|undefined} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
*/
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setCause = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.clearCause = function() {
  return this.setCause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.hasCause = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional dolittle.runtime.artifacts.Artifact type = 9;
 * @return {?proto.dolittle.runtime.artifacts.Artifact}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getType = function() {
  return /** @type{?proto.dolittle.runtime.artifacts.Artifact} */ (
    jspb.Message.getWrapperField(this, Artifacts_Artifact_pb.Artifact, 9));
};


/**
 * @param {?proto.dolittle.runtime.artifacts.Artifact|undefined} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
*/
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.hasType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string content = 10;
 * @return {string}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool public = 11;
 * @return {boolean}
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dolittle.runtime.events.CommittedAggregateEvent} returns this
 */
proto.dolittle.runtime.events.CommittedAggregateEvent.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


goog.object.extend(exports, proto.dolittle.runtime.events);
