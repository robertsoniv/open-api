/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PartialLineItemProduct = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PartialLineItemProduct model module.
   * @module model/PartialLineItemProduct
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PartialLineItemProduct</code>.
   * @alias module:model/PartialLineItemProduct
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PartialLineItemProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialLineItemProduct} obj Optional instance to populate.
   * @return {module:model/PartialLineItemProduct} The populated <code>PartialLineItemProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('QuantityMultiplier')) {
        obj['QuantityMultiplier'] = ApiClient.convertToType(data['QuantityMultiplier'], 'Number');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = ApiClient.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = ApiClient.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = ApiClient.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = ApiClient.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} QuantityMultiplier
   */
  exports.prototype['QuantityMultiplier'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


