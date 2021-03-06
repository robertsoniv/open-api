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
    root.OrderCloud.ApiClient = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ApiClient model module.
   * @module model/ApiClient
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ApiClient</code>.
   * @alias module:model/ApiClient
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApiClient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiClient} obj Optional instance to populate.
   * @return {module:model/ApiClient} The populated <code>ApiClient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ClientSecret')) {
        obj['ClientSecret'] = ApiClient.convertToType(data['ClientSecret'], 'String');
      }
      if (data.hasOwnProperty('AccessTokenDuration')) {
        obj['AccessTokenDuration'] = ApiClient.convertToType(data['AccessTokenDuration'], 'Number');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('AppName')) {
        obj['AppName'] = ApiClient.convertToType(data['AppName'], 'String');
      }
      if (data.hasOwnProperty('RefreshTokenDuration')) {
        obj['RefreshTokenDuration'] = ApiClient.convertToType(data['RefreshTokenDuration'], 'Number');
      }
      if (data.hasOwnProperty('DefaultContextUserName')) {
        obj['DefaultContextUserName'] = ApiClient.convertToType(data['DefaultContextUserName'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('AllowAnyBuyer')) {
        obj['AllowAnyBuyer'] = ApiClient.convertToType(data['AllowAnyBuyer'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowAnySupplier')) {
        obj['AllowAnySupplier'] = ApiClient.convertToType(data['AllowAnySupplier'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowSeller')) {
        obj['AllowSeller'] = ApiClient.convertToType(data['AllowSeller'], 'Boolean');
      }
      if (data.hasOwnProperty('IsAnonBuyer')) {
        obj['IsAnonBuyer'] = ApiClient.convertToType(data['IsAnonBuyer'], 'Boolean');
      }
      if (data.hasOwnProperty('AssignedBuyerCount')) {
        obj['AssignedBuyerCount'] = ApiClient.convertToType(data['AssignedBuyerCount'], 'Number');
      }
      if (data.hasOwnProperty('AssignedSupplierCount')) {
        obj['AssignedSupplierCount'] = ApiClient.convertToType(data['AssignedSupplierCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} ClientSecret
   */
  exports.prototype['ClientSecret'] = undefined;
  /**
   * @member {Number} AccessTokenDuration
   */
  exports.prototype['AccessTokenDuration'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {String} AppName
   */
  exports.prototype['AppName'] = undefined;
  /**
   * @member {Number} RefreshTokenDuration
   */
  exports.prototype['RefreshTokenDuration'] = undefined;
  /**
   * @member {String} DefaultContextUserName
   */
  exports.prototype['DefaultContextUserName'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Boolean} AllowAnyBuyer
   */
  exports.prototype['AllowAnyBuyer'] = undefined;
  /**
   * @member {Boolean} AllowAnySupplier
   */
  exports.prototype['AllowAnySupplier'] = undefined;
  /**
   * @member {Boolean} AllowSeller
   */
  exports.prototype['AllowSeller'] = undefined;
  /**
   * @member {Boolean} IsAnonBuyer
   */
  exports.prototype['IsAnonBuyer'] = undefined;
  /**
   * @member {Number} AssignedBuyerCount
   */
  exports.prototype['AssignedBuyerCount'] = undefined;
  /**
   * @member {Number} AssignedSupplierCount
   */
  exports.prototype['AssignedSupplierCount'] = undefined;



  return exports;
}));


