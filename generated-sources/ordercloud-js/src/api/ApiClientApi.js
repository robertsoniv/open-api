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
    define(['ApiClient', 'model/ApiClient', 'model/ApiClientAssignment', 'model/ListApiClient', 'model/ListApiClientAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiClient'), require('../model/ApiClientAssignment'), require('../model/ListApiClient'), require('../model/ListApiClientAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApiClientApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ApiClient, root.OrderCloud.ApiClientAssignment, root.OrderCloud.ListApiClient, root.OrderCloud.ListApiClientAssignment);
  }
}(this, function(ApiClient, ApiClient, ApiClientAssignment, ListApiClient, ListApiClientAssignment) {
  'use strict';

  /**
   * ApiClient service.
   * @module api/ApiClientApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ApiClientApi. 
   * @alias module:api/ApiClientApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createApiClients operation.
     * @callback module:api/ApiClientApi~createApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ApiClient} apiClient 
     * @param {module:api/ApiClientApi~createApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiClient}
     */
    this.createApiClients = function(apiClient, callback) {
      var postBody = apiClient;

      // verify the required parameter 'apiClient' is set
      if (apiClient === undefined || apiClient === null) {
        throw new Error("Missing the required parameter 'apiClient' when calling createApiClients");
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
      var returnType = ApiClient;

      return this.apiClient.callApi(
        '/apiclients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApiClients operation.
     * @callback module:api/ApiClientApi~deleteApiClientsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {module:api/ApiClientApi~deleteApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApiClients = function(apiClientID, callback) {
      var postBody = null;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling deleteApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID
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
        '/apiclients/{apiClientID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBuyerAssignmentApiClients operation.
     * @callback module:api/ApiClientApi~deleteBuyerAssignmentApiClientsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/ApiClientApi~deleteBuyerAssignmentApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBuyerAssignmentApiClients = function(apiClientID, buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling deleteBuyerAssignmentApiClients");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteBuyerAssignmentApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID,
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
        '/buyers/{buyerID}/ApiClients/Assignments/{apiClientID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSupplierAssignmentApiClients operation.
     * @callback module:api/ApiClientApi~deleteSupplierAssignmentApiClientsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {String} supplierID ID of the supplier.
     * @param {module:api/ApiClientApi~deleteSupplierAssignmentApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSupplierAssignmentApiClients = function(apiClientID, supplierID, callback) {
      var postBody = null;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling deleteSupplierAssignmentApiClients");
      }

      // verify the required parameter 'supplierID' is set
      if (supplierID === undefined || supplierID === null) {
        throw new Error("Missing the required parameter 'supplierID' when calling deleteSupplierAssignmentApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID,
        'supplierID': supplierID
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
        '/suppliers/{supplierID}/ApiClients/Assignments/{apiClientID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiClients operation.
     * @callback module:api/ApiClientApi~getApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {module:api/ApiClientApi~getApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiClient}
     */
    this.getApiClients = function(apiClientID, callback) {
      var postBody = null;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling getApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID
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
      var returnType = ApiClient;

      return this.apiClient.callApi(
        '/apiclients/{apiClientID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listApiClients operation.
     * @callback module:api/ApiClientApi~listApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListApiClient} data The data returned by the service call.
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
     * @param {module:api/ApiClientApi~listApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListApiClient}
     */
    this.listApiClients = function(opts, callback) {
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
      var returnType = ListApiClient;

      return this.apiClient.callApi(
        '/apiclients', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignmentsApiClients operation.
     * @callback module:api/ApiClientApi~listAssignmentsApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListApiClientAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiClientID ID of the api client.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.supplierID ID of the supplier.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/ApiClientApi~listAssignmentsApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListApiClientAssignment}
     */
    this.listAssignmentsApiClients = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apiClientID': opts['apiClientID'],
        'buyerID': opts['buyerID'],
        'supplierID': opts['supplierID'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
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
      var returnType = ListApiClientAssignment;

      return this.apiClient.callApi(
        '/apiclients/assignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchApiClients operation.
     * @callback module:api/ApiClientApi~patchApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {module:model/ApiClient} apiClient 
     * @param {module:api/ApiClientApi~patchApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiClient}
     */
    this.patchApiClients = function(apiClientID, apiClient, callback) {
      var postBody = apiClient;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling patchApiClients");
      }

      // verify the required parameter 'apiClient' is set
      if (apiClient === undefined || apiClient === null) {
        throw new Error("Missing the required parameter 'apiClient' when calling patchApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID
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
      var returnType = ApiClient;

      return this.apiClient.callApi(
        '/apiclients/{apiClientID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveApiClients operation.
     * @callback module:api/ApiClientApi~saveApiClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiClientID ID of the api client.
     * @param {module:model/ApiClient} apiClient 
     * @param {module:api/ApiClientApi~saveApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiClient}
     */
    this.saveApiClients = function(apiClientID, apiClient, callback) {
      var postBody = apiClient;

      // verify the required parameter 'apiClientID' is set
      if (apiClientID === undefined || apiClientID === null) {
        throw new Error("Missing the required parameter 'apiClientID' when calling saveApiClients");
      }

      // verify the required parameter 'apiClient' is set
      if (apiClient === undefined || apiClient === null) {
        throw new Error("Missing the required parameter 'apiClient' when calling saveApiClients");
      }


      var pathParams = {
        'apiClientID': apiClientID
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
      var returnType = ApiClient;

      return this.apiClient.callApi(
        '/apiclients/{apiClientID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignmentApiClients operation.
     * @callback module:api/ApiClientApi~saveAssignmentApiClientsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ApiClientAssignment} apiClientAssignment 
     * @param {module:api/ApiClientApi~saveAssignmentApiClientsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignmentApiClients = function(apiClientAssignment, callback) {
      var postBody = apiClientAssignment;

      // verify the required parameter 'apiClientAssignment' is set
      if (apiClientAssignment === undefined || apiClientAssignment === null) {
        throw new Error("Missing the required parameter 'apiClientAssignment' when calling saveAssignmentApiClients");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/apiclients/assignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
