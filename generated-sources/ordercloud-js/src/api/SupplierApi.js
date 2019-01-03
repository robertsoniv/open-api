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
    define(['ApiClient', 'model/ListSupplier', 'model/Supplier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSupplier'), require('../model/Supplier'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SupplierApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSupplier, root.OrderCloud.Supplier);
  }
}(this, function(ApiClient, ListSupplier, Supplier) {
  'use strict';

  /**
   * Supplier service.
   * @module api/SupplierApi
   * @version 1.0.89
   */

  /**
   * Constructs a new SupplierApi. 
   * @alias module:api/SupplierApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1suppliers operation.
     * @callback module:api/SupplierApi~createV1suppliersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Supplier} supplier 
     * @param {module:api/SupplierApi~createV1suppliersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supplier}
     */
    this.createV1suppliers = function(supplier, callback) {
      var postBody = supplier;

      // verify the required parameter 'supplier' is set
      if (supplier === undefined || supplier === null) {
        throw new Error("Missing the required parameter 'supplier' when calling createV1suppliers");
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
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1supplierssupplierID operation.
     * @callback module:api/SupplierApi~deleteV1supplierssupplierIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:api/SupplierApi~deleteV1supplierssupplierIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1supplierssupplierID = function(supplierID, callback) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID === undefined || supplierID === null) {
        throw new Error("Missing the required parameter 'supplierID' when calling deleteV1supplierssupplierID");
      }


      var pathParams = {
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
        '/suppliers/{supplierID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1supplierssupplierID operation.
     * @callback module:api/SupplierApi~getV1supplierssupplierIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:api/SupplierApi~getV1supplierssupplierIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supplier}
     */
    this.getV1supplierssupplierID = function(supplierID, callback) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID === undefined || supplierID === null) {
        throw new Error("Missing the required parameter 'supplierID' when calling getV1supplierssupplierID");
      }


      var pathParams = {
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
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1suppliers operation.
     * @callback module:api/SupplierApi~listV1suppliersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListSupplier} data The data returned by the service call.
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
     * @param {module:api/SupplierApi~listV1suppliersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListSupplier}
     */
    this.listV1suppliers = function(opts, callback) {
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
      var returnType = ListSupplier;

      return this.apiClient.callApi(
        '/suppliers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1supplierssupplierID operation.
     * @callback module:api/SupplierApi~patchV1supplierssupplierIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/Supplier} supplier 
     * @param {module:api/SupplierApi~patchV1supplierssupplierIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supplier}
     */
    this.patchV1supplierssupplierID = function(supplierID, supplier, callback) {
      var postBody = supplier;

      // verify the required parameter 'supplierID' is set
      if (supplierID === undefined || supplierID === null) {
        throw new Error("Missing the required parameter 'supplierID' when calling patchV1supplierssupplierID");
      }

      // verify the required parameter 'supplier' is set
      if (supplier === undefined || supplier === null) {
        throw new Error("Missing the required parameter 'supplier' when calling patchV1supplierssupplierID");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1supplierssupplierID operation.
     * @callback module:api/SupplierApi~saveV1supplierssupplierIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/Supplier} supplier 
     * @param {module:api/SupplierApi~saveV1supplierssupplierIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supplier}
     */
    this.saveV1supplierssupplierID = function(supplierID, supplier, callback) {
      var postBody = supplier;

      // verify the required parameter 'supplierID' is set
      if (supplierID === undefined || supplierID === null) {
        throw new Error("Missing the required parameter 'supplierID' when calling saveV1supplierssupplierID");
      }

      // verify the required parameter 'supplier' is set
      if (supplier === undefined || supplier === null) {
        throw new Error("Missing the required parameter 'supplier' when calling saveV1supplierssupplierID");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
