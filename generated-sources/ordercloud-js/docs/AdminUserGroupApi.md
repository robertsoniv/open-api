# OrderCloud.AdminUserGroupApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1usergroups**](AdminUserGroupApi.md#createV1usergroups) | **POST** /usergroups | 
[**deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID**](AdminUserGroupApi.md#deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID) | **DELETE** /usergroups/{userGroupID}/assignments/{userID} | 
[**deleteV1usergroupsuserGroupID**](AdminUserGroupApi.md#deleteV1usergroupsuserGroupID) | **DELETE** /usergroups/{userGroupID} | 
[**getV1usergroupsuserGroupID**](AdminUserGroupApi.md#getV1usergroupsuserGroupID) | **GET** /usergroups/{userGroupID} | 
[**listUserAssignmentsV1usergroupsassignments**](AdminUserGroupApi.md#listUserAssignmentsV1usergroupsassignments) | **GET** /usergroups/assignments | 
[**listV1usergroups**](AdminUserGroupApi.md#listV1usergroups) | **GET** /usergroups | 
[**patchV1usergroupsuserGroupID**](AdminUserGroupApi.md#patchV1usergroupsuserGroupID) | **PATCH** /usergroups/{userGroupID} | 
[**saveUserAssignmentV1usergroupsassignments**](AdminUserGroupApi.md#saveUserAssignmentV1usergroupsassignments) | **POST** /usergroups/assignments | 
[**saveV1usergroupsuserGroupID**](AdminUserGroupApi.md#saveV1usergroupsuserGroupID) | **PUT** /usergroups/{userGroupID} | 


<a name="createV1usergroups"></a>
# **createV1usergroups**
> UserGroup createV1usergroups(userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1usergroups(userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID"></a>
# **deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID**
> deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID(userGroupID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserAssignmentV1usergroupsuserGroupIDassignmentsuserID(userGroupID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupID** | **String**| ID of the user group. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1usergroupsuserGroupID"></a>
# **deleteV1usergroupsuserGroupID**
> deleteV1usergroupsuserGroupID(userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1usergroupsuserGroupID(userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupID** | **String**| ID of the user group. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1usergroupsuserGroupID"></a>
# **getV1usergroupsuserGroupID**
> UserGroup getV1usergroupsuserGroupID(userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1usergroupsuserGroupID(userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupID** | **String**| ID of the user group. | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserAssignmentsV1usergroupsassignments"></a>
# **listUserAssignmentsV1usergroupsassignments**
> ListUserGroupAssignment listUserAssignmentsV1usergroupsassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
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
apiInstance.listUserAssignmentsV1usergroupsassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="listV1usergroups"></a>
# **listV1usergroups**
> ListUserGroup listV1usergroups(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
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
apiInstance.listV1usergroups(opts, callback);
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

[**ListUserGroup**](ListUserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1usergroupsuserGroupID"></a>
# **patchV1usergroupsuserGroupID**
> UserGroup patchV1usergroupsuserGroupID(userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1usergroupsuserGroupID(userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUserAssignmentV1usergroupsassignments"></a>
# **saveUserAssignmentV1usergroupsassignments**
> saveUserAssignmentV1usergroupsassignments(userGroupAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupAssignment = new OrderCloud.UserGroupAssignment(); // UserGroupAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUserAssignmentV1usergroupsassignments(userGroupAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupAssignment** | [**UserGroupAssignment**](UserGroupAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1usergroupsuserGroupID"></a>
# **saveV1usergroupsuserGroupID**
> UserGroup saveV1usergroupsuserGroupID(userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AdminUserGroupApi();
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1usergroupsuserGroupID(userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

