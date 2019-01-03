# OrderCloud.LineItemApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1ordersdirectionorderIDlineitems**](LineItemApi.md#createV1ordersdirectionorderIDlineitems) | **POST** /orders/{direction}/{orderID}/lineitems | 
[**deleteV1ordersdirectionorderIDlineitemslineItemID**](LineItemApi.md#deleteV1ordersdirectionorderIDlineitemslineItemID) | **DELETE** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**getV1ordersdirectionorderIDlineitemslineItemID**](LineItemApi.md#getV1ordersdirectionorderIDlineitemslineItemID) | **GET** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**listV1ordersdirectionorderIDlineitems**](LineItemApi.md#listV1ordersdirectionorderIDlineitems) | **GET** /orders/{direction}/{orderID}/lineitems | 
[**patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto**](LineItemApi.md#patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
[**patchV1ordersdirectionorderIDlineitemslineItemID**](LineItemApi.md#patchV1ordersdirectionorderIDlineitemslineItemID) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**saveV1ordersdirectionorderIDlineitemslineItemID**](LineItemApi.md#saveV1ordersdirectionorderIDlineitemslineItemID) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto**](LineItemApi.md#setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 


<a name="createV1ordersdirectionorderIDlineitems"></a>
# **createV1ordersdirectionorderIDlineitems**
> LineItem createV1ordersdirectionorderIDlineitems(direction, orderID, lineItem)



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
apiInstance.createV1ordersdirectionorderIDlineitems(direction, orderID, lineItem, callback);
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

<a name="deleteV1ordersdirectionorderIDlineitemslineItemID"></a>
# **deleteV1ordersdirectionorderIDlineitemslineItemID**
> deleteV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID)



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
apiInstance.deleteV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, callback);
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

<a name="getV1ordersdirectionorderIDlineitemslineItemID"></a>
# **getV1ordersdirectionorderIDlineitemslineItemID**
> LineItem getV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID)



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
apiInstance.getV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, callback);
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

<a name="listV1ordersdirectionorderIDlineitems"></a>
# **listV1ordersdirectionorderIDlineitems**
> ListLineItem listV1ordersdirectionorderIDlineitems(direction, orderID, opts)



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
apiInstance.listV1ordersdirectionorderIDlineitems(direction, orderID, opts, callback);
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

<a name="patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto"></a>
# **patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto**
> LineItem patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(direction, orderID, lineItemID, address)



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
apiInstance.patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(direction, orderID, lineItemID, address, callback);
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

<a name="patchV1ordersdirectionorderIDlineitemslineItemID"></a>
# **patchV1ordersdirectionorderIDlineitemslineItemID**
> LineItem patchV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, lineItem)



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
apiInstance.patchV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, lineItem, callback);
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

<a name="saveV1ordersdirectionorderIDlineitemslineItemID"></a>
# **saveV1ordersdirectionorderIDlineitemslineItemID**
> LineItem saveV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, lineItem)



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
apiInstance.saveV1ordersdirectionorderIDlineitemslineItemID(direction, orderID, lineItemID, lineItem, callback);
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

<a name="setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto"></a>
# **setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto**
> LineItem setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(direction, orderID, lineItemID, address)



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
apiInstance.setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(direction, orderID, lineItemID, address, callback);
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

