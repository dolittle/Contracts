// source: Events/UncommittedEvent.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.dolittle.runtime.events.UncommittedEvent', null, global);
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
proto.dolittle.runtime.events.UncommittedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.UncommittedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.UncommittedEvent.displayName = 'proto.dolittle.runtime.events.UncommittedEvent';
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
proto.dolittle.runtime.events.UncommittedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.UncommittedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.UncommittedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.UncommittedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    artifact: (f = msg.getArtifact()) && Artifacts_Artifact_pb.Artifact.toObject(includeInstance, f),
    occurred: (f = msg.getOccurred()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.dolittle.runtime.events.UncommittedEvent}
 */
proto.dolittle.runtime.events.UncommittedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.UncommittedEvent;
  return proto.dolittle.runtime.events.UncommittedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.UncommittedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.UncommittedEvent}
 */
proto.dolittle.runtime.events.UncommittedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Artifacts_Artifact_pb.Artifact;
      reader.readMessage(value,Artifacts_Artifact_pb.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOccurred(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
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
proto.dolittle.runtime.events.UncommittedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.UncommittedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.UncommittedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.UncommittedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Artifacts_Artifact_pb.Artifact.serializeBinaryToWriter
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
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional dolittle.runtime.artifacts.Artifact artifact = 1;
 * @return {?proto.dolittle.runtime.artifacts.Artifact}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.getArtifact = function() {
  return /** @type{?proto.dolittle.runtime.artifacts.Artifact} */ (
    jspb.Message.getWrapperField(this, Artifacts_Artifact_pb.Artifact, 1));
};


/**
 * @param {?proto.dolittle.runtime.artifacts.Artifact|undefined} value
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
*/
proto.dolittle.runtime.events.UncommittedEvent.prototype.setArtifact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.clearArtifact = function() {
  return this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp occurred = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.getOccurred = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
*/
proto.dolittle.runtime.events.UncommittedEvent.prototype.setOccurred = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.clearOccurred = function() {
  return this.setOccurred(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.hasOccurred = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool public = 4;
 * @return {boolean}
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dolittle.runtime.events.UncommittedEvent} returns this
 */
proto.dolittle.runtime.events.UncommittedEvent.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.dolittle.runtime.events);
