# OrderCloud.UserApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDusers**](UserApi.md#createV1buyersbuyerIDusers) | **POST** /buyers/{buyerID}/users | 
[**deleteV1buyersbuyerIDusersuserID**](UserApi.md#deleteV1buyersbuyerIDusersuserID) | **DELETE** /buyers/{buyerID}/users/{userID} | 
[**getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken**](UserApi.md#getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken) | **POST** /buyers/{buyerID}/users/{userID}/accesstoken | 
[**getV1buyersbuyerIDusersuserID**](UserApi.md#getV1buyersbuyerIDusersuserID) | **GET** /buyers/{buyerID}/users/{userID} | 
[**listV1buyersbuyerIDusers**](UserApi.md#listV1buyersbuyerIDusers) | **GET** /buyers/{buyerID}/users | 
[**moveV1buyersbuyerIDusersuserIDmovetonewBuyerID**](UserApi.md#moveV1buyersbuyerIDusersuserIDmovetonewBuyerID) | **POST** /buyers/{buyerID}/users/{userID}/moveto/{newBuyerID} | 
[**patchV1buyersbuyerIDusersuserID**](UserApi.md#patchV1buyersbuyerIDusersuserID) | **PATCH** /buyers/{buyerID}/users/{userID} | 
[**saveV1buyersbuyerIDusersuserID**](UserApi.md#saveV1buyersbuyerIDusersuserID) | **PUT** /buyers/{buyerID}/users/{userID} | 


<a name="createV1buyersbuyerIDusers"></a>
# **createV1buyersbuyerIDusers**
> User createV1buyersbuyerIDusers(buyerID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDusers(buyerID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1buyersbuyerIDusersuserID"></a>
# **deleteV1buyersbuyerIDusersuserID**
> deleteV1buyersbuyerIDusersuserID(buyerID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDusersuserID(buyerID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken"></a>
# **getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken**
> AccessToken getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken(buyerID, userID, impersonateTokenRequest)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var impersonateTokenRequest = new OrderCloud.ImpersonateTokenRequest(); // ImpersonateTokenRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessTokenV1buyersbuyerIDusersuserIDaccesstoken(buyerID, userID, impersonateTokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 
 **impersonateTokenRequest** | [**ImpersonateTokenRequest**](ImpersonateTokenRequest.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getV1buyersbuyerIDusersuserID"></a>
# **getV1buyersbuyerIDusersuserID**
> User getV1buyersbuyerIDusersuserID(buyerID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDusersuserID(buyerID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDusers"></a>
# **listV1buyersbuyerIDusers**
> ListUser listV1buyersbuyerIDusers(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
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
apiInstance.listV1buyersbuyerIDusers(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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

<a name="moveV1buyersbuyerIDusersuserIDmovetonewBuyerID"></a>
# **moveV1buyersbuyerIDusersuserIDmovetonewBuyerID**
> User moveV1buyersbuyerIDusersuserIDmovetonewBuyerID(buyerID, userID, newBuyerID, orders)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var newBuyerID = "newBuyerID_example"; // String | ID of the new buyer.
var orders = "orders_example"; // String | Orders of the user. Possible values: None, Unsubmitted, All.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveV1buyersbuyerIDusersuserIDmovetonewBuyerID(buyerID, userID, newBuyerID, orders, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 
 **newBuyerID** | **String**| ID of the new buyer. | 
 **orders** | **String**| Orders of the user. Possible values: None, Unsubmitted, All. | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDusersuserID"></a>
# **patchV1buyersbuyerIDusersuserID**
> User patchV1buyersbuyerIDusersuserID(buyerID, userID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDusersuserID(buyerID, userID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1buyersbuyerIDusersuserID"></a>
# **saveV1buyersbuyerIDusersuserID**
> User saveV1buyersbuyerIDusersuserID(buyerID, userID, user)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userID = "userID_example"; // String | ID of the user.
var user = new OrderCloud.User(); // User | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDusersuserID(buyerID, userID, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

