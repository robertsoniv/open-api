# OrderCloud.IncrementorApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIncrementors**](IncrementorApi.md#createIncrementors) | **POST** /incrementors | 
[**deleteIncrementors**](IncrementorApi.md#deleteIncrementors) | **DELETE** /incrementors/{incrementorID} | 
[**getIncrementors**](IncrementorApi.md#getIncrementors) | **GET** /incrementors/{incrementorID} | 
[**listIncrementors**](IncrementorApi.md#listIncrementors) | **GET** /incrementors | 
[**patchIncrementors**](IncrementorApi.md#patchIncrementors) | **PATCH** /incrementors/{incrementorID} | 
[**saveIncrementors**](IncrementorApi.md#saveIncrementors) | **PUT** /incrementors/{incrementorID} | 


<a name="createIncrementors"></a>
# **createIncrementors**
> Incrementor createIncrementors(incrementor)



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
apiInstance.createIncrementors(incrementor, callback);
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

<a name="deleteIncrementors"></a>
# **deleteIncrementors**
> deleteIncrementors(incrementorID)



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
apiInstance.deleteIncrementors(incrementorID, callback);
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

<a name="getIncrementors"></a>
# **getIncrementors**
> Incrementor getIncrementors(incrementorID)



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
apiInstance.getIncrementors(incrementorID, callback);
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

<a name="listIncrementors"></a>
# **listIncrementors**
> ListIncrementor listIncrementors(opts)



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
apiInstance.listIncrementors(opts, callback);
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

<a name="patchIncrementors"></a>
# **patchIncrementors**
> Incrementor patchIncrementors(incrementorID, incrementor)



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
apiInstance.patchIncrementors(incrementorID, incrementor, callback);
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

<a name="saveIncrementors"></a>
# **saveIncrementors**
> Incrementor saveIncrementors(incrementorID, incrementor)



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
apiInstance.saveIncrementors(incrementorID, incrementor, callback);
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

