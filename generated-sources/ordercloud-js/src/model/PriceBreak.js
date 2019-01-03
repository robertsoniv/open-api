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
    root.OrderCloud.PriceBreak = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PriceBreak model module.
   * @module model/PriceBreak
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>PriceBreak</code>.
   * @alias module:model/PriceBreak
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PriceBreak</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceBreak} obj Optional instance to populate.
   * @return {module:model/PriceBreak} The populated <code>PriceBreak</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Quantity')) {
        obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Quantity
   */
  exports.prototype['Quantity'] = undefined;
  /**
   * @member {Number} Price
   */
  exports.prototype['Price'] = undefined;



  return exports;
}));


