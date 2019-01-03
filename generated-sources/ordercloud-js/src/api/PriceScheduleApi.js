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
    define(['ApiClient', 'model/ListPriceSchedule', 'model/PriceBreak', 'model/PriceSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPriceSchedule'), require('../model/PriceBreak'), require('../model/PriceSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PriceScheduleApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPriceSchedule, root.OrderCloud.PriceBreak, root.OrderCloud.PriceSchedule);
  }
}(this, function(ApiClient, ListPriceSchedule, PriceBreak, PriceSchedule) {
  'use strict';

  /**
   * PriceSchedule service.
   * @module api/PriceScheduleApi
   * @version 1.0.89
   */

  /**
   * Constructs a new PriceScheduleApi. 
   * @alias module:api/PriceScheduleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1priceschedules operation.
     * @callback module:api/PriceScheduleApi~createV1priceschedulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceSchedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PriceSchedule} priceSchedule 
     * @param {module:api/PriceScheduleApi~createV1priceschedulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceSchedule}
     */
    this.createV1priceschedules = function(priceSchedule, callback) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule === undefined || priceSchedule === null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling createV1priceschedules");
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
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks operation.
     * @callback module:api/PriceScheduleApi~deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaksCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {Number} quantity Quantity of the price schedule.
     * @param {module:api/PriceScheduleApi~deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaksCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks = function(priceScheduleID, quantity, callback) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks");
      }

      // verify the required parameter 'quantity' is set
      if (quantity === undefined || quantity === null) {
        throw new Error("Missing the required parameter 'quantity' when calling deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
        'quantity': quantity,
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
        '/priceschedules/{priceScheduleID}/PriceBreaks', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1priceschedulespriceScheduleID operation.
     * @callback module:api/PriceScheduleApi~deleteV1priceschedulespriceScheduleIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:api/PriceScheduleApi~deleteV1priceschedulespriceScheduleIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1priceschedulespriceScheduleID = function(priceScheduleID, callback) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling deleteV1priceschedulespriceScheduleID");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
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
        '/priceschedules/{priceScheduleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1priceschedulespriceScheduleID operation.
     * @callback module:api/PriceScheduleApi~getV1priceschedulespriceScheduleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceSchedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:api/PriceScheduleApi~getV1priceschedulespriceScheduleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceSchedule}
     */
    this.getV1priceschedulespriceScheduleID = function(priceScheduleID, callback) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling getV1priceschedulespriceScheduleID");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
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
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1priceschedules operation.
     * @callback module:api/PriceScheduleApi~listV1priceschedulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPriceSchedule} data The data returned by the service call.
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
     * @param {module:api/PriceScheduleApi~listV1priceschedulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPriceSchedule}
     */
    this.listV1priceschedules = function(opts, callback) {
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
      var returnType = ListPriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1priceschedulespriceScheduleID operation.
     * @callback module:api/PriceScheduleApi~patchV1priceschedulespriceScheduleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceSchedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceSchedule} priceSchedule 
     * @param {module:api/PriceScheduleApi~patchV1priceschedulespriceScheduleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceSchedule}
     */
    this.patchV1priceschedulespriceScheduleID = function(priceScheduleID, priceSchedule, callback) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling patchV1priceschedulespriceScheduleID");
      }

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule === undefined || priceSchedule === null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling patchV1priceschedulespriceScheduleID");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
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
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks operation.
     * @callback module:api/PriceScheduleApi~savePriceBreakV1priceschedulespriceScheduleIDPriceBreaksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceSchedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceBreak} priceBreak 
     * @param {module:api/PriceScheduleApi~savePriceBreakV1priceschedulespriceScheduleIDPriceBreaksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceSchedule}
     */
    this.savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks = function(priceScheduleID, priceBreak, callback) {
      var postBody = priceBreak;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks");
      }

      // verify the required parameter 'priceBreak' is set
      if (priceBreak === undefined || priceBreak === null) {
        throw new Error("Missing the required parameter 'priceBreak' when calling savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
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
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}/PriceBreaks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1priceschedulespriceScheduleID operation.
     * @callback module:api/PriceScheduleApi~saveV1priceschedulespriceScheduleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceSchedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceSchedule} priceSchedule 
     * @param {module:api/PriceScheduleApi~saveV1priceschedulespriceScheduleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceSchedule}
     */
    this.saveV1priceschedulespriceScheduleID = function(priceScheduleID, priceSchedule, callback) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID === undefined || priceScheduleID === null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling saveV1priceschedulespriceScheduleID");
      }

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule === undefined || priceSchedule === null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling saveV1priceschedulespriceScheduleID");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
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
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));