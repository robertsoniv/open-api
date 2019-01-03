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
    define(['ApiClient', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/Promotion', 'model/PromotionAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPromotion'), require('../model/ListPromotionAssignment'), require('../model/Promotion'), require('../model/PromotionAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PromotionApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPromotion, root.OrderCloud.ListPromotionAssignment, root.OrderCloud.Promotion, root.OrderCloud.PromotionAssignment);
  }
}(this, function(ApiClient, ListPromotion, ListPromotionAssignment, Promotion, PromotionAssignment) {
  'use strict';

  /**
   * Promotion service.
   * @module api/PromotionApi
   * @version 1.0.89
   */

  /**
   * Constructs a new PromotionApi. 
   * @alias module:api/PromotionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1promotions operation.
     * @callback module:api/PromotionApi~createV1promotionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Promotion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Promotion} promotion 
     * @param {module:api/PromotionApi~createV1promotionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Promotion}
     */
    this.createV1promotions = function(promotion, callback) {
      var postBody = promotion;

      // verify the required parameter 'promotion' is set
      if (promotion === undefined || promotion === null) {
        throw new Error("Missing the required parameter 'promotion' when calling createV1promotions");
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssignmentV1promotionspromotionIDassignments operation.
     * @callback module:api/PromotionApi~deleteAssignmentV1promotionspromotionIDassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} promotionID ID of the promotion.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {module:api/PromotionApi~deleteAssignmentV1promotionspromotionIDassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignmentV1promotionspromotionIDassignments = function(promotionID, buyerID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling deleteAssignmentV1promotionspromotionIDassignments");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteAssignmentV1promotionspromotionIDassignments");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
        'buyerID': buyerID,
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
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
        '/promotions/{promotionID}/assignments', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1promotionspromotionID operation.
     * @callback module:api/PromotionApi~deleteV1promotionspromotionIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:api/PromotionApi~deleteV1promotionspromotionIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1promotionspromotionID = function(promotionID, callback) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling deleteV1promotionspromotionID");
      }


      var pathParams = {
        'promotionID': promotionID
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
        '/promotions/{promotionID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1promotionspromotionID operation.
     * @callback module:api/PromotionApi~getV1promotionspromotionIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Promotion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:api/PromotionApi~getV1promotionspromotionIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Promotion}
     */
    this.getV1promotionspromotionID = function(promotionID, callback) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling getV1promotionspromotionID");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignmentsV1promotionsassignments operation.
     * @callback module:api/PromotionApi~listAssignmentsV1promotionsassignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPromotionAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.promotionID ID of the promotion.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the promotion assignment. Possible values: User, Group, Company.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/PromotionApi~listAssignmentsV1promotionsassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPromotionAssignment}
     */
    this.listAssignmentsV1promotionsassignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'promotionID': opts['promotionID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
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
      var returnType = ListPromotionAssignment;

      return this.apiClient.callApi(
        '/promotions/assignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1promotions operation.
     * @callback module:api/PromotionApi~listV1promotionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPromotion} data The data returned by the service call.
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
     * @param {module:api/PromotionApi~listV1promotionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPromotion}
     */
    this.listV1promotions = function(opts, callback) {
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
      var returnType = ListPromotion;

      return this.apiClient.callApi(
        '/promotions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1promotionspromotionID operation.
     * @callback module:api/PromotionApi~patchV1promotionspromotionIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Promotion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} promotion 
     * @param {module:api/PromotionApi~patchV1promotionspromotionIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Promotion}
     */
    this.patchV1promotionspromotionID = function(promotionID, promotion, callback) {
      var postBody = promotion;

      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling patchV1promotionspromotionID");
      }

      // verify the required parameter 'promotion' is set
      if (promotion === undefined || promotion === null) {
        throw new Error("Missing the required parameter 'promotion' when calling patchV1promotionspromotionID");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignmentV1promotionsassignments operation.
     * @callback module:api/PromotionApi~saveAssignmentV1promotionsassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PromotionAssignment} promotionAssignment 
     * @param {module:api/PromotionApi~saveAssignmentV1promotionsassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignmentV1promotionsassignments = function(promotionAssignment, callback) {
      var postBody = promotionAssignment;

      // verify the required parameter 'promotionAssignment' is set
      if (promotionAssignment === undefined || promotionAssignment === null) {
        throw new Error("Missing the required parameter 'promotionAssignment' when calling saveAssignmentV1promotionsassignments");
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
        '/promotions/assignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1promotionspromotionID operation.
     * @callback module:api/PromotionApi~saveV1promotionspromotionIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Promotion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} promotion 
     * @param {module:api/PromotionApi~saveV1promotionspromotionIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Promotion}
     */
    this.saveV1promotionspromotionID = function(promotionID, promotion, callback) {
      var postBody = promotion;

      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling saveV1promotionspromotionID");
      }

      // verify the required parameter 'promotion' is set
      if (promotion === undefined || promotion === null) {
        throw new Error("Missing the required parameter 'promotion' when calling saveV1promotionspromotionID");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));