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

goog.exportSymbol('proto.protobuffers.School', null, global);

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
proto.protobuffers.School = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuffers.School, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuffers.School.displayName = 'proto.protobuffers.School';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuffers.School.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuffers.School.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuffers.School} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuffers.School.toObject = function(includeInstance, msg) {
  var f, obj = {
    ensHost: jspb.Message.getFieldWithDefault(msg, 65, ""),
    address: jspb.Message.getFieldWithDefault(msg, 55, ""),
    admin0: jspb.Message.getFieldWithDefault(msg, 1, ""),
    admin1: jspb.Message.getFieldWithDefault(msg, 2, ""),
    admin2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    admin3: jspb.Message.getFieldWithDefault(msg, 4, ""),
    admin4: jspb.Message.getFieldWithDefault(msg, 5, ""),
    adminCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    adminId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    altitude: jspb.Message.getFieldWithDefault(msg, 8, ""),
    availabilityConnectivity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    connectivity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    datasource: jspb.Message.getFieldWithDefault(msg, 12, ""),
    description: jspb.Message.getFieldWithDefault(msg, 13, ""),
    educLevel: jspb.Message.getFieldWithDefault(msg, 14, ""),
    electricity: jspb.Message.getFieldWithDefault(msg, 15, ""),
    environment: jspb.Message.getFieldWithDefault(msg, 16, ""),
    frequency: jspb.Message.getFieldWithDefault(msg, 17, ""),
    latencyConnectivity: jspb.Message.getFieldWithDefault(msg, 18, ""),
    lat: jspb.Message.getFieldWithDefault(msg, 19, ""),
    lon: jspb.Message.getFieldWithDefault(msg, 20, ""),
    name: jspb.Message.getFieldWithDefault(msg, 21, ""),
    numClassrooms: jspb.Message.getFieldWithDefault(msg, 22, ""),
    numLatrines: jspb.Message.getFieldWithDefault(msg, 23, ""),
    numTeachers: jspb.Message.getFieldWithDefault(msg, 24, ""),
    numStudents: jspb.Message.getFieldWithDefault(msg, 25, ""),
    numSections: jspb.Message.getFieldWithDefault(msg, 26, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 27, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 28, ""),
    speedConnectivity: jspb.Message.getFieldWithDefault(msg, 29, ""),
    typeConnectivity: jspb.Message.getFieldWithDefault(msg, 30, ""),
    typeSchool: jspb.Message.getFieldWithDefault(msg, 31, ""),
    water: jspb.Message.getFieldWithDefault(msg, 32, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 33, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 34, ""),
    probeId: jspb.Message.getFieldWithDefault(msg, 35, ""),
    probeProvider: jspb.Message.getFieldWithDefault(msg, 36, ""),
    ispId: jspb.Message.getFieldWithDefault(msg, 37, ""),
    schoolId: jspb.Message.getFieldWithDefault(msg, 38, ""),
    id0: jspb.Message.getFieldWithDefault(msg, 39, ""),
    id1: jspb.Message.getFieldWithDefault(msg, 40, ""),
    id2: jspb.Message.getFieldWithDefault(msg, 41, ""),
    id3: jspb.Message.getFieldWithDefault(msg, 42, ""),
    id4: jspb.Message.getFieldWithDefault(msg, 43, ""),
    id5: jspb.Message.getFieldWithDefault(msg, 44, "")
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
 * @return {!proto.protobuffers.School}
 */
proto.protobuffers.School.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuffers.School;
  return proto.protobuffers.School.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuffers.School} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuffers.School}
 */
