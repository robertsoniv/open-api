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
    define(['ApiClient', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageCCListenerAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.MessageSenderAssignment);
  }
}(this, function(ApiClient, MessageSenderAssignment) {
  'use strict';



  /**
   * The MessageCCListenerAssignment model module.
   * @module model/MessageCCListenerAssignment
   * @version 1.0.89
   */

  /**
   * Constructs a new <code>MessageCCListenerAssignment</code>.
   * @alias module:model/MessageCCListenerAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MessageCCListenerAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageCCListenerAssignment} obj Optional instance to populate.
   * @return {module:model/MessageCCListenerAssignment} The populated <code>MessageCCListenerAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MessageSenderAssignment')) {
        obj['MessageSenderAssignment'] = MessageSenderAssignment.constructFromObject(data['MessageSenderAssignment']);
      }
      if (data.hasOwnProperty('MessageConfigName')) {
        obj['MessageConfigName'] = ApiClient.convertToType(data['MessageConfigName'], 'String');
      }
      if (data.hasOwnProperty('MessageConfigDescription')) {
        obj['MessageConfigDescription'] = ApiClient.convertToType(data['MessageConfigDescription'], 'String');
      }
      if (data.hasOwnProperty('MessageType')) {
        obj['MessageType'] = ApiClient.convertToType(data['MessageType'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('SupplierID')) {
        obj['SupplierID'] = ApiClient.convertToType(data['SupplierID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MessageSenderAssignment} MessageSenderAssignment
   */
  exports.prototype['MessageSenderAssignment'] = undefined;
  /**
   * @member {String} MessageConfigName
   */
  exports.prototype['MessageConfigName'] = undefined;
  /**
   * @member {String} MessageConfigDescription
   */
  exports.prototype['MessageConfigDescription'] = undefined;
  /**
   * @member {String} MessageType
   */
  exports.prototype['MessageType'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} SupplierID
   */
  exports.prototype['SupplierID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;



  return exports;
}));

