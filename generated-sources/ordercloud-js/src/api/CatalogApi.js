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
    define(['ApiClient', 'model/Catalog', 'model/CatalogAssignment', 'model/ListCatalog', 'model/ListCatalogAssignment', 'model/ListProductCatalogAssignment', 'model/ProductCatalogAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Catalog'), require('../model/CatalogAssignment'), require('../model/ListCatalog'), require('../model/ListCatalogAssignment'), require('../model/ListProductCatalogAssignment'), require('../model/ProductCatalogAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CatalogApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Catalog, root.OrderCloud.CatalogAssignment, root.OrderCloud.ListCatalog, root.OrderCloud.ListCatalogAssignment, root.OrderCloud.ListProductCatalogAssignment, root.OrderCloud.ProductCatalogAssignment);
  }
}(this, function(ApiClient, Catalog, CatalogAssignment, ListCatalog, ListCatalogAssignment, ListProductCatalogAssignment, ProductCatalogAssignment) {
  'use strict';

  /**
   * Catalog service.
   * @module api/CatalogApi
   * @version 1.0.89
   */

  /**
   * Constructs a new CatalogApi. 
   * @alias module:api/CatalogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1catalogs operation.
     * @callback module:api/CatalogApi~createV1catalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~createV1catalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.createV1catalogs = function(catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling createV1catalogs");
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssignmentV1catalogscatalogIDassignments operation.
     * @callback module:api/CatalogApi~deleteAssignmentV1catalogscatalogIDassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/CatalogApi~deleteAssignmentV1catalogscatalogIDassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignmentV1catalogscatalogIDassignments = function(catalogID, buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteAssignmentV1catalogscatalogIDassignments");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteAssignmentV1catalogscatalogIDassignments");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'buyerID': buyerID,
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
        '/catalogs/{catalogID}/assignments', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID operation.
     * @callback module:api/CatalogApi~deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} productID ID of the product.
     * @param {module:api/CatalogApi~deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID = function(catalogID, productID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID");
      }

      // verify the required parameter 'productID' is set
      if (productID === undefined || productID === null) {
        throw new Error("Missing the required parameter 'productID' when calling deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID");
      }


      var pathParams = {
        'catalogID': catalogID,
        'productID': productID
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
        '/catalogs/{catalogID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1catalogscatalogID operation.
     * @callback module:api/CatalogApi~deleteV1catalogscatalogIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~deleteV1catalogscatalogIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1catalogscatalogID = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteV1catalogscatalogID");
      }


      var pathParams = {
        'catalogID': catalogID
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
        '/catalogs/{catalogID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1catalogscatalogID operation.
     * @callback module:api/CatalogApi~getV1catalogscatalogIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~getV1catalogscatalogIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.getV1catalogscatalogID = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling getV1catalogscatalogID");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignmentsV1catalogsassignments operation.
     * @callback module:api/CatalogApi~listAssignmentsV1catalogsassignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListCatalogAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/CatalogApi~listAssignmentsV1catalogsassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalogAssignment}
     */
    this.listAssignmentsV1catalogsassignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'buyerID': opts['buyerID'],
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
      var returnType = ListCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/assignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProductAssignmentsV1catalogsproductassignments operation.
     * @callback module:api/CatalogApi~listProductAssignmentsV1catalogsproductassignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListProductCatalogAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.productID ID of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/CatalogApi~listProductAssignmentsV1catalogsproductassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListProductCatalogAssignment}
     */
    this.listProductAssignmentsV1catalogsproductassignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'productID': opts['productID'],
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
      var returnType = ListProductCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/productassignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1catalogs operation.
     * @callback module:api/CatalogApi~listV1catalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListCatalog} data The data returned by the service call.
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
     * @param {module:api/CatalogApi~listV1catalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalog}
     */
    this.listV1catalogs = function(opts, callback) {
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
      var returnType = ListCatalog;

      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1catalogscatalogID operation.
     * @callback module:api/CatalogApi~patchV1catalogscatalogIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~patchV1catalogscatalogIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.patchV1catalogscatalogID = function(catalogID, catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling patchV1catalogscatalogID");
      }

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling patchV1catalogscatalogID");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignmentV1catalogsassignments operation.
     * @callback module:api/CatalogApi~saveAssignmentV1catalogsassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CatalogAssignment} catalogAssignment 
     * @param {module:api/CatalogApi~saveAssignmentV1catalogsassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignmentV1catalogsassignments = function(catalogAssignment, callback) {
      var postBody = catalogAssignment;

      // verify the required parameter 'catalogAssignment' is set
      if (catalogAssignment === undefined || catalogAssignment === null) {
        throw new Error("Missing the required parameter 'catalogAssignment' when calling saveAssignmentV1catalogsassignments");
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
        '/catalogs/assignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveProductAssignmentV1catalogsproductassignments operation.
     * @callback module:api/CatalogApi~saveProductAssignmentV1catalogsproductassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProductCatalogAssignment} productCatalogAssignment 
     * @param {module:api/CatalogApi~saveProductAssignmentV1catalogsproductassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveProductAssignmentV1catalogsproductassignments = function(productCatalogAssignment, callback) {
      var postBody = productCatalogAssignment;

      // verify the required parameter 'productCatalogAssignment' is set
      if (productCatalogAssignment === undefined || productCatalogAssignment === null) {
        throw new Error("Missing the required parameter 'productCatalogAssignment' when calling saveProductAssignmentV1catalogsproductassignments");
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
        '/catalogs/productassignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1catalogscatalogID operation.
     * @callback module:api/CatalogApi~saveV1catalogscatalogIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~saveV1catalogscatalogIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.saveV1catalogscatalogID = function(catalogID, catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling saveV1catalogscatalogID");
      }

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling saveV1catalogscatalogID");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));