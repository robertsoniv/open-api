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
   * @version 1.0.0
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
     * Callback function to receive the result of the createCatalogs operation.
     * @callback module:api/CatalogApi~createCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~createCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.createCatalogs = function(catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling createCatalogs");
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
     * Callback function to receive the result of the deleteAssignmentCatalogs operation.
     * @callback module:api/CatalogApi~deleteAssignmentCatalogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/CatalogApi~deleteAssignmentCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignmentCatalogs = function(catalogID, buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteAssignmentCatalogs");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteAssignmentCatalogs");
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
     * Callback function to receive the result of the deleteCatalogs operation.
     * @callback module:api/CatalogApi~deleteCatalogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~deleteCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCatalogs = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteCatalogs");
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
     * Callback function to receive the result of the deleteProductAssignmentCatalogs operation.
     * @callback module:api/CatalogApi~deleteProductAssignmentCatalogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} productID ID of the product.
     * @param {module:api/CatalogApi~deleteProductAssignmentCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProductAssignmentCatalogs = function(catalogID, productID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteProductAssignmentCatalogs");
      }

      // verify the required parameter 'productID' is set
      if (productID === undefined || productID === null) {
        throw new Error("Missing the required parameter 'productID' when calling deleteProductAssignmentCatalogs");
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
     * Callback function to receive the result of the getCatalogs operation.
     * @callback module:api/CatalogApi~getCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~getCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.getCatalogs = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling getCatalogs");
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
     * Callback function to receive the result of the listAssignmentsCatalogs operation.
     * @callback module:api/CatalogApi~listAssignmentsCatalogsCallback
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
     * @param {module:api/CatalogApi~listAssignmentsCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalogAssignment}
     */
    this.listAssignmentsCatalogs = function(opts, callback) {
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
     * Callback function to receive the result of the listCatalogs operation.
     * @callback module:api/CatalogApi~listCatalogsCallback
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
     * @param {module:api/CatalogApi~listCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalog}
     */
    this.listCatalogs = function(opts, callback) {
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
     * Callback function to receive the result of the listProductAssignmentsCatalogs operation.
     * @callback module:api/CatalogApi~listProductAssignmentsCatalogsCallback
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
     * @param {module:api/CatalogApi~listProductAssignmentsCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListProductCatalogAssignment}
     */
    this.listProductAssignmentsCatalogs = function(opts, callback) {
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
     * Callback function to receive the result of the patchCatalogs operation.
     * @callback module:api/CatalogApi~patchCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~patchCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.patchCatalogs = function(catalogID, catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling patchCatalogs");
      }

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling patchCatalogs");
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
     * Callback function to receive the result of the saveAssignmentCatalogs operation.
     * @callback module:api/CatalogApi~saveAssignmentCatalogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CatalogAssignment} catalogAssignment 
     * @param {module:api/CatalogApi~saveAssignmentCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignmentCatalogs = function(catalogAssignment, callback) {
      var postBody = catalogAssignment;

      // verify the required parameter 'catalogAssignment' is set
      if (catalogAssignment === undefined || catalogAssignment === null) {
        throw new Error("Missing the required parameter 'catalogAssignment' when calling saveAssignmentCatalogs");
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
     * Callback function to receive the result of the saveCatalogs operation.
     * @callback module:api/CatalogApi~saveCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~saveCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.saveCatalogs = function(catalogID, catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID === undefined || catalogID === null) {
        throw new Error("Missing the required parameter 'catalogID' when calling saveCatalogs");
      }

      // verify the required parameter 'catalog' is set
      if (catalog === undefined || catalog === null) {
        throw new Error("Missing the required parameter 'catalog' when calling saveCatalogs");
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

    /**
     * Callback function to receive the result of the saveProductAssignmentCatalogs operation.
     * @callback module:api/CatalogApi~saveProductAssignmentCatalogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProductCatalogAssignment} productCatalogAssignment 
     * @param {module:api/CatalogApi~saveProductAssignmentCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveProductAssignmentCatalogs = function(productCatalogAssignment, callback) {
      var postBody = productCatalogAssignment;

      // verify the required parameter 'productCatalogAssignment' is set
      if (productCatalogAssignment === undefined || productCatalogAssignment === null) {
        throw new Error("Missing the required parameter 'productCatalogAssignment' when calling saveProductAssignmentCatalogs");
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
  };

  return exports;
}));
