# OrderCloud.SupplierUserApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1supplierssupplierIDusers**](SupplierUserApi.md#createV1supplierssupplierIDusers) | **POST** /suppliers/{supplierID}/users | 
[**deleteV1supplierssupplierIDusersuserID**](SupplierUserApi.md#deleteV1supplierssupplierIDusersuserID) | **DELETE** /suppliers/{supplierID}/users/{userID} | 
[**getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken**](SupplierUserApi.md#getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken) | **POST** /suppliers/{supplierID}/users/{userID}/accesstoken | 
[**getV1supplierssupplierIDusersuserID**](SupplierUserApi.md#getV1supplierssupplierIDusersuserID) | **GET** /suppliers/{supplierID}/users/{userID} | 
[**listV1supplierssupplierIDusers**](SupplierUserApi.md#listV1supplierssupplierIDusers) | **GET** /suppliers/{supplierID}/users | 
[**patchV1supplierssupplierIDusersuserID**](SupplierUserApi.md#patchV1supplierssupplierIDusersuserID) | **PATCH** /suppliers/{supplierID}/users/{userID} | 
[**saveV1supplierssupplierIDusersuserID**](SupplierUserApi.md#saveV1supplierssupplierIDusersuserID) | **PUT** /suppliers/{supplierID}/users/{userID} | 


<a name="createV1supplierssupplierIDusers"></a>
# **createV1supplierssupplierIDusers**
> User createV1supplierssupplierIDusers(supplierID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1supplierssupplierIDusers(supplierID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1supplierssupplierIDusersuserID"></a>
# **deleteV1supplierssupplierIDusersuserID**
> deleteV1supplierssupplierIDusersuserID(supplierID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1supplierssupplierIDusersuserID(supplierID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken"></a>
# **getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken**
> AccessToken getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken(supplierID, userID, impersonateTokenRequest)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userID = "userID_example"; // String | ID of the user.
var impersonateTokenRequest = new OrderCloud.ImpersonateTokenRequest(); // ImpersonateTokenRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken(supplierID, userID, impersonateTokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **impersonateTokenRequest** | [**ImpersonateTokenRequest**](ImpersonateTokenRequest.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getV1supplierssupplierIDusersuserID"></a>
# **getV1supplierssupplierIDusersuserID**
> User getV1supplierssupplierIDusersuserID(supplierID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1supplierssupplierIDusersuserID(supplierID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1supplierssupplierIDusers"></a>
# **listV1supplierssupplierIDusers**
> ListUser listV1supplierssupplierIDusers(supplierID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var opts = {
  'userGroupID': "userGroupID_example", // String | ID of the user group.
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
apiInstance.listV1supplierssupplierIDusers(supplierID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | [optional] 
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

<a name="patchV1supplierssupplierIDusersuserID"></a>
# **patchV1supplierssupplierIDusersuserID**
> User patchV1supplierssupplierIDusersuserID(supplierID, userID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userID = "userID_example"; // String | ID of the user.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1supplierssupplierIDusersuserID(supplierID, userID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1supplierssupplierIDusersuserID"></a>
# **saveV1supplierssupplierIDusersuserID**
> User saveV1supplierssupplierIDusersuserID(supplierID, userID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userID = "userID_example"; // String | ID of the user.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1supplierssupplierIDusersuserID(supplierID, userID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

