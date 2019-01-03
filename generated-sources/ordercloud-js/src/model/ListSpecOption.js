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
    define(['ApiClient', 'model/Meta', 'model/SpecOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SpecOption'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpecOption = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SpecOption);
  }
}(this, function(ApiClient, Meta, SpecOption) {
  'use strict';



  /**
   * The ListSpecOption model module.
   * @module model/ListSpecOption
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>ListSpecOption</code>.
   * @alias module:model/ListSpecOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ListSpecOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpecOption} obj Optional instance to populate.
   * @return {module:model/ListSpecOption} The populated <code>ListSpecOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SpecOption]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpecOption>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));

