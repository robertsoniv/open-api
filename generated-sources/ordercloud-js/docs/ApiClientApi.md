# OrderCloud.ApiClientApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1apiclients**](ApiClientApi.md#createV1apiclients) | **POST** /apiclients | 
[**deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID**](ApiClientApi.md#deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID) | **DELETE** /buyers/{buyerID}/ApiClients/Assignments/{apiClientID} | 
[**deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID**](ApiClientApi.md#deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID) | **DELETE** /suppliers/{supplierID}/ApiClients/Assignments/{apiClientID} | 
[**deleteV1apiclientsapiClientID**](ApiClientApi.md#deleteV1apiclientsapiClientID) | **DELETE** /apiclients/{apiClientID} | 
[**getV1apiclientsapiClientID**](ApiClientApi.md#getV1apiclientsapiClientID) | **GET** /apiclients/{apiClientID} | 
[**listAssignmentsV1apiclientsassignments**](ApiClientApi.md#listAssignmentsV1apiclientsassignments) | **GET** /apiclients/assignments | 
[**listV1apiclients**](ApiClientApi.md#listV1apiclients) | **GET** /apiclients | 
[**patchV1apiclientsapiClientID**](ApiClientApi.md#patchV1apiclientsapiClientID) | **PATCH** /apiclients/{apiClientID} | 
[**saveAssignmentV1apiclientsassignments**](ApiClientApi.md#saveAssignmentV1apiclientsassignments) | **POST** /apiclients/assignments | 
[**saveV1apiclientsapiClientID**](ApiClientApi.md#saveV1apiclientsapiClientID) | **PUT** /apiclients/{apiClientID} | 


<a name="createV1apiclients"></a>
# **createV1apiclients**
> ApiClient createV1apiclients(apiClient)



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
apiInstance.createV1apiclients(apiClient, callback);
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

<a name="deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID"></a>
# **deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID**
> deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID(apiClientID, buyerID)



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
apiInstance.deleteBuyerAssignmentV1buyersbuyerIDApiClientsAssignmentsapiClientID(apiClientID, buyerID, callback);
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

<a name="deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID"></a>
# **deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID**
> deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID(apiClientID, supplierID)



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
apiInstance.deleteSupplierAssignmentV1supplierssupplierIDApiClientsAssignmentsapiClientID(apiClientID, supplierID, callback);
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

<a name="deleteV1apiclientsapiClientID"></a>
# **deleteV1apiclientsapiClientID**
> deleteV1apiclientsapiClientID(apiClientID)



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
apiInstance.deleteV1apiclientsapiClientID(apiClientID, callback);
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

<a name="getV1apiclientsapiClientID"></a>
# **getV1apiclientsapiClientID**
> ApiClient getV1apiclientsapiClientID(apiClientID)



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
apiInstance.getV1apiclientsapiClientID(apiClientID, callback);
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

<a name="listAssignmentsV1apiclientsassignments"></a>
# **listAssignmentsV1apiclientsassignments**
> ListApiClientAssignment listAssignmentsV1apiclientsassignments(opts)



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
apiInstance.listAssignmentsV1apiclientsassignments(opts, callback);
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

<a name="listV1apiclients"></a>
# **listV1apiclients**
> ListApiClient listV1apiclients(opts)



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
apiInstance.listV1apiclients(opts, callback);
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

<a name="patchV1apiclientsapiClientID"></a>
# **patchV1apiclientsapiClientID**
> ApiClient patchV1apiclientsapiClientID(apiClientID, apiClient)



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
apiInstance.patchV1apiclientsapiClientID(apiClientID, apiClient, callback);
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

<a name="saveAssignmentV1apiclientsassignments"></a>
# **saveAssignmentV1apiclientsassignments**
> saveAssignmentV1apiclientsassignments(apiClientAssignment)



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
apiInstance.saveAssignmentV1apiclientsassignments(apiClientAssignment, callback);
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

<a name="saveV1apiclientsapiClientID"></a>
# **saveV1apiclientsapiClientID**
> ApiClient saveV1apiclientsapiClientID(apiClientID, apiClient)



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
apiInstance.saveV1apiclientsapiClientID(apiClientID, apiClient, callback);
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

