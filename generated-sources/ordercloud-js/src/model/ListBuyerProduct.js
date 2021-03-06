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
    define(['ApiClient', 'model/BuyerProduct', 'model/MetaWithFacets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerProduct'), require('./MetaWithFacets'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyerProduct = factory(root.OrderCloud.ApiClient, root.OrderCloud.BuyerProduct, root.OrderCloud.MetaWithFacets);
  }
}(this, function(ApiClient, BuyerProduct, MetaWithFacets) {
  'use strict';



  /**
   * The ListBuyerProduct model module.
   * @module model/ListBuyerProduct
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ListBuyerProduct</code>.
   * @alias module:model/ListBuyerProduct
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ListBuyerProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerProduct} obj Optional instance to populate.
   * @return {module:model/ListBuyerProduct} The populated <code>ListBuyerProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerProduct]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = MetaWithFacets.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerProduct>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/MetaWithFacets} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));


