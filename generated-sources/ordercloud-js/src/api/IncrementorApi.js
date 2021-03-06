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
    define(['ApiClient', 'model/Incrementor', 'model/ListIncrementor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Incrementor'), require('../model/ListIncrementor'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.IncrementorApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Incrementor, root.OrderCloud.ListIncrementor);
  }
}(this, function(ApiClient, Incrementor, ListIncrementor) {
  'use strict';

  /**
   * Incrementor service.
   * @module api/IncrementorApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IncrementorApi. 
   * @alias module:api/IncrementorApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createIncrementors operation.
     * @callback module:api/IncrementorApi~createIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Incrementor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Incrementor} incrementor 
     * @param {module:api/IncrementorApi~createIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Incrementor}
     */
    this.createIncrementors = function(incrementor, callback) {
      var postBody = incrementor;

      // verify the required parameter 'incrementor' is set
      if (incrementor === undefined || incrementor === null) {
        throw new Error("Missing the required parameter 'incrementor' when calling createIncrementors");
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
      var returnType = Incrementor;

      return this.apiClient.callApi(
        '/incrementors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIncrementors operation.
     * @callback module:api/IncrementorApi~deleteIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:api/IncrementorApi~deleteIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteIncrementors = function(incrementorID, callback) {
      var postBody = null;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID === undefined || incrementorID === null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling deleteIncrementors");
      }


      var pathParams = {
        'incrementorID': incrementorID
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
        '/incrementors/{incrementorID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIncrementors operation.
     * @callback module:api/IncrementorApi~getIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Incrementor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:api/IncrementorApi~getIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Incrementor}
     */
    this.getIncrementors = function(incrementorID, callback) {
      var postBody = null;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID === undefined || incrementorID === null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling getIncrementors");
      }


      var pathParams = {
        'incrementorID': incrementorID
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
      var returnType = Incrementor;

      return this.apiClient.callApi(
        '/incrementors/{incrementorID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listIncrementors operation.
     * @callback module:api/IncrementorApi~listIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListIncrementor} data The data returned by the service call.
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
     * @param {module:api/IncrementorApi~listIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListIncrementor}
     */
    this.listIncrementors = function(opts, callback) {
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
      var returnType = ListIncrementor;

      return this.apiClient.callApi(
        '/incrementors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchIncrementors operation.
     * @callback module:api/IncrementorApi~patchIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Incrementor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:model/Incrementor} incrementor 
     * @param {module:api/IncrementorApi~patchIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Incrementor}
     */
    this.patchIncrementors = function(incrementorID, incrementor, callback) {
      var postBody = incrementor;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID === undefined || incrementorID === null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling patchIncrementors");
      }

      // verify the required parameter 'incrementor' is set
      if (incrementor === undefined || incrementor === null) {
        throw new Error("Missing the required parameter 'incrementor' when calling patchIncrementors");
      }


      var pathParams = {
        'incrementorID': incrementorID
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
      var returnType = Incrementor;

      return this.apiClient.callApi(
        '/incrementors/{incrementorID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveIncrementors operation.
     * @callback module:api/IncrementorApi~saveIncrementorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Incrementor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:model/Incrementor} incrementor 
     * @param {module:api/IncrementorApi~saveIncrementorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Incrementor}
     */
    this.saveIncrementors = function(incrementorID, incrementor, callback) {
      var postBody = incrementor;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID === undefined || incrementorID === null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling saveIncrementors");
      }

      // verify the required parameter 'incrementor' is set
      if (incrementor === undefined || incrementor === null) {
        throw new Error("Missing the required parameter 'incrementor' when calling saveIncrementors");
      }


      var pathParams = {
        'incrementorID': incrementorID
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
      var returnType = Incrementor;

      return this.apiClient.callApi(
        '/incrementors/{incrementorID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
