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
    define(['ApiClient', 'model/Buyer', 'model/ListBuyer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Buyer'), require('../model/ListBuyer'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Buyer, root.OrderCloud.ListBuyer);
  }
}(this, function(ApiClient, Buyer, ListBuyer) {
  'use strict';

  /**
   * Buyer service.
   * @module api/BuyerApi
   * @version 1.0.89
   */

  /**
   * Constructs a new BuyerApi. 
   * @alias module:api/BuyerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1buyers operation.
     * @callback module:api/BuyerApi~createV1buyersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Buyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Buyer} buyer 
     * @param {module:api/BuyerApi~createV1buyersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Buyer}
     */
    this.createV1buyers = function(buyer, callback) {
      var postBody = buyer;

      // verify the required parameter 'buyer' is set
      if (buyer === undefined || buyer === null) {
        throw new Error("Missing the required parameter 'buyer' when calling createV1buyers");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1buyersbuyerID operation.
     * @callback module:api/BuyerApi~deleteV1buyersbuyerIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/BuyerApi~deleteV1buyersbuyerIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1buyersbuyerID = function(buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteV1buyersbuyerID");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1buyersbuyerID operation.
     * @callback module:api/BuyerApi~getV1buyersbuyerIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Buyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/BuyerApi~getV1buyersbuyerIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Buyer}
     */
    this.getV1buyersbuyerID = function(buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling getV1buyersbuyerID");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1buyers operation.
     * @callback module:api/BuyerApi~listV1buyersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListBuyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/BuyerApi~listV1buyersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListBuyer}
     */
    this.listV1buyers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ListBuyer;

      return this.apiClient.callApi(
        '/buyers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1buyersbuyerID operation.
     * @callback module:api/BuyerApi~patchV1buyersbuyerIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Buyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} buyer 
     * @param {module:api/BuyerApi~patchV1buyersbuyerIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Buyer}
     */
    this.patchV1buyersbuyerID = function(buyerID, buyer, callback) {
      var postBody = buyer;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patchV1buyersbuyerID");
      }

      // verify the required parameter 'buyer' is set
      if (buyer === undefined || buyer === null) {
        throw new Error("Missing the required parameter 'buyer' when calling patchV1buyersbuyerID");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1buyersbuyerID operation.
     * @callback module:api/BuyerApi~saveV1buyersbuyerIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Buyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} buyer 
     * @param {module:api/BuyerApi~saveV1buyersbuyerIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Buyer}
     */
    this.saveV1buyersbuyerID = function(buyerID, buyer, callback) {
      var postBody = buyer;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling saveV1buyersbuyerID");
      }

      // verify the required parameter 'buyer' is set
      if (buyer === undefined || buyer === null) {
        throw new Error("Missing the required parameter 'buyer' when calling saveV1buyersbuyerID");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
