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
    define(['ApiClient', 'model/Address', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Order = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.User);
  }
}(this, function(ApiClient, Address, User) {
  'use strict';



  /**
   * The Order model module.
   * @module model/Order
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('FromUser')) {
        obj['FromUser'] = User.constructFromObject(data['FromUser']);
      }
      if (data.hasOwnProperty('FromCompanyID')) {
        obj['FromCompanyID'] = ApiClient.convertToType(data['FromCompanyID'], 'String');
      }
      if (data.hasOwnProperty('FromUserID')) {
        obj['FromUserID'] = ApiClient.convertToType(data['FromUserID'], 'String');
      }
      if (data.hasOwnProperty('BillingAddressID')) {
        obj['BillingAddressID'] = ApiClient.convertToType(data['BillingAddressID'], 'String');
      }
      if (data.hasOwnProperty('BillingAddress')) {
        obj['BillingAddress'] = Address.constructFromObject(data['BillingAddress']);
      }
      if (data.hasOwnProperty('ShippingAddressID')) {
        obj['ShippingAddressID'] = ApiClient.convertToType(data['ShippingAddressID'], 'String');
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], 'String');
      }
      if (data.hasOwnProperty('LineItemCount')) {
        obj['LineItemCount'] = ApiClient.convertToType(data['LineItemCount'], 'Number');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('DateSubmitted')) {
        obj['DateSubmitted'] = ApiClient.convertToType(data['DateSubmitted'], 'String');
      }
      if (data.hasOwnProperty('DateApproved')) {
        obj['DateApproved'] = ApiClient.convertToType(data['DateApproved'], 'String');
      }
      if (data.hasOwnProperty('DateDeclined')) {
        obj['DateDeclined'] = ApiClient.convertToType(data['DateDeclined'], 'String');
      }
      if (data.hasOwnProperty('DateCanceled')) {
        obj['DateCanceled'] = ApiClient.convertToType(data['DateCanceled'], 'String');
      }
      if (data.hasOwnProperty('DateCompleted')) {
        obj['DateCompleted'] = ApiClient.convertToType(data['DateCompleted'], 'String');
      }
      if (data.hasOwnProperty('Subtotal')) {
        obj['Subtotal'] = ApiClient.convertToType(data['Subtotal'], 'Number');
      }
      if (data.hasOwnProperty('ShippingCost')) {
        obj['ShippingCost'] = ApiClient.convertToType(data['ShippingCost'], 'Number');
      }
      if (data.hasOwnProperty('TaxCost')) {
        obj['TaxCost'] = ApiClient.convertToType(data['TaxCost'], 'Number');
      }
      if (data.hasOwnProperty('PromotionDiscount')) {
        obj['PromotionDiscount'] = ApiClient.convertToType(data['PromotionDiscount'], 'Number');
      }
      if (data.hasOwnProperty('Total')) {
        obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
      }
      if (data.hasOwnProperty('IsSubmitted')) {
        obj['IsSubmitted'] = ApiClient.convertToType(data['IsSubmitted'], 'Boolean');
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
   * @member {module:model/User} FromUser
   */
  exports.prototype['FromUser'] = undefined;
  /**
   * @member {String} FromCompanyID
   */
  exports.prototype['FromCompanyID'] = undefined;
  /**
   * @member {String} FromUserID
   */
  exports.prototype['FromUserID'] = undefined;
  /**
   * @member {String} BillingAddressID
   */
  exports.prototype['BillingAddressID'] = undefined;
  /**
   * @member {module:model/Address} BillingAddress
   */
  exports.prototype['BillingAddress'] = undefined;
  /**
   * @member {String} ShippingAddressID
   */
  exports.prototype['ShippingAddressID'] = undefined;
  /**
   * @member {String} Comments
   */
  exports.prototype['Comments'] = undefined;
  /**
   * @member {Number} LineItemCount
   */
  exports.prototype['LineItemCount'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} DateSubmitted
   */
  exports.prototype['DateSubmitted'] = undefined;
  /**
   * @member {String} DateApproved
   */
  exports.prototype['DateApproved'] = undefined;
  /**
   * @member {String} DateDeclined
   */
  exports.prototype['DateDeclined'] = undefined;
  /**
   * @member {String} DateCanceled
   */
  exports.prototype['DateCanceled'] = undefined;
  /**
   * @member {String} DateCompleted
   */
  exports.prototype['DateCompleted'] = undefined;
  /**
   * @member {Number} Subtotal
   */
  exports.prototype['Subtotal'] = undefined;
  /**
   * @member {Number} ShippingCost
   */
  exports.prototype['ShippingCost'] = undefined;
  /**
   * @member {Number} TaxCost
   */
  exports.prototype['TaxCost'] = undefined;
  /**
   * @member {Number} PromotionDiscount
   */
  exports.prototype['PromotionDiscount'] = undefined;
  /**
   * @member {Number} Total
   */
  exports.prototype['Total'] = undefined;
  /**
   * @member {Boolean} IsSubmitted
   */
  exports.prototype['IsSubmitted'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


