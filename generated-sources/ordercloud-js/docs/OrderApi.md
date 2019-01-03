# OrderCloud.OrderApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPromotionV1ordersdirectionorderIDpromotionspromoCode**](OrderApi.md#addPromotionV1ordersdirectionorderIDpromotionspromoCode) | **POST** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**approveV1ordersdirectionorderIDapprove**](OrderApi.md#approveV1ordersdirectionorderIDapprove) | **POST** /orders/{direction}/{orderID}/approve | 
[**cancelV1ordersdirectionorderIDcancel**](OrderApi.md#cancelV1ordersdirectionorderIDcancel) | **POST** /orders/{direction}/{orderID}/cancel | 
[**createV1ordersdirection**](OrderApi.md#createV1ordersdirection) | **POST** /orders/{direction} | 
[**declineV1ordersdirectionorderIDdecline**](OrderApi.md#declineV1ordersdirectionorderIDdecline) | **POST** /orders/{direction}/{orderID}/decline | 
[**deleteV1ordersdirectionorderID**](OrderApi.md#deleteV1ordersdirectionorderID) | **DELETE** /orders/{direction}/{orderID} | 
[**getV1ordersdirectionorderID**](OrderApi.md#getV1ordersdirectionorderID) | **GET** /orders/{direction}/{orderID} | 
[**listApprovalsV1ordersdirectionorderIDapprovals**](OrderApi.md#listApprovalsV1ordersdirectionorderIDapprovals) | **GET** /orders/{direction}/{orderID}/approvals | 
[**listEligibleApproversV1ordersdirectionorderIDeligibleapprovers**](OrderApi.md#listEligibleApproversV1ordersdirectionorderIDeligibleapprovers) | **GET** /orders/{direction}/{orderID}/eligibleapprovers | 
[**listPromotionsV1ordersdirectionorderIDpromotions**](OrderApi.md#listPromotionsV1ordersdirectionorderIDpromotions) | **GET** /orders/{direction}/{orderID}/promotions | 
[**listV1ordersdirection**](OrderApi.md#listV1ordersdirection) | **GET** /orders/{direction} | 
[**patchBillingAddressV1ordersdirectionorderIDbillto**](OrderApi.md#patchBillingAddressV1ordersdirectionorderIDbillto) | **PATCH** /orders/{direction}/{orderID}/billto | 
[**patchFromUserV1ordersdirectionorderIDfromuser**](OrderApi.md#patchFromUserV1ordersdirectionorderIDfromuser) | **PATCH** /orders/{direction}/{orderID}/fromuser | 
[**patchShippingAddressV1ordersdirectionorderIDshipto**](OrderApi.md#patchShippingAddressV1ordersdirectionorderIDshipto) | **PATCH** /orders/{direction}/{orderID}/shipto | 
[**patchV1ordersdirectionorderID**](OrderApi.md#patchV1ordersdirectionorderID) | **PATCH** /orders/{direction}/{orderID} | 
[**removePromotionV1ordersdirectionorderIDpromotionspromoCode**](OrderApi.md#removePromotionV1ordersdirectionorderIDpromotionspromoCode) | **DELETE** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**saveV1ordersdirectionorderID**](OrderApi.md#saveV1ordersdirectionorderID) | **PUT** /orders/{direction}/{orderID} | 
[**setBillingAddressV1ordersdirectionorderIDbillto**](OrderApi.md#setBillingAddressV1ordersdirectionorderIDbillto) | **PUT** /orders/{direction}/{orderID}/billto | 
[**setShippingAddressV1ordersdirectionorderIDshipto**](OrderApi.md#setShippingAddressV1ordersdirectionorderIDshipto) | **PUT** /orders/{direction}/{orderID}/shipto | 
[**shipV1ordersdirectionorderIDship**](OrderApi.md#shipV1ordersdirectionorderIDship) | **POST** /orders/{direction}/{orderID}/ship | 
[**submitV1ordersdirectionorderIDsubmit**](OrderApi.md#submitV1ordersdirectionorderIDsubmit) | **POST** /orders/{direction}/{orderID}/submit | 


<a name="addPromotionV1ordersdirectionorderIDpromotionspromoCode"></a>
# **addPromotionV1ordersdirectionorderIDpromotionspromoCode**
> OrderPromotion addPromotionV1ordersdirectionorderIDpromotionspromoCode(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var promoCode = "promoCode_example"; // String | Promo code of the order promotion.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPromotionV1ordersdirectionorderIDpromotionspromoCode(direction, orderID, promoCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order promotion. | 

### Return type

[**OrderPromotion**](OrderPromotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="approveV1ordersdirectionorderIDapprove"></a>
# **approveV1ordersdirectionorderIDapprove**
> Order approveV1ordersdirectionorderIDapprove(direction, orderID, orderApprovalInfo)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var orderApprovalInfo = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.approveV1ordersdirectionorderIDapprove(direction, orderID, orderApprovalInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **orderApprovalInfo** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelV1ordersdirectionorderIDcancel"></a>
# **cancelV1ordersdirectionorderIDcancel**
> Order cancelV1ordersdirectionorderIDcancel(direction, orderID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelV1ordersdirectionorderIDcancel(direction, orderID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createV1ordersdirection"></a>
# **createV1ordersdirection**
> Order createV1ordersdirection(direction, order)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var order = new OrderCloud.Order(); // Order | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1ordersdirection(direction, order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="declineV1ordersdirectionorderIDdecline"></a>
# **declineV1ordersdirectionorderIDdecline**
> Order declineV1ordersdirectionorderIDdecline(direction, orderID, orderApprovalInfo)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var orderApprovalInfo = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.declineV1ordersdirectionorderIDdecline(direction, orderID, orderApprovalInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **orderApprovalInfo** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1ordersdirectionorderID"></a>
# **deleteV1ordersdirectionorderID**
> deleteV1ordersdirectionorderID(direction, orderID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1ordersdirectionorderID(direction, orderID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1ordersdirectionorderID"></a>
# **getV1ordersdirectionorderID**
> Order getV1ordersdirectionorderID(direction, orderID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1ordersdirectionorderID(direction, orderID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApprovalsV1ordersdirectionorderIDapprovals"></a>
# **listApprovalsV1ordersdirectionorderIDapprovals**
> ListOrderApproval listApprovalsV1ordersdirectionorderIDapprovals(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
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
apiInstance.listApprovalsV1ordersdirectionorderIDapprovals(direction, orderID, opts, callback);
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

[**ListOrderApproval**](ListOrderApproval.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listEligibleApproversV1ordersdirectionorderIDeligibleapprovers"></a>
# **listEligibleApproversV1ordersdirectionorderIDeligibleapprovers**
> ListUser listEligibleApproversV1ordersdirectionorderIDeligibleapprovers(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
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
apiInstance.listEligibleApproversV1ordersdirectionorderIDeligibleapprovers(direction, orderID, opts, callback);
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

[**ListUser**](ListUser.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPromotionsV1ordersdirectionorderIDpromotions"></a>
# **listPromotionsV1ordersdirectionorderIDpromotions**
> ListOrderPromotion listPromotionsV1ordersdirectionorderIDpromotions(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
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
apiInstance.listPromotionsV1ordersdirectionorderIDpromotions(direction, orderID, opts, callback);
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

[**ListOrderPromotion**](ListOrderPromotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1ordersdirection"></a>
# **listV1ordersdirection**
> ListOrder listV1ordersdirection(direction, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var opts = {
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'from': "from_example", // String | Lower bound of date range that the order was created.
  'to': "to_example", // String | Upper bound of date range that the order was created.
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
apiInstance.listV1ordersdirection(direction, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **from** | **String**| Lower bound of date range that the order was created. | [optional] 
 **to** | **String**| Upper bound of date range that the order was created. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchBillingAddressV1ordersdirectionorderIDbillto"></a>
# **patchBillingAddressV1ordersdirectionorderIDbillto**
> Order patchBillingAddressV1ordersdirectionorderIDbillto(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchBillingAddressV1ordersdirectionorderIDbillto(direction, orderID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchFromUserV1ordersdirectionorderIDfromuser"></a>
# **patchFromUserV1ordersdirectionorderIDfromuser**
> Order patchFromUserV1ordersdirectionorderIDfromuser(direction, orderID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchFromUserV1ordersdirectionorderIDfromuser(direction, orderID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchShippingAddressV1ordersdirectionorderIDshipto"></a>
# **patchShippingAddressV1ordersdirectionorderIDshipto**
> Order patchShippingAddressV1ordersdirectionorderIDshipto(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchShippingAddressV1ordersdirectionorderIDshipto(direction, orderID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchV1ordersdirectionorderID"></a>
# **patchV1ordersdirectionorderID**
> Order patchV1ordersdirectionorderID(direction, orderID, order)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var order = new OrderCloud.Order(); // Order | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1ordersdirectionorderID(direction, orderID, order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removePromotionV1ordersdirectionorderIDpromotionspromoCode"></a>
# **removePromotionV1ordersdirectionorderIDpromotionspromoCode**
> Order removePromotionV1ordersdirectionorderIDpromotionspromoCode(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var promoCode = "promoCode_example"; // String | Promo code of the order.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removePromotionV1ordersdirectionorderIDpromotionspromoCode(direction, orderID, promoCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order. | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveV1ordersdirectionorderID"></a>
# **saveV1ordersdirectionorderID**
> Order saveV1ordersdirectionorderID(direction, orderID, order)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var order = new OrderCloud.Order(); // Order | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1ordersdirectionorderID(direction, orderID, order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setBillingAddressV1ordersdirectionorderIDbillto"></a>
# **setBillingAddressV1ordersdirectionorderIDbillto**
> Order setBillingAddressV1ordersdirectionorderIDbillto(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setBillingAddressV1ordersdirectionorderIDbillto(direction, orderID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setShippingAddressV1ordersdirectionorderIDshipto"></a>
# **setShippingAddressV1ordersdirectionorderIDshipto**
> Order setShippingAddressV1ordersdirectionorderIDshipto(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setShippingAddressV1ordersdirectionorderIDshipto(direction, orderID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shipV1ordersdirectionorderIDship"></a>
# **shipV1ordersdirectionorderIDship**
> Order shipV1ordersdirectionorderIDship(direction, orderID, shipment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var shipment = new OrderCloud.Shipment(); // Shipment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shipV1ordersdirectionorderIDship(direction, orderID, shipment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitV1ordersdirectionorderIDsubmit"></a>
# **submitV1ordersdirectionorderIDsubmit**
> Order submitV1ordersdirectionorderIDsubmit(direction, orderID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OrderApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitV1ordersdirectionorderIDsubmit(direction, orderID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

