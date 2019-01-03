# OrderCloud.SupplierUserGroupApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1supplierssupplierIDusergroups**](SupplierUserGroupApi.md#createV1supplierssupplierIDusergroups) | **POST** /suppliers/{supplierID}/usergroups | 
[**deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID**](SupplierUserGroupApi.md#deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID}/assignments/{userID} | 
[**deleteV1supplierssupplierIDusergroupsuserGroupID**](SupplierUserGroupApi.md#deleteV1supplierssupplierIDusergroupsuserGroupID) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**getV1supplierssupplierIDusergroupsuserGroupID**](SupplierUserGroupApi.md#getV1supplierssupplierIDusergroupsuserGroupID) | **GET** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**listUserAssignmentsV1supplierssupplierIDusergroupsassignments**](SupplierUserGroupApi.md#listUserAssignmentsV1supplierssupplierIDusergroupsassignments) | **GET** /suppliers/{supplierID}/usergroups/assignments | 
[**listV1supplierssupplierIDusergroups**](SupplierUserGroupApi.md#listV1supplierssupplierIDusergroups) | **GET** /suppliers/{supplierID}/usergroups | 
[**patchV1supplierssupplierIDusergroupsuserGroupID**](SupplierUserGroupApi.md#patchV1supplierssupplierIDusergroupsuserGroupID) | **PATCH** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**saveUserAssignmentV1supplierssupplierIDusergroupsassignments**](SupplierUserGroupApi.md#saveUserAssignmentV1supplierssupplierIDusergroupsassignments) | **POST** /suppliers/{supplierID}/usergroups/assignments | 
[**saveV1supplierssupplierIDusergroupsuserGroupID**](SupplierUserGroupApi.md#saveV1supplierssupplierIDusergroupsuserGroupID) | **PUT** /suppliers/{supplierID}/usergroups/{userGroupID} | 


<a name="createV1supplierssupplierIDusergroups"></a>
# **createV1supplierssupplierIDusergroups**
> UserGroup createV1supplierssupplierIDusergroups(supplierID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1supplierssupplierIDusergroups(supplierID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID"></a>
# **deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID**
> deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID(supplierID, userGroupID, userID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userID = "userID_example"; // String | ID of the user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserAssignmentV1supplierssupplierIDusergroupsuserGroupIDassignmentsuserID(supplierID, userGroupID, userID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1supplierssupplierIDusergroupsuserGroupID"></a>
# **deleteV1supplierssupplierIDusergroupsuserGroupID**
> deleteV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1supplierssupplierIDusergroupsuserGroupID"></a>
# **getV1supplierssupplierIDusergroupsuserGroupID**
> UserGroup getV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserAssignmentsV1supplierssupplierIDusergroupsassignments"></a>
# **listUserAssignmentsV1supplierssupplierIDusergroupsassignments**
> ListUserGroupAssignment listUserAssignmentsV1supplierssupplierIDusergroupsassignments(supplierID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
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
apiInstance.listUserAssignmentsV1supplierssupplierIDusergroupsassignments(supplierID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
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

<a name="listV1supplierssupplierIDusergroups"></a>
# **listV1supplierssupplierIDusergroups**
> ListUserGroup listV1supplierssupplierIDusergroups(supplierID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
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
apiInstance.listV1supplierssupplierIDusergroups(supplierID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
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

<a name="patchV1supplierssupplierIDusergroupsuserGroupID"></a>
# **patchV1supplierssupplierIDusergroupsuserGroupID**
> UserGroup patchV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveUserAssignmentV1supplierssupplierIDusergroupsassignments"></a>
# **saveUserAssignmentV1supplierssupplierIDusergroupsassignments**
> saveUserAssignmentV1supplierssupplierIDusergroupsassignments(supplierID, userGroupAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupAssignment = new OrderCloud.UserGroupAssignment(); // UserGroupAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveUserAssignmentV1supplierssupplierIDusergroupsassignments(supplierID, userGroupAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupAssignment** | [**UserGroupAssignment**](UserGroupAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1supplierssupplierIDusergroupsuserGroupID"></a>
# **saveV1supplierssupplierIDusergroupsuserGroupID**
> UserGroup saveV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroupApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var userGroupID = "userGroupID_example"; // String | ID of the user group.
var userGroup = new OrderCloud.UserGroup(); // UserGroup | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1supplierssupplierIDusergroupsuserGroupID(supplierID, userGroupID, userGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

