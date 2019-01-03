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
    define(['ApiClient', 'model/ApprovalRule', 'model/ListApprovalRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApprovalRule'), require('../model/ListApprovalRule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApprovalRuleApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ApprovalRule, root.OrderCloud.ListApprovalRule);
  }
}(this, function(ApiClient, ApprovalRule, ListApprovalRule) {
  'use strict';

  /**
   * ApprovalRule service.
   * @module api/ApprovalRuleApi
   * @version 1.0.89
   */

  /**
   * Constructs a new ApprovalRuleApi. 
   * @alias module:api/ApprovalRuleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1buyersbuyerIDapprovalrules operation.
     * @callback module:api/ApprovalRuleApi~createV1buyersbuyerIDapprovalrulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApprovalRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/ApprovalRule} approvalRule 
     * @param {module:api/ApprovalRuleApi~createV1buyersbuyerIDapprovalrulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApprovalRule}
     */
    this.createV1buyersbuyerIDapprovalrules = function(buyerID, approvalRule, callback) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling createV1buyersbuyerIDapprovalrules");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule === undefined || approvalRule === null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling createV1buyersbuyerIDapprovalrules");
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
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1buyersbuyerIDapprovalrulesapprovalRuleID operation.
     * @callback module:api/ApprovalRuleApi~deleteV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:api/ApprovalRuleApi~deleteV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1buyersbuyerIDapprovalrulesapprovalRuleID = function(buyerID, approvalRuleID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID === undefined || approvalRuleID === null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling deleteV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
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
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1buyersbuyerIDapprovalrulesapprovalRuleID operation.
     * @callback module:api/ApprovalRuleApi~getV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApprovalRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:api/ApprovalRuleApi~getV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApprovalRule}
     */
    this.getV1buyersbuyerIDapprovalrulesapprovalRuleID = function(buyerID, approvalRuleID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling getV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID === undefined || approvalRuleID === null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling getV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
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
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1buyersbuyerIDapprovalrules operation.
     * @callback module:api/ApprovalRuleApi~listV1buyersbuyerIDapprovalrulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListApprovalRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/ApprovalRuleApi~listV1buyersbuyerIDapprovalrulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListApprovalRule}
     */
    this.listV1buyersbuyerIDapprovalrules = function(buyerID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling listV1buyersbuyerIDapprovalrules");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = ListApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1buyersbuyerIDapprovalrulesapprovalRuleID operation.
     * @callback module:api/ApprovalRuleApi~patchV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApprovalRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} approvalRule 
     * @param {module:api/ApprovalRuleApi~patchV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApprovalRule}
     */
    this.patchV1buyersbuyerIDapprovalrulesapprovalRuleID = function(buyerID, approvalRuleID, approvalRule, callback) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patchV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID === undefined || approvalRuleID === null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling patchV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule === undefined || approvalRule === null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling patchV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
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
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1buyersbuyerIDapprovalrulesapprovalRuleID operation.
     * @callback module:api/ApprovalRuleApi~saveV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApprovalRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} approvalRule 
     * @param {module:api/ApprovalRuleApi~saveV1buyersbuyerIDapprovalrulesapprovalRuleIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApprovalRule}
     */
    this.saveV1buyersbuyerIDapprovalrulesapprovalRuleID = function(buyerID, approvalRuleID, approvalRule, callback) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID === undefined || buyerID === null) {
        throw new Error("Missing the required parameter 'buyerID' when calling saveV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID === undefined || approvalRuleID === null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling saveV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule === undefined || approvalRule === null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling saveV1buyersbuyerIDapprovalrulesapprovalRuleID");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
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
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));