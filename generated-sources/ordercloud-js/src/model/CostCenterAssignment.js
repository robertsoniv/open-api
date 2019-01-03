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
    root.OrderCloud.CostCenterAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CostCenterAssignment model module.
   * @module model/CostCenterAssignment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CostCenterAssignment</code>.
   * @alias module:model/CostCenterAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CostCenterAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CostCenterAssignment} obj Optional instance to populate.
   * @return {module:model/CostCenterAssignment} The populated <code>CostCenterAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CostCenterID')) {
        obj['CostCenterID'] = ApiClient.convertToType(data['CostCenterID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CostCenterID
   */
  exports.prototype['CostCenterID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));


