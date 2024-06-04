// source: cosmos/feegrant/v1beta1/genesis.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_feegrant_v1beta1_feegrant_pb = require('../../../cosmos/feegrant/v1beta1/feegrant_pb.js');
goog.object.extend(proto, cosmos_feegrant_v1beta1_feegrant_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.GenesisState', null, global);
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
proto.cosmos.feegrant.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.feegrant.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.GenesisState.displayName = 'proto.cosmos.feegrant.v1beta1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.feegrant.v1beta1.GenesisState.repeatedFields_ = [1];



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
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowancesList: jspb.Message.toObjectList(msg.getAllowancesList(),
    cosmos_feegrant_v1beta1_feegrant_pb.Grant.toObject, includeInstance)
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
 * @return {!proto.cosmos.feegrant.v1beta1.GenesisState}
 */
proto.cosmos.feegrant.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.GenesisState;
  return proto.cosmos.feegrant.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.GenesisState}
 */
proto.cosmos.feegrant.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_feegrant_v1beta1_feegrant_pb.Grant;
      reader.readMessage(value,cosmos_feegrant_v1beta1_feegrant_pb.Grant.deserializeBinaryFromReader);
      msg.addAllowances(value);
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
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_feegrant_v1beta1_feegrant_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Grant allowances = 1;
 * @return {!Array<!proto.cosmos.feegrant.v1beta1.Grant>}
 */
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.getAllowancesList = function() {
  return /** @type{!Array<!proto.cosmos.feegrant.v1beta1.Grant>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_feegrant_v1beta1_feegrant_pb.Grant, 1));
};


/**
 * @param {!Array<!proto.cosmos.feegrant.v1beta1.Grant>} value
 * @return {!proto.cosmos.feegrant.v1beta1.GenesisState} returns this
*/
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.setAllowancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.Grant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.feegrant.v1beta1.Grant}
 */
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.addAllowances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.feegrant.v1beta1.Grant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.GenesisState} returns this
 */
proto.cosmos.feegrant.v1beta1.GenesisState.prototype.clearAllowancesList = function() {
  return this.setAllowancesList([]);
};


goog.object.extend(exports, proto.cosmos.feegrant.v1beta1);
