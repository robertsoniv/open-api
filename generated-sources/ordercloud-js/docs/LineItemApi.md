# OrderCloud.LineItemApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLineItems**](LineItemApi.md#createLineItems) | **POST** /orders/{direction}/{orderID}/lineitems | 
[**deleteLineItems**](LineItemApi.md#deleteLineItems) | **DELETE** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**getLineItems**](LineItemApi.md#getLineItems) | **GET** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**listLineItems**](LineItemApi.md#listLineItems) | **GET** /orders/{direction}/{orderID}/lineitems | 
[**patchLineItems**](LineItemApi.md#patchLineItems) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**patchShippingAddressLineItems**](LineItemApi.md#patchShippingAddressLineItems) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
[**saveLineItems**](LineItemApi.md#saveLineItems) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**setShippingAddressLineItems**](LineItemApi.md#setShippingAddressLineItems) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 


<a name="createLineItems"></a>
# **createLineItems**
> LineItem createLineItems(direction, orderID, lineItem)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItem = new OrderCloud.LineItem(); // LineItem | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLineItems(direction, orderID, lineItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLineItems"></a>
# **deleteLineItems**
> deleteLineItems(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLineItems(direction, orderID, lineItemID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLineItems"></a>
# **getLineItems**
> LineItem getLineItems(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLineItems(direction, orderID, lineItemID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLineItems"></a>
# **listLineItems**
> ListLineItem listLineItems(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
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
apiInstance.listLineItems(direction, orderID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListLineItem**](ListLineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchLineItems"></a>
# **patchLineItems**
> LineItem patchLineItems(direction, orderID, lineItemID, lineItem)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var lineItem = new OrderCloud.LineItem(); // LineItem | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchLineItems(direction, orderID, lineItemID, lineItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchShippingAddressLineItems"></a>
# **patchShippingAddressLineItems**
> LineItem patchShippingAddressLineItems(direction, orderID, lineItemID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchShippingAddressLineItems(direction, orderID, lineItemID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveLineItems"></a>
# **saveLineItems**
> LineItem saveLineItems(direction, orderID, lineItemID, lineItem)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var lineItem = new OrderCloud.LineItem(); // LineItem | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveLineItems(direction, orderID, lineItemID, lineItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setShippingAddressLineItems"></a>
# **setShippingAddressLineItems**
> LineItem setShippingAddressLineItems(direction, orderID, lineItemID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItemApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var lineItemID = "lineItemID_example"; // String | ID of the line item.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setShippingAddressLineItems(direction, orderID, lineItemID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

