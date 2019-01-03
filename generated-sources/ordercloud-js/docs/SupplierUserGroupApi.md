# OrderCloud.SupplierUserGroupApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplierUserGroups**](SupplierUserGroupApi.md#createSupplierUserGroups) | **POST** /suppliers/{supplierID}/usergroups | 
[**deleteSupplierUserGroups**](SupplierUserGroupApi.md#deleteSupplierUserGroups) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**deleteUserAssignmentSupplierUserGroups**](SupplierUserGroupApi.md#deleteUserAssignmentSupplierUserGroups) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID}/assignments/{userID} | 
[**getSupplierUserGroups**](SupplierUserGroupApi.md#getSupplierUserGroups) | **GET** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**listSupplierUserGroups**](SupplierUserGroupApi.md#listSupplierUserGroups) | **GET** /suppliers/{supplierID}/usergroups | 
[**listUserAssignmentsSupplierUserGroups**](SupplierUserGroupApi.md#listUserAssignmentsSupplierUserGroups) | **GET** /suppliers/{supplierID}/usergroups/assignments | 
[**patchSupplierUserGroups**](SupplierUserGroupApi.md#patchSupplierUserGroups) | **PATCH** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**saveSupplierUserGroups**](SupplierUserGroupApi.md#saveSupplierUserGroups) | **PUT** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**saveUserAssignmentSupplierUserGroups**](SupplierUserGroupApi.md#saveUserAssignmentSupplierUserGroups) | **POST** /suppliers/{supplierID}/usergroups/assignments | 


<a name="createSupplierUserGroups"></a>
# **createSupplierUserGroups**
> UserGroup createSupplierUserGroups(supplierID, userGroup)



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
apiInstance.createSupplierUserGroups(supplierID, userGroup, callback);
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

<a name="deleteSupplierUserGroups"></a>
# **deleteSupplierUserGroups**
> deleteSupplierUserGroups(supplierID, userGroupID)



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
apiInstance.deleteSupplierUserGroups(supplierID, userGroupID, callback);
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

<a name="deleteUserAssignmentSupplierUserGroups"></a>
# **deleteUserAssignmentSupplierUserGroups**
> deleteUserAssignmentSupplierUserGroups(supplierID, userGroupID, userID)



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
apiInstance.deleteUserAssignmentSupplierUserGroups(supplierID, userGroupID, userID, callback);
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

<a name="getSupplierUserGroups"></a>
# **getSupplierUserGroups**
> UserGroup getSupplierUserGroups(supplierID, userGroupID)



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
apiInstance.getSupplierUserGroups(supplierID, userGroupID, callback);
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

<a name="listSupplierUserGroups"></a>
# **listSupplierUserGroups**
> ListUserGroup listSupplierUserGroups(supplierID, opts)



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
apiInstance.listSupplierUserGroups(supplierID, opts, callback);
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

<a name="listUserAssignmentsSupplierUserGroups"></a>
# **listUserAssignmentsSupplierUserGroups**
> ListUserGroupAssignment listUserAssignmentsSupplierUserGroups(supplierID, opts)



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
apiInstance.listUserAssignmentsSupplierUserGroups(supplierID, opts, callback);
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

<a name="patchSupplierUserGroups"></a>
# **patchSupplierUserGroups**
> UserGroup patchSupplierUserGroups(supplierID, userGroupID, userGroup)



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
apiInstance.patchSupplierUserGroups(supplierID, userGroupID, userGroup, callback);
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

<a name="saveSupplierUserGroups"></a>
# **saveSupplierUserGroups**
> UserGroup saveSupplierUserGroups(supplierID, userGroupID, userGroup)



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
apiInstance.saveSupplierUserGroups(supplierID, userGroupID, userGroup, callback);
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

<a name="saveUserAssignmentSupplierUserGroups"></a>
# **saveUserAssignmentSupplierUserGroups**
> saveUserAssignmentSupplierUserGroups(supplierID, userGroupAssignment)



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
apiInstance.saveUserAssignmentSupplierUserGroups(supplierID, userGroupAssignment, callback);
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

