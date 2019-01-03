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
    define(['ApiClient', 'model/ListPayment', 'model/Payment', 'model/PaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPayment'), require('../model/Payment'), require('../model/PaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PaymentApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPayment, root.OrderCloud.Payment, root.OrderCloud.PaymentTransaction);
  }
}(this, function(ApiClient, ListPayment, Payment, PaymentTransaction) {
  'use strict';

  /**
   * Payment service.
   * @module api/PaymentApi
   * @version 1.0.89
   */

  /**
   * Constructs a new PaymentApi. 
   * @alias module:api/PaymentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions operation.
     * @callback module:api/PaymentApi~createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/PaymentTransaction} paymentTransaction 
     * @param {module:api/PaymentApi~createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    this.createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions = function(direction, orderID, paymentID, paymentTransaction, callback) {
      var postBody = paymentTransaction;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID === undefined || paymentID === null) {
        throw new Error("Missing the required parameter 'paymentID' when calling createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions");
      }

      // verify the required parameter 'paymentTransaction' is set
      if (paymentTransaction === undefined || paymentTransaction === null) {
        throw new Error("Missing the required parameter 'paymentTransaction' when calling createTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactions");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/payments/{paymentID}/transactions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createV1ordersdirectionorderIDpayments operation.
     * @callback module:api/PaymentApi~createV1ordersdirectionorderIDpaymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Payment} payment 
     * @param {module:api/PaymentApi~createV1ordersdirectionorderIDpaymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    this.createV1ordersdirectionorderIDpayments = function(direction, orderID, payment, callback) {
      var postBody = payment;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling createV1ordersdirectionorderIDpayments");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling createV1ordersdirectionorderIDpayments");
      }

      // verify the required parameter 'payment' is set
      if (payment === undefined || payment === null) {
        throw new Error("Missing the required parameter 'payment' when calling createV1ordersdirectionorderIDpayments");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/payments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID operation.
     * @callback module:api/PaymentApi~deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @param {module:api/PaymentApi~deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID = function(direction, orderID, paymentID, transactionID, callback) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID === undefined || paymentID === null) {
        throw new Error("Missing the required parameter 'paymentID' when calling deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID === undefined || transactionID === null) {
        throw new Error("Missing the required parameter 'transactionID' when calling deleteTransactionV1ordersdirectionorderIDpaymentspaymentIDtransactionstransactionID");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
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
        '/orders/{direction}/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1ordersdirectionorderIDpaymentspaymentID operation.
     * @callback module:api/PaymentApi~deleteV1ordersdirectionorderIDpaymentspaymentIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:api/PaymentApi~deleteV1ordersdirectionorderIDpaymentspaymentIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1ordersdirectionorderIDpaymentspaymentID = function(direction, orderID, paymentID, callback) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling deleteV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling deleteV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID === undefined || paymentID === null) {
        throw new Error("Missing the required parameter 'paymentID' when calling deleteV1ordersdirectionorderIDpaymentspaymentID");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'paymentID': paymentID
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
        '/orders/{direction}/{orderID}/payments/{paymentID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1ordersdirectionorderIDpaymentspaymentID operation.
     * @callback module:api/PaymentApi~getV1ordersdirectionorderIDpaymentspaymentIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:api/PaymentApi~getV1ordersdirectionorderIDpaymentspaymentIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    this.getV1ordersdirectionorderIDpaymentspaymentID = function(direction, orderID, paymentID, callback) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling getV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling getV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID === undefined || paymentID === null) {
        throw new Error("Missing the required parameter 'paymentID' when calling getV1ordersdirectionorderIDpaymentspaymentID");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/payments/{paymentID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1ordersdirectionorderIDpayments operation.
     * @callback module:api/PaymentApi~listV1ordersdirectionorderIDpaymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPayment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/PaymentApi~listV1ordersdirectionorderIDpaymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPayment}
     */
    this.listV1ordersdirectionorderIDpayments = function(direction, orderID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling listV1ordersdirectionorderIDpayments");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling listV1ordersdirectionorderIDpayments");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
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
      var returnType = ListPayment;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/payments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1ordersdirectionorderIDpaymentspaymentID operation.
     * @callback module:api/PaymentApi~patchV1ordersdirectionorderIDpaymentspaymentIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/Payment} payment 
     * @param {module:api/PaymentApi~patchV1ordersdirectionorderIDpaymentspaymentIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    this.patchV1ordersdirectionorderIDpaymentspaymentID = function(direction, orderID, paymentID, payment, callback) {
      var postBody = payment;

      // verify the required parameter 'direction' is set
      if (direction === undefined || direction === null) {
        throw new Error("Missing the required parameter 'direction' when calling patchV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling patchV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID === undefined || paymentID === null) {
        throw new Error("Missing the required parameter 'paymentID' when calling patchV1ordersdirectionorderIDpaymentspaymentID");
      }

      // verify the required parameter 'payment' is set
      if (payment === undefined || payment === null) {
        throw new Error("Missing the required parameter 'payment' when calling patchV1ordersdirectionorderIDpaymentspaymentID");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/payments/{paymentID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
