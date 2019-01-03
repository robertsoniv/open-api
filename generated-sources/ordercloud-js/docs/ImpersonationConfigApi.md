# OrderCloud.ImpersonationConfigApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImpersonationConfigs**](ImpersonationConfigApi.md#createImpersonationConfigs) | **POST** /impersonationconfig | 
[**deleteImpersonationConfigs**](ImpersonationConfigApi.md#deleteImpersonationConfigs) | **DELETE** /impersonationconfig/{impersonationConfigID} | 
[**getImpersonationConfigs**](ImpersonationConfigApi.md#getImpersonationConfigs) | **GET** /impersonationconfig/{impersonationConfigID} | 
[**listImpersonationConfigs**](ImpersonationConfigApi.md#listImpersonationConfigs) | **GET** /impersonationconfig | 
[**patchImpersonationConfigs**](ImpersonationConfigApi.md#patchImpersonationConfigs) | **PATCH** /impersonationconfig/{impersonationConfigID} | 
[**saveImpersonationConfigs**](ImpersonationConfigApi.md#saveImpersonationConfigs) | **PUT** /impersonationconfig/{impersonationConfigID} | 


<a name="createImpersonationConfigs"></a>
# **createImpersonationConfigs**
> ImpersonationConfig createImpersonationConfigs(impersonationConfig)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImpersonationConfigs(impersonationConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImpersonationConfigs"></a>
# **deleteImpersonationConfigs**
> deleteImpersonationConfigs(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImpersonationConfigs(impersonationConfigID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getImpersonationConfigs"></a>
# **getImpersonationConfigs**
> ImpersonationConfig getImpersonationConfigs(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImpersonationConfigs(impersonationConfigID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listImpersonationConfigs"></a>
# **listImpersonationConfigs**
> ListImpersonationConfig listImpersonationConfigs(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
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
apiInstance.listImpersonationConfigs(opts, callback);
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

[**ListImpersonationConfig**](ListImpersonationConfig.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchImpersonationConfigs"></a>
# **patchImpersonationConfigs**
> ImpersonationConfig patchImpersonationConfigs(impersonationConfigID, impersonationConfig)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.
var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchImpersonationConfigs(impersonationConfigID, impersonationConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveImpersonationConfigs"></a>
# **saveImpersonationConfigs**
> ImpersonationConfig saveImpersonationConfigs(impersonationConfigID, impersonationConfig)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigApi();
var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.
var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveImpersonationConfigs(impersonationConfigID, impersonationConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

