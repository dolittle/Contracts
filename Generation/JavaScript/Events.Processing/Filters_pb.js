// source: Events.Processing/Filters.proto
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

var Events_CommittedEvent_pb = require('../Events/CommittedEvent_pb.js');
goog.object.extend(proto, Events_CommittedEvent_pb);
goog.exportSymbol('proto.dolittle.runtime.events.processing.FilterArguments', null, global);
goog.exportSymbol('proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse', null, global);
goog.exportSymbol('proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest', null, global);
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
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.displayName = 'proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest';
}
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
proto.dolittle.runtime.events.processing.FilterArguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.processing.FilterArguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.processing.FilterArguments.displayName = 'proto.dolittle.runtime.events.processing.FilterArguments';
}
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
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.displayName = 'proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse';
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
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    callnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    event: (f = msg.getEvent()) && Events_CommittedEvent_pb.CommittedEvent.toObject(includeInstance, f),
    partition: msg.getPartition_asB64(),
    executioncontext: msg.getExecutioncontext_asB64()
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
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest;
  return proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCallnumber(value);
      break;
    case 2:
      var value = new Events_CommittedEvent_pb.CommittedEvent;
      reader.readMessage(value,Events_CommittedEvent_pb.CommittedEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExecutioncontext(value);
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
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallnumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Events_CommittedEvent_pb.CommittedEvent.serializeBinaryToWriter
    );
  }
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getExecutioncontext_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional uint64 callNumber = 1;
 * @return {number}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getCallnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} returns this
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.setCallnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional dolittle.runtime.events.CommittedEvent event = 2;
 * @return {?proto.dolittle.runtime.events.CommittedEvent}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getEvent = function() {
  return /** @type{?proto.dolittle.runtime.events.CommittedEvent} */ (
    jspb.Message.getWrapperField(this, Events_CommittedEvent_pb.CommittedEvent, 2));
};


/**
 * @param {?proto.dolittle.runtime.events.CommittedEvent|undefined} value
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} returns this
*/
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} returns this
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes partition = 3;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes partition = 3;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} returns this
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes executionContext = 4;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getExecutioncontext = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes executionContext = 4;
 * This is a type-conversion wrapper around `getExecutioncontext()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getExecutioncontext_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExecutioncontext()));
};


/**
 * optional bytes executionContext = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecutioncontext()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.getExecutioncontext_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExecutioncontext()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest} returns this
 */
proto.dolittle.runtime.events.processing.FilterRuntimeToClientRequest.prototype.setExecutioncontext = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





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
proto.dolittle.runtime.events.processing.FilterArguments.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.processing.FilterArguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.processing.FilterArguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterArguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: msg.getFilter_asB64(),
    stream: msg.getStream_asB64()
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
 * @return {!proto.dolittle.runtime.events.processing.FilterArguments}
 */
proto.dolittle.runtime.events.processing.FilterArguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.processing.FilterArguments;
  return proto.dolittle.runtime.events.processing.FilterArguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.processing.FilterArguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.processing.FilterArguments}
 */
proto.dolittle.runtime.events.processing.FilterArguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStream(value);
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
proto.dolittle.runtime.events.processing.FilterArguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.processing.FilterArguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.processing.FilterArguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterArguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStream_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes filter = 1;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getFilter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes filter = 1;
 * This is a type-conversion wrapper around `getFilter()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getFilter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilter()));
};


/**
 * optional bytes filter = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilter()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getFilter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterArguments} returns this
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.setFilter = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes stream = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getStream = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes stream = 2;
 * This is a type-conversion wrapper around `getStream()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getStream_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStream()));
};


/**
 * optional bytes stream = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStream()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.getStream_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStream()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterArguments} returns this
 */
proto.dolittle.runtime.events.processing.FilterArguments.prototype.setStream = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





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
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    callnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isincluded: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    partition: msg.getPartition_asB64(),
    succeeded: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    retry: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    retrytimeout: jspb.Message.getFieldWithDefault(msg, 6, 0),
    failurereason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    executioncontext: msg.getExecutioncontext_asB64()
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
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse;
  return proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCallnumber(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsincluded(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceeded(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRetry(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetrytimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExecutioncontext(value);
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
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallnumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIsincluded();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSucceeded();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRetry();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRetrytimeout();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getFailurereason();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExecutioncontext_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional uint64 callNumber = 1;
 * @return {number}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getCallnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setCallnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool isIncluded = 2;
 * @return {boolean}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getIsincluded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setIsincluded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bytes partition = 3;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes partition = 3;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool succeeded = 4;
 * @return {boolean}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getSucceeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setSucceeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool retry = 5;
 * @return {boolean}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getRetry = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setRetry = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint32 retryTimeout = 6;
 * @return {number}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getRetrytimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setRetrytimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string failureReason = 7;
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setFailurereason = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes executionContext = 8;
 * @return {!(string|Uint8Array)}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getExecutioncontext = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes executionContext = 8;
 * This is a type-conversion wrapper around `getExecutioncontext()`
 * @return {string}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getExecutioncontext_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExecutioncontext()));
};


/**
 * optional bytes executionContext = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecutioncontext()`
 * @return {!Uint8Array}
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.getExecutioncontext_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExecutioncontext()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse} returns this
 */
proto.dolittle.runtime.events.processing.FilterClientToRuntimeResponse.prototype.setExecutioncontext = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


goog.object.extend(exports, proto.dolittle.runtime.events.processing);
