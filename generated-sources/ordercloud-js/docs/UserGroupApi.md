# OrderCloud.UserGroupApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDusergroups**](UserGroupApi.md#createV1buyersbuyerIDusergroups) | **POST** /buyers/{buyerID}/usergroups | 
[**deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID**](UserGroupApi.md#deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID}/assignments/{userID} | 
[**deleteV1buyersbuyerIDusergroupsuserGroupID**](UserGroupApi.md#deleteV1buyersbuyerIDusergroupsuserGroupID) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**getV1buyersbuyerIDusergroupsuserGroupID**](UserGroupApi.md#getV1buyersbuyerIDusergroupsuserGroupID) | **GET** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**listUserAssignmentsV1buyersbuyerIDusergroupsassignments**](UserGroupApi.md#listUserAssignmentsV1buyersbuyerIDusergroupsassignments) | **GET** /buyers/{buyerID}/usergroups/assignments | 
[**listV1buyersbuyerIDusergroups**](UserGroupApi.md#listV1buyersbuyerIDusergroups) | **GET** /buyers/{buyerID}/usergroups | 
[**patchV1buyersbuyerIDusergroupsuserGroupID**](UserGroupApi.md#patchV1buyersbuyerIDusergroupsuserGroupID) | **PATCH** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**saveUserAssignmentV1buyersbuyerIDusergroupsassignments**](UserGroupApi.md#saveUserAssignmentV1buyersbuyerIDusergroupsassignments) | **POST** /buyers/{buyerID}/usergroups/assignments | 
[**saveV1buyersbuyerIDusergroupsuserGroupID**](UserGroupApi.md#saveV1buyersbuyerIDusergroupsuserGroupID) | **PUT** /buyers/{buyerID}/usergroups/{userGroupID} | 


<a name="createV1buyersbuyerIDusergroups"></a>
# **createV1buyersbuyerIDusergroups**
> UserGroup createV1buyersbuyerIDusergroups(buyerID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDusergroups(buyerID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID"></a>
# **deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID**
> deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID(buyerID, userGroupID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID(buyerID, userGroupID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1buyersbuyerIDusergroupsuserGroupID"></a>
# **deleteV1buyersbuyerIDusergroupsuserGroupID**
> deleteV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1buyersbuyerIDusergroupsuserGroupID"></a>
# **getV1buyersbuyerIDusergroupsuserGroupID**
> UserGroup getV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserAssignmentsV1buyersbuyerIDusergroupsassignments"></a>
# **listUserAssignmentsV1buyersbuyerIDusergroupsassignments**
> ListUserGroupAssignment listUserAssignmentsV1buyersbuyerIDusergroupsassignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var opts = {
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'userID': "userID_example", // String | ID of the user.
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
apiInstance.listUserAssignmentsV1buyersbuyerIDusergroupsassignments(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListUserGroupAssignment**](ListUserGroupAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDusergroups"></a>
# **listV1buyersbuyerIDusergroups**
> ListUserGroup listV1buyersbuyerIDusergroups(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
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
apiInstance.listV1buyersbuyerIDusergroups(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListUserGroup**](ListUserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDusergroupsuserGroupID"></a>
# **patchV1buyersbuyerIDusergroupsuserGroupID**
> UserGroup patchV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUserAssignmentV1buyersbuyerIDusergroupsassignments"></a>
# **saveUserAssignmentV1buyersbuyerIDusergroupsassignments**
> saveUserAssignmentV1buyersbuyerIDusergroupsassignments(buyerID, userGroupAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupAssignment = new OrderCloud.UserGroupAssignment(); // UserGroupAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUserAssignmentV1buyersbuyerIDusergroupsassignments(buyerID, userGroupAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupAssignment** | [**UserGroupAssignment**](UserGroupAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1buyersbuyerIDusergroupsuserGroupID"></a>
# **saveV1buyersbuyerIDusergroupsuserGroupID**
> UserGroup saveV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroupApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDusergroupsuserGroupID(buyerID, userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

