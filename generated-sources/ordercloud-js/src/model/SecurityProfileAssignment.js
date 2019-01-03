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
    root.OrderCloud.SecurityProfileAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SecurityProfileAssignment model module.
   * @module model/SecurityProfileAssignment
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>SecurityProfileAssignment</code>.
   * @alias module:model/SecurityProfileAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SecurityProfileAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityProfileAssignment} obj Optional instance to populate.
   * @return {module:model/SecurityProfileAssignment} The populated <code>SecurityProfileAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('SecurityProfileID')) {
        obj['SecurityProfileID'] = ApiClient.convertToType(data['SecurityProfileID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('SupplierID')) {
        obj['SupplierID'] = ApiClient.convertToType(data['SupplierID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SecurityProfileID
   */
  exports.prototype['SecurityProfileID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} SupplierID
   */
  exports.prototype['SupplierID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));


