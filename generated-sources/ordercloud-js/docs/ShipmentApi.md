# OrderCloud.ShipmentApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1shipments**](ShipmentApi.md#createV1shipments) | **POST** /shipments | 
[**deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID**](ShipmentApi.md#deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID) | **DELETE** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
[**deleteV1shipmentsshipmentID**](ShipmentApi.md#deleteV1shipmentsshipmentID) | **DELETE** /shipments/{shipmentID} | 
[**getItemV1shipmentsshipmentIDitemsorderIDlineItemID**](ShipmentApi.md#getItemV1shipmentsshipmentIDitemsorderIDlineItemID) | **GET** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
[**getV1shipmentsshipmentID**](ShipmentApi.md#getV1shipmentsshipmentID) | **GET** /shipments/{shipmentID} | 
[**listItemsV1shipmentsshipmentIDitems**](ShipmentApi.md#listItemsV1shipmentsshipmentIDitems) | **GET** /shipments/{shipmentID}/items | 
[**listV1shipments**](ShipmentApi.md#listV1shipments) | **GET** /shipments | 
[**patchV1shipmentsshipmentID**](ShipmentApi.md#patchV1shipmentsshipmentID) | **PATCH** /shipments/{shipmentID} | 
[**saveItemV1shipmentsshipmentIDitems**](ShipmentApi.md#saveItemV1shipmentsshipmentIDitems) | **POST** /shipments/{shipmentID}/items | 
[**saveV1shipmentsshipmentID**](ShipmentApi.md#saveV1shipmentsshipmentID) | **PUT** /shipments/{shipmentID} | 


<a name="createV1shipments"></a>
# **createV1shipments**
> Shipment createV1shipments(shipment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipment = new OrderCloud.Shipment(); // Shipment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1shipments(shipment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID"></a>
# **deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID**
> deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID(shipmentID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemV1shipmentsshipmentIDitemsorderIDlineItemID(shipmentID, orderID, lineItemID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1shipmentsshipmentID"></a>
# **deleteV1shipmentsshipmentID**
> deleteV1shipmentsshipmentID(shipmentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1shipmentsshipmentID(shipmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getItemV1shipmentsshipmentIDitemsorderIDlineItemID"></a>
# **getItemV1shipmentsshipmentIDitemsorderIDlineItemID**
> ShipmentItem getItemV1shipmentsshipmentIDitemsorderIDlineItemID(shipmentID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemV1shipmentsshipmentIDitemsorderIDlineItemID(shipmentID, orderID, lineItemID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

[**ShipmentItem**](ShipmentItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV1shipmentsshipmentID"></a>
# **getV1shipmentsshipmentID**
> Shipment getV1shipmentsshipmentID(shipmentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1shipmentsshipmentID(shipmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listItemsV1shipmentsshipmentIDitems"></a>
# **listItemsV1shipmentsshipmentIDitems**
> ListShipmentItem listItemsV1shipmentsshipmentIDitems(shipmentID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var opts = {
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': null // Object | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listItemsV1shipmentsshipmentIDitems(shipmentID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipmentItem**](ListShipmentItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1shipments"></a>
# **listV1shipments**
> ListShipment listV1shipments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var opts = {
  'orderID': "orderID_example", // String | ID of the order.
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': null // Object | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listV1shipments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipment**](ListShipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1shipmentsshipmentID"></a>
# **patchV1shipmentsshipmentID**
> Shipment patchV1shipmentsshipmentID(shipmentID, shipment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var shipment = new OrderCloud.Shipment(); // Shipment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1shipmentsshipmentID(shipmentID, shipment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveItemV1shipmentsshipmentIDitems"></a>
# **saveItemV1shipmentsshipmentIDitems**
> ShipmentItem saveItemV1shipmentsshipmentIDitems(shipmentID, shipmentItem)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var shipmentItem = new OrderCloud.ShipmentItem(); // ShipmentItem | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveItemV1shipmentsshipmentIDitems(shipmentID, shipmentItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **shipmentItem** | [**ShipmentItem**](ShipmentItem.md)|  | 

### Return type

[**ShipmentItem**](ShipmentItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1shipmentsshipmentID"></a>
# **saveV1shipmentsshipmentID**
> Shipment saveV1shipmentsshipmentID(shipmentID, shipment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ShipmentApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var shipment = new OrderCloud.Shipment(); // Shipment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1shipmentsshipmentID(shipmentID, shipment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

