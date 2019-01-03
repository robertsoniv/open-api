/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.89
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
    root.OrderCloud.PartialSpecOption = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PartialSpecOption model module.
   * @module model/PartialSpecOption
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>PartialSpecOption</code>.
   * @alias module:model/PartialSpecOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PartialSpecOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialSpecOption} obj Optional instance to populate.
   * @return {module:model/PartialSpecOption} The populated <code>PartialSpecOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('IsOpenText')) {
        obj['IsOpenText'] = ApiClient.convertToType(data['IsOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('PriceMarkupType')) {
        obj['PriceMarkupType'] = ApiClient.convertToType(data['PriceMarkupType'], 'String');
      }
      if (data.hasOwnProperty('PriceMarkup')) {
        obj['PriceMarkup'] = ApiClient.convertToType(data['PriceMarkup'], 'Number');
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
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {Boolean} IsOpenText
   */
  exports.prototype['IsOpenText'] = undefined;
  /**
   * @member {String} PriceMarkupType
   */
  exports.prototype['PriceMarkupType'] = undefined;
  /**
   * @member {Number} PriceMarkup
   */
  exports.prototype['PriceMarkup'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