proto.protobuffers.School.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 65:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnsHost(value);
      break;
    case 55:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin0(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin1(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin3(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin4(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAltitude(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvailabilityConnectivity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectivity(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasource(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEducLevel(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setElectricity(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironment(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrequency(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatencyConnectivity(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLat(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setLon(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumClassrooms(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumLatrines(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumTeachers(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumStudents(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumSections(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpeedConnectivity(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeConnectivity(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeSchool(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setWater(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setProbeId(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setProbeProvider(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setIspId(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchoolId(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setId0(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setId1(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setId2(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readString());
      msg.setId3(value);
      break;
    case 43:
      var value = /** @type {string} */ (reader.readString());
      msg.setId4(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.setId5(value);
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
proto.protobuffers.School.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuffers.School.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuffers.School} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuffers.School.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnsHost();
  if (f.length > 0) {
    writer.writeString(
      65,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      55,
      f
    );
  }
  f = message.getAdmin0();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdmin1();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdmin2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdmin3();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdmin4();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAdminCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAdminId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAltitude();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAvailabilityConnectivity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getConnectivity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDatasource();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEducLevel();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getElectricity();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getEnvironment();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getFrequency();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getLatencyConnectivity();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getLat();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getLon();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getNumClassrooms();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getNumLatrines();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getNumTeachers();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getNumStudents();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getNumSections();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getSpeedConnectivity();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getTypeConnectivity();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getTypeSchool();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getWater();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getProbeId();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getProbeProvider();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getIspId();
  if (f.length > 0) {
    writer.writeString(
      37,
      f
    );
  }
  f = message.getSchoolId();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getId0();
  if (f.length > 0) {
    writer.writeString(
      39,
      f
    );
  }
  f = message.getId1();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getId2();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getId3();
  if (f.length > 0) {
    writer.writeString(
      42,
      f
    );
  }
  f = message.getId4();
  if (f.length > 0) {
    writer.writeString(
      43,
      f
    );
  }
  f = message.getId5();
  if (f.length > 0) {
    writer.writeString(
      44,
      f
    );
  }
};


/**
 * optional string ens_host = 65;
 * @return {string}
 */
proto.protobuffers.School.prototype.getEnsHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 65, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setEnsHost = function(value) {
  jspb.Message.setProto3StringField(this, 65, value);
};


/**
 * optional string address = 55;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 55, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 55, value);
};


/**
 * optional string admin0 = 1;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdmin0 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdmin0 = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string admin1 = 2;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdmin1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdmin1 = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string admin2 = 3;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdmin2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdmin2 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string admin3 = 4;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdmin3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdmin3 = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string admin4 = 5;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdmin4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdmin4 = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string admin_code = 6;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdminCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdminCode = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string admin_id = 7;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAdminId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAdminId = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string altitude = 8;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAltitude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAltitude = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string availability_connectivity = 9;
 * @return {string}
 */
proto.protobuffers.School.prototype.getAvailabilityConnectivity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setAvailabilityConnectivity = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string connectivity = 10;
 * @return {string}
 */
proto.protobuffers.School.prototype.getConnectivity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setConnectivity = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string country_code = 11;
 * @return {string}
 */
proto.protobuffers.School.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setCountryCode = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string datasource = 12;
 * @return {string}
 */
proto.protobuffers.School.prototype.getDatasource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setDatasource = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string description = 13;
 * @return {string}
 */
proto.protobuffers.School.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string educ_level = 14;
 * @return {string}
 */
proto.protobuffers.School.prototype.getEducLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setEducLevel = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string electricity = 15;
 * @return {string}
 */
proto.protobuffers.School.prototype.getElectricity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setElectricity = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string environment = 16;
 * @return {string}
 */
proto.protobuffers.School.prototype.getEnvironment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setEnvironment = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string frequency = 17;
 * @return {string}
 */
proto.protobuffers.School.prototype.getFrequency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setFrequency = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string latency_connectivity = 18;
 * @return {string}
 */
proto.protobuffers.School.prototype.getLatencyConnectivity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setLatencyConnectivity = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string lat = 19;
 * @return {string}
 */
proto.protobuffers.School.prototype.getLat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setLat = function(value) {
  jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string lon = 20;
 * @return {string}
 */
proto.protobuffers.School.prototype.getLon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setLon = function(value) {
  jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string name = 21;
 * @return {string}
 */
proto.protobuffers.School.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string num_classrooms = 22;
 * @return {string}
 */
proto.protobuffers.School.prototype.getNumClassrooms = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setNumClassrooms = function(value) {
  jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string num_latrines = 23;
 * @return {string}
 */
proto.protobuffers.School.prototype.getNumLatrines = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setNumLatrines = function(value) {
  jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string num_teachers = 24;
 * @return {string}
 */
proto.protobuffers.School.prototype.getNumTeachers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setNumTeachers = function(value) {
  jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string num_students = 25;
 * @return {string}
 */
proto.protobuffers.School.prototype.getNumStudents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setNumStudents = function(value) {
  jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string num_sections = 26;
 * @return {string}
 */
proto.protobuffers.School.prototype.getNumSections = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setNumSections = function(value) {
  jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string phone_number = 27;
 * @return {string}
 */
proto.protobuffers.School.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setPhoneNumber = function(value) {
  jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string postal_code = 28;
 * @return {string}
 */
proto.protobuffers.School.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string speed_connectivity = 29;
 * @return {string}
 */
proto.protobuffers.School.prototype.getSpeedConnectivity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setSpeedConnectivity = function(value) {
  jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string type_connectivity = 30;
 * @return {string}
 */
proto.protobuffers.School.prototype.getTypeConnectivity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setTypeConnectivity = function(value) {
  jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string type_school = 31;
 * @return {string}
 */
proto.protobuffers.School.prototype.getTypeSchool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setTypeSchool = function(value) {
  jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string water = 32;
 * @return {string}
 */
proto.protobuffers.School.prototype.getWater = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setWater = function(value) {
  jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string created_at = 33;
 * @return {string}
 */
proto.protobuffers.School.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setCreatedAt = function(value) {
  jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string updated_at = 34;
 * @return {string}
 */
proto.protobuffers.School.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setUpdatedAt = function(value) {
  jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string probe_id = 35;
 * @return {string}
 */
proto.protobuffers.School.prototype.getProbeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setProbeId = function(value) {
  jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string probe_provider = 36;
 * @return {string}
 */
proto.protobuffers.School.prototype.getProbeProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setProbeProvider = function(value) {
  jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string isp_id = 37;
 * @return {string}
 */
proto.protobuffers.School.prototype.getIspId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setIspId = function(value) {
  jspb.Message.setProto3StringField(this, 37, value);
};


/**
 * optional string school_id = 38;
 * @return {string}
 */
proto.protobuffers.School.prototype.getSchoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setSchoolId = function(value) {
  jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional string id_0 = 39;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId0 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId0 = function(value) {
  jspb.Message.setProto3StringField(this, 39, value);
};


/**
 * optional string id_1 = 40;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId1 = function(value) {
  jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional string id_2 = 41;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId2 = function(value) {
  jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional string id_3 = 42;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 42, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId3 = function(value) {
  jspb.Message.setProto3StringField(this, 42, value);
};


/**
 * optional string id_4 = 43;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 43, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId4 = function(value) {
  jspb.Message.setProto3StringField(this, 43, value);
};


/**
 * optional string id_5 = 44;
 * @return {string}
 */
proto.protobuffers.School.prototype.getId5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/** @param {string} value */
proto.protobuffers.School.prototype.setId5 = function(value) {
  jspb.Message.setProto3StringField(this, 44, value);
};


goog.object.extend(exports, proto.protobuffers);
