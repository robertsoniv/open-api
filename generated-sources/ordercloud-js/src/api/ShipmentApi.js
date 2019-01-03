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
    define(['ApiClient', 'model/ListShipment', 'model/ListShipmentItem', 'model/Shipment', 'model/ShipmentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListShipment'), require('../model/ListShipmentItem'), require('../model/Shipment'), require('../model/ShipmentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ShipmentApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListShipment, root.OrderCloud.ListShipmentItem, root.OrderCloud.Shipment, root.OrderCloud.ShipmentItem);
  }
}(this, function(ApiClient, ListShipment, ListShipmentItem, Shipment, ShipmentItem) {
  'use strict';

  /**
   * Shipment service.
   * @module api/ShipmentApi
   * @version 1.0.89
   */

  /**
   * Constructs a new ShipmentApi. 
   * @alias module:api/ShipmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createV1shipments operation.
     * @callback module:api/ShipmentApi~createV1shipmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Shipment} shipment 
     * @param {module:api/ShipmentApi~createV1shipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.createV1shipments = function(shipment, callback) {
      var postBody = shipment;

      // verify the required parameter 'shipment' is set
      if (shipment === undefined || shipment === null) {
        throw new Error("Missing the required parameter 'shipment' when calling createV1shipments");
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID operation.
     * @callback module:api/ShipmentApi~deleteItemV1shipmentsshipmentIDitemsorderIDlineItemIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:api/ShipmentApi~deleteItemV1shipmentsshipmentIDitemsorderIDlineItemIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID = function(shipmentID, orderID, lineItemID, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID === undefined || lineItemID === null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }


      var pathParams = {
        'shipmentID': shipmentID,
        'orderID': orderID,
        'lineItemID': lineItemID
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
        '/shipments/{shipmentID}/items/{orderID}/{lineItemID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV1shipmentsshipmentID operation.
     * @callback module:api/ShipmentApi~deleteV1shipmentsshipmentIDCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:api/ShipmentApi~deleteV1shipmentsshipmentIDCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteV1shipmentsshipmentID = function(shipmentID, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling deleteV1shipmentsshipmentID");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
        '/shipments/{shipmentID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemV1shipmentsshipmentIDitemsorderIDlineItemID operation.
     * @callback module:api/ShipmentApi~getItemV1shipmentsshipmentIDitemsorderIDlineItemIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShipmentItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:api/ShipmentApi~getItemV1shipmentsshipmentIDitemsorderIDlineItemIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShipmentItem}
     */
    this.getItemV1shipmentsshipmentIDitemsorderIDlineItemID = function(shipmentID, orderID, lineItemID, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling getItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }

      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling getItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID === undefined || lineItemID === null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling getItemV1shipmentsshipmentIDitemsorderIDlineItemID");
      }


      var pathParams = {
        'shipmentID': shipmentID,
        'orderID': orderID,
        'lineItemID': lineItemID
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
      var returnType = ShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items/{orderID}/{lineItemID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV1shipmentsshipmentID operation.
     * @callback module:api/ShipmentApi~getV1shipmentsshipmentIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:api/ShipmentApi~getV1shipmentsshipmentIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.getV1shipmentsshipmentID = function(shipmentID, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling getV1shipmentsshipmentID");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listItemsV1shipmentsshipmentIDitems operation.
     * @callback module:api/ShipmentApi~listItemsV1shipmentsshipmentIDitemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListShipmentItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/ShipmentApi~listItemsV1shipmentsshipmentIDitemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListShipmentItem}
     */
    this.listItemsV1shipmentsshipmentIDitems = function(shipmentID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling listItemsV1shipmentsshipmentIDitems");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
      var returnType = ListShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listV1shipments operation.
     * @callback module:api/ShipmentApi~listV1shipmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderID ID of the order.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/ShipmentApi~listV1shipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListShipment}
     */
    this.listV1shipments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orderID': opts['orderID'],
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
      var returnType = ListShipment;

      return this.apiClient.callApi(
        '/shipments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchV1shipmentsshipmentID operation.
     * @callback module:api/ShipmentApi~patchV1shipmentsshipmentIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @param {module:api/ShipmentApi~patchV1shipmentsshipmentIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.patchV1shipmentsshipmentID = function(shipmentID, shipment, callback) {
      var postBody = shipment;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling patchV1shipmentsshipmentID");
      }

      // verify the required parameter 'shipment' is set
      if (shipment === undefined || shipment === null) {
        throw new Error("Missing the required parameter 'shipment' when calling patchV1shipmentsshipmentID");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveItemV1shipmentsshipmentIDitems operation.
     * @callback module:api/ShipmentApi~saveItemV1shipmentsshipmentIDitemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShipmentItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/ShipmentItem} shipmentItem 
     * @param {module:api/ShipmentApi~saveItemV1shipmentsshipmentIDitemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShipmentItem}
     */
    this.saveItemV1shipmentsshipmentIDitems = function(shipmentID, shipmentItem, callback) {
      var postBody = shipmentItem;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling saveItemV1shipmentsshipmentIDitems");
      }

      // verify the required parameter 'shipmentItem' is set
      if (shipmentItem === undefined || shipmentItem === null) {
        throw new Error("Missing the required parameter 'shipmentItem' when calling saveItemV1shipmentsshipmentIDitems");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
      var returnType = ShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveV1shipmentsshipmentID operation.
     * @callback module:api/ShipmentApi~saveV1shipmentsshipmentIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @param {module:api/ShipmentApi~saveV1shipmentsshipmentIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.saveV1shipmentsshipmentID = function(shipmentID, shipment, callback) {
      var postBody = shipment;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID === undefined || shipmentID === null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling saveV1shipmentsshipmentID");
      }

      // verify the required parameter 'shipment' is set
      if (shipment === undefined || shipment === null) {
        throw new Error("Missing the required parameter 'shipment' when calling saveV1shipmentsshipmentID");
      }


      var pathParams = {
        'shipmentID': shipmentID
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
