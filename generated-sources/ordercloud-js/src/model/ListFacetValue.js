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
    root.OrderCloud.ListFacetValue = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ListFacetValue model module.
   * @module model/ListFacetValue
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>ListFacetValue</code>.
   * @alias module:model/ListFacetValue
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ListFacetValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListFacetValue} obj Optional instance to populate.
   * @return {module:model/ListFacetValue} The populated <code>ListFacetValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {Number} Count
   */
  exports.prototype['Count'] = undefined;



  return exports;
}));

