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
    define(['ApiClient', 'model/Address', 'model/ListAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/ListAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminAddressApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.ListAddress);
  }
}(this, function(ApiClient, Address, ListAddress) {
  'use strict';

  /**
   * AdminAddress service.
   * @module api/AdminAddressApi
   * @version 1.0.89
   */

  /**
   * Constructs a new AdminAddressApi. 
   * @alias module:api/AdminAddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1addresses operation.
     * @callback module:api/AdminAddressApi~createV1addressesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Address} address 
     * @param {module:api/AdminAddressApi~createV1addressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.createV1addresses = function(address, callback) {
      var postBody = address;

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createV1addresses");
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1addressesaddressID operation.
     * @callback module:api/AdminAddressApi~deleteV1addressesaddressIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} addressID ID of the address.
     * @param {module:api/AdminAddressApi~deleteV1addressesaddressIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1addressesaddressID = function(addressID, callback) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID === undefined || addressID === null) {
        throw new Error("Missing the required parameter 'addressID' when calling deleteV1addressesaddressID");
      }


      var pathParams = {
        'addressID': addressID
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
        '/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1addressesaddressID operation.
     * @callback module:api/AdminAddressApi~getV1addressesaddressIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} addressID ID of the address.
     * @param {module:api/AdminAddressApi~getV1addressesaddressIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.getV1addressesaddressID = function(addressID, callback) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID === undefined || addressID === null) {
        throw new Error("Missing the required parameter 'addressID' when calling getV1addressesaddressID");
      }


      var pathParams = {
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1addresses operation.
     * @callback module:api/AdminAddressApi~listV1addressesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAddress} data The data returned by the service call.
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
     * @param {module:api/AdminAddressApi~listV1addressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAddress}
     */
    this.listV1addresses = function(opts, callback) {
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
      var returnType = ListAddress;

      return this.apiClient.callApi(
        '/addresses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1addressesaddressID operation.
     * @callback module:api/AdminAddressApi~patchV1addressesaddressIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @param {module:api/AdminAddressApi~patchV1addressesaddressIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.patchV1addressesaddressID = function(addressID, address, callback) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID === undefined || addressID === null) {
        throw new Error("Missing the required parameter 'addressID' when calling patchV1addressesaddressID");
      }

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling patchV1addressesaddressID");
      }


      var pathParams = {
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1addressesaddressID operation.
     * @callback module:api/AdminAddressApi~saveV1addressesaddressIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @param {module:api/AdminAddressApi~saveV1addressesaddressIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.saveV1addressesaddressID = function(addressID, address, callback) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID === undefined || addressID === null) {
        throw new Error("Missing the required parameter 'addressID' when calling saveV1addressesaddressID");
      }

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling saveV1addressesaddressID");
      }


      var pathParams = {
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
