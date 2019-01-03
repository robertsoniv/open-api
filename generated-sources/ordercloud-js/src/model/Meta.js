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
    root.OrderCloud.Meta = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Meta model module.
   * @module model/Meta
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Meta</code>.
   * @alias module:model/Meta
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Meta} obj Optional instance to populate.
   * @return {module:model/Meta} The populated <code>Meta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Page')) {
        obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
      }
      if (data.hasOwnProperty('PageSize')) {
        obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
      }
      if (data.hasOwnProperty('TotalCount')) {
        obj['TotalCount'] = ApiClient.convertToType(data['TotalCount'], 'Number');
      }
      if (data.hasOwnProperty('TotalPages')) {
        obj['TotalPages'] = ApiClient.convertToType(data['TotalPages'], 'Number');
      }
      if (data.hasOwnProperty('ItemRange')) {
        obj['ItemRange'] = ApiClient.convertToType(data['ItemRange'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Page
   */
  exports.prototype['Page'] = undefined;
  /**
   * @member {Number} PageSize
   */
  exports.prototype['PageSize'] = undefined;
  /**
   * @member {Number} TotalCount
   */
  exports.prototype['TotalCount'] = undefined;
  /**
   * @member {Number} TotalPages
   */
  exports.prototype['TotalPages'] = undefined;
  /**
   * @member {Array.<Number>} ItemRange
   */
  exports.prototype['ItemRange'] = undefined;



  return exports;
}));


