# OrderCloud.ApiClientApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiClients**](ApiClientApi.md#createApiClients) | **POST** /apiclients | 
[**deleteApiClients**](ApiClientApi.md#deleteApiClients) | **DELETE** /apiclients/{apiClientID} | 
[**deleteBuyerAssignmentApiClients**](ApiClientApi.md#deleteBuyerAssignmentApiClients) | **DELETE** /buyers/{buyerID}/ApiClients/Assignments/{apiClientID} | 
[**deleteSupplierAssignmentApiClients**](ApiClientApi.md#deleteSupplierAssignmentApiClients) | **DELETE** /suppliers/{supplierID}/ApiClients/Assignments/{apiClientID} | 
[**getApiClients**](ApiClientApi.md#getApiClients) | **GET** /apiclients/{apiClientID} | 
[**listApiClients**](ApiClientApi.md#listApiClients) | **GET** /apiclients | 
[**listAssignmentsApiClients**](ApiClientApi.md#listAssignmentsApiClients) | **GET** /apiclients/assignments | 
[**patchApiClients**](ApiClientApi.md#patchApiClients) | **PATCH** /apiclients/{apiClientID} | 
[**saveApiClients**](ApiClientApi.md#saveApiClients) | **PUT** /apiclients/{apiClientID} | 
[**saveAssignmentApiClients**](ApiClientApi.md#saveAssignmentApiClients) | **POST** /apiclients/assignments | 


<a name="createApiClients"></a>
# **createApiClients**
> ApiClient createApiClients(apiClient)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClient = new OrderCloud.ApiClient(); // ApiClient | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApiClients(apiClient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiClients"></a>
# **deleteApiClients**
> deleteApiClients(apiClientID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteApiClients(apiClientID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteBuyerAssignmentApiClients"></a>
# **deleteBuyerAssignmentApiClients**
> deleteBuyerAssignmentApiClients(apiClientID, buyerID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var buyerID = "buyerID_example"; // String | ID of the buyer.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBuyerAssignmentApiClients(apiClientID, buyerID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **buyerID** | **String**| ID of the buyer. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSupplierAssignmentApiClients"></a>
# **deleteSupplierAssignmentApiClients**
> deleteSupplierAssignmentApiClients(apiClientID, supplierID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var supplierID = "supplierID_example"; // String | ID of the supplier.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSupplierAssignmentApiClients(apiClientID, supplierID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **supplierID** | **String**| ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getApiClients"></a>
# **getApiClients**
> ApiClient getApiClients(apiClientID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApiClients(apiClientID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApiClients"></a>
# **listApiClients**
> ListApiClient listApiClients(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
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
apiInstance.listApiClients(opts, callback);
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

[**ListApiClient**](ListApiClient.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsApiClients"></a>
# **listAssignmentsApiClients**
> ListApiClientAssignment listAssignmentsApiClients(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var opts = {
  'apiClientID': "apiClientID_example", // String | ID of the api client.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAssignmentsApiClients(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListApiClientAssignment**](ListApiClientAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchApiClients"></a>
# **patchApiClients**
> ApiClient patchApiClients(apiClientID, apiClient)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var apiClient = new OrderCloud.ApiClient(); // ApiClient | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchApiClients(apiClientID, apiClient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **apiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveApiClients"></a>
# **saveApiClients**
> ApiClient saveApiClients(apiClientID, apiClient)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientID = "apiClientID_example"; // String | ID of the api client.
var apiClient = new OrderCloud.ApiClient(); // ApiClient | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveApiClients(apiClientID, apiClient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **apiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentApiClients"></a>
# **saveAssignmentApiClients**
> saveAssignmentApiClients(apiClientAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClientApi();
var apiClientAssignment = new OrderCloud.ApiClientAssignment(); // ApiClientAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentApiClients(apiClientAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientAssignment** | [**ApiClientAssignment**](ApiClientAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

