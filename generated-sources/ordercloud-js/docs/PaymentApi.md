# OrderCloud.PaymentApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayments**](PaymentApi.md#createPayments) | **POST** /orders/{direction}/{orderID}/payments | 
[**createTransactionPayments**](PaymentApi.md#createTransactionPayments) | **POST** /orders/{direction}/{orderID}/payments/{paymentID}/transactions | 
[**deletePayments**](PaymentApi.md#deletePayments) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**deleteTransactionPayments**](PaymentApi.md#deleteTransactionPayments) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
[**getPayments**](PaymentApi.md#getPayments) | **GET** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**listPayments**](PaymentApi.md#listPayments) | **GET** /orders/{direction}/{orderID}/payments | 
[**patchPayments**](PaymentApi.md#patchPayments) | **PATCH** /orders/{direction}/{orderID}/payments/{paymentID} | 


<a name="createPayments"></a>
# **createPayments**
> Payment createPayments(direction, orderID, payment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var payment = new OrderCloud.Payment(); // Payment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPayments(direction, orderID, payment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTransactionPayments"></a>
# **createTransactionPayments**
> Payment createTransactionPayments(direction, orderID, paymentID, paymentTransaction)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var paymentID = "paymentID_example"; // String | ID of the payment.
var paymentTransaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTransactionPayments(direction, orderID, paymentID, paymentTransaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **paymentTransaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePayments"></a>
# **deletePayments**
> deletePayments(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var paymentID = "paymentID_example"; // String | ID of the payment.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePayments(direction, orderID, paymentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTransactionPayments"></a>
# **deleteTransactionPayments**
> deleteTransactionPayments(direction, orderID, paymentID, transactionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var paymentID = "paymentID_example"; // String | ID of the payment.
var transactionID = "transactionID_example"; // String | ID of the transaction.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTransactionPayments(direction, orderID, paymentID, transactionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transactionID** | **String**| ID of the transaction. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPayments"></a>
# **getPayments**
> Payment getPayments(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var paymentID = "paymentID_example"; // String | ID of the payment.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayments(direction, orderID, paymentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPayments"></a>
# **listPayments**
> ListPayment listPayments(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
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
apiInstance.listPayments(direction, orderID, opts, callback);
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

[**ListPayment**](ListPayment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchPayments"></a>
# **patchPayments**
> Payment patchPayments(direction, orderID, paymentID, payment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();
var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
var orderID = "orderID_example"; // String | ID of the order.
var paymentID = "paymentID_example"; // String | ID of the payment.
var payment = new OrderCloud.Payment(); // Payment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchPayments(direction, orderID, paymentID, payment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

