# OrderCloud.IncrementorApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1incrementors**](IncrementorApi.md#createV1incrementors) | **POST** /incrementors | 
[**deleteV1incrementorsincrementorID**](IncrementorApi.md#deleteV1incrementorsincrementorID) | **DELETE** /incrementors/{incrementorID} | 
[**getV1incrementorsincrementorID**](IncrementorApi.md#getV1incrementorsincrementorID) | **GET** /incrementors/{incrementorID} | 
[**listV1incrementors**](IncrementorApi.md#listV1incrementors) | **GET** /incrementors | 
[**patchV1incrementorsincrementorID**](IncrementorApi.md#patchV1incrementorsincrementorID) | **PATCH** /incrementors/{incrementorID} | 
[**saveV1incrementorsincrementorID**](IncrementorApi.md#saveV1incrementorsincrementorID) | **PUT** /incrementors/{incrementorID} | 


<a name="createV1incrementors"></a>
# **createV1incrementors**
> Incrementor createV1incrementors(incrementor)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
var incrementor = new OrderCloud.Incrementor(); // Incrementor | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1incrementors(incrementor, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incrementor** | [**Incrementor**](Incrementor.md)|  | 

### Return type

[**Incrementor**](Incrementor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1incrementorsincrementorID"></a>
# **deleteV1incrementorsincrementorID**
> deleteV1incrementorsincrementorID(incrementorID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
var incrementorID = "incrementorID_example"; // String | ID of the incrementor.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1incrementorsincrementorID(incrementorID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incrementorID** | **String**| ID of the incrementor. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1incrementorsincrementorID"></a>
# **getV1incrementorsincrementorID**
> Incrementor getV1incrementorsincrementorID(incrementorID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
var incrementorID = "incrementorID_example"; // String | ID of the incrementor.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1incrementorsincrementorID(incrementorID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incrementorID** | **String**| ID of the incrementor. | 

### Return type

[**Incrementor**](Incrementor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1incrementors"></a>
# **listV1incrementors**
> ListIncrementor listV1incrementors(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
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
apiInstance.listV1incrementors(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListIncrementor**](ListIncrementor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1incrementorsincrementorID"></a>
# **patchV1incrementorsincrementorID**
> Incrementor patchV1incrementorsincrementorID(incrementorID, incrementor)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
var incrementorID = "incrementorID_example"; // String | ID of the incrementor.
var incrementor = new OrderCloud.Incrementor(); // Incrementor | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1incrementorsincrementorID(incrementorID, incrementor, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incrementorID** | **String**| ID of the incrementor. | 
 **incrementor** | [**Incrementor**](Incrementor.md)|  | 

### Return type

[**Incrementor**](Incrementor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1incrementorsincrementorID"></a>
# **saveV1incrementorsincrementorID**
> Incrementor saveV1incrementorsincrementorID(incrementorID, incrementor)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.IncrementorApi();
var incrementorID = "incrementorID_example"; // String | ID of the incrementor.
var incrementor = new OrderCloud.Incrementor(); // Incrementor | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1incrementorsincrementorID(incrementorID, incrementor, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incrementorID** | **String**| ID of the incrementor. | 
 **incrementor** | [**Incrementor**](Incrementor.md)|  | 

### Return type

[**Incrementor**](Incrementor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

