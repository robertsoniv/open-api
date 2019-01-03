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
    define(['ApiClient', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListMessageCCListenerAssignment'), require('../model/ListMessageSender'), require('../model/ListMessageSenderAssignment'), require('../model/MessageCCListenerAssignment'), require('../model/MessageSender'), require('../model/MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageSenderApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListMessageCCListenerAssignment, root.OrderCloud.ListMessageSender, root.OrderCloud.ListMessageSenderAssignment, root.OrderCloud.MessageCCListenerAssignment, root.OrderCloud.MessageSender, root.OrderCloud.MessageSenderAssignment);
  }
}(this, function(ApiClient, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment) {
  'use strict';

  /**
   * MessageSender service.
   * @module api/MessageSenderApi
   * @version 1.0.89
   */

  /**
   * Constructs a new MessageSenderApi. 
   * @alias module:api/MessageSenderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteAssignmentV1messagesendersmessageSenderIDassignments operation.
     * @callback module:api/MessageSenderApi~deleteAssignmentV1messagesendersmessageSenderIDassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.supplierID ID of the supplier.
     * @param {module:api/MessageSenderApi~deleteAssignmentV1messagesendersmessageSenderIDassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignmentV1messagesendersmessageSenderIDassignments = function(messageSenderID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID === undefined || messageSenderID === null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling deleteAssignmentV1messagesendersmessageSenderIDassignments");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'supplierID': opts['supplierID'],
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
        '/messagesenders/{messageSenderID}/assignments', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1messagesendersmessageSenderID operation.
     * @callback module:api/MessageSenderApi~getV1messagesendersmessageSenderIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {module:api/MessageSenderApi~getV1messagesendersmessageSenderIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageSender}
     */
    this.getV1messagesendersmessageSenderID = function(messageSenderID, callback) {
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID === undefined || messageSenderID === null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling getV1messagesendersmessageSenderID");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
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
      var returnType = MessageSender;

      return this.apiClient.callApi(
        '/messagesenders/{messageSenderID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignmentsV1messagesendersassignments operation.
     * @callback module:api/MessageSenderApi~listAssignmentsV1messagesendersassignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageSenderAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.messageSenderID ID of the message sender.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the message sender assignment. Possible values: User, Group, Company.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {String} opts.supplierID ID of the supplier.
     * @param {module:api/MessageSenderApi~listAssignmentsV1messagesendersassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageSenderAssignment}
     */
    this.listAssignmentsV1messagesendersassignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'messageSenderID': opts['messageSenderID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'supplierID': opts['supplierID'],
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
      var returnType = ListMessageSenderAssignment;

      return this.apiClient.callApi(
        '/messagesenders/assignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCCListenerAssignmentsV1messagesendersCCListenerAssignments operation.
     * @callback module:api/MessageSenderApi~listCCListenerAssignmentsV1messagesendersCCListenerAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageCCListenerAssignment} data The data returned by the service call.
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
     * @param {module:api/MessageSenderApi~listCCListenerAssignmentsV1messagesendersCCListenerAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageCCListenerAssignment}
     */
    this.listCCListenerAssignmentsV1messagesendersCCListenerAssignments = function(opts, callback) {
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
      var returnType = ListMessageCCListenerAssignment;

      return this.apiClient.callApi(
        '/messagesenders/CCListenerAssignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1messagesenders operation.
     * @callback module:api/MessageSenderApi~listV1messagesendersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageSender} data The data returned by the service call.
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
     * @param {module:api/MessageSenderApi~listV1messagesendersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageSender}
     */
    this.listV1messagesenders = function(opts, callback) {
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
      var returnType = ListMessageSender;

      return this.apiClient.callApi(
        '/messagesenders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignmentV1messagesendersassignments operation.
     * @callback module:api/MessageSenderApi~saveAssignmentV1messagesendersassignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/MessageSenderAssignment} messageSenderAssignment 
     * @param {module:api/MessageSenderApi~saveAssignmentV1messagesendersassignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignmentV1messagesendersassignments = function(messageSenderAssignment, callback) {
      var postBody = messageSenderAssignment;

      // verify the required parameter 'messageSenderAssignment' is set
      if (messageSenderAssignment === undefined || messageSenderAssignment === null) {
        throw new Error("Missing the required parameter 'messageSenderAssignment' when calling saveAssignmentV1messagesendersassignments");
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
        '/messagesenders/assignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveCCListenerAssignmentV1messagesendersCCListenerAssignments operation.
     * @callback module:api/MessageSenderApi~saveCCListenerAssignmentV1messagesendersCCListenerAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/MessageCCListenerAssignment} messageCCListenerAssignment 
     * @param {module:api/MessageSenderApi~saveCCListenerAssignmentV1messagesendersCCListenerAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveCCListenerAssignmentV1messagesendersCCListenerAssignments = function(messageCCListenerAssignment, callback) {
      var postBody = messageCCListenerAssignment;

      // verify the required parameter 'messageCCListenerAssignment' is set
      if (messageCCListenerAssignment === undefined || messageCCListenerAssignment === null) {
        throw new Error("Missing the required parameter 'messageCCListenerAssignment' when calling saveCCListenerAssignmentV1messagesendersCCListenerAssignments");
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
        '/messagesenders/CCListenerAssignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
