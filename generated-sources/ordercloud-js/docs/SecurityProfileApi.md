# OrderCloud.SecurityProfileApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAssignmentV1securityprofilessecurityProfileIDassignments**](SecurityProfileApi.md#deleteAssignmentV1securityprofilessecurityProfileIDassignments) | **DELETE** /securityprofiles/{securityProfileID}/assignments | 
[**getV1securityprofilessecurityProfileID**](SecurityProfileApi.md#getV1securityprofilessecurityProfileID) | **GET** /securityprofiles/{securityProfileID} | 
[**listAssignmentsV1securityprofilesassignments**](SecurityProfileApi.md#listAssignmentsV1securityprofilesassignments) | **GET** /securityprofiles/assignments | 
[**listV1securityprofiles**](SecurityProfileApi.md#listV1securityprofiles) | **GET** /securityprofiles | 
[**saveAssignmentV1securityprofilesassignments**](SecurityProfileApi.md#saveAssignmentV1securityprofilesassignments) | **POST** /securityprofiles/assignments | 


<a name="deleteAssignmentV1securityprofilessecurityProfileIDassignments"></a>
# **deleteAssignmentV1securityprofilessecurityProfileIDassignments**
> deleteAssignmentV1securityprofilessecurityProfileIDassignments(securityProfileID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfileApi();
var securityProfileID = "securityProfileID_example"; // String | ID of the security profile.
var opts = {
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'supplierID': "supplierID_example" // String | ID of the supplier.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAssignmentV1securityprofilessecurityProfileIDassignments(securityProfileID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityProfileID** | **String**| ID of the security profile. | 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1securityprofilessecurityProfileID"></a>
# **getV1securityprofilessecurityProfileID**
> SecurityProfile getV1securityprofilessecurityProfileID(securityProfileID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfileApi();
var securityProfileID = "securityProfileID_example"; // String | ID of the security profile.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1securityprofilessecurityProfileID(securityProfileID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityProfileID** | **String**| ID of the security profile. | 

### Return type

[**SecurityProfile**](SecurityProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1securityprofilesassignments"></a>
# **listAssignmentsV1securityprofilesassignments**
> ListSecurityProfileAssignment listAssignmentsV1securityprofilesassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfileApi();
var opts = {
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'securityProfileID': "securityProfileID_example", // String | ID of the security profile.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'commerceRole': "commerceRole_example", // String | Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
  'level': "level_example", // String | Level of the security profile assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1securityprofilesassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **securityProfileID** | **String**| ID of the security profile. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **commerceRole** | **String**| Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier. | [optional] 
 **level** | **String**| Level of the security profile assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListSecurityProfileAssignment**](ListSecurityProfileAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1securityprofiles"></a>
# **listV1securityprofiles**
> ListSecurityProfile listV1securityprofiles(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfileApi();
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
apiInstance.listV1securityprofiles(opts, callback);
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

[**ListSecurityProfile**](ListSecurityProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveAssignmentV1securityprofilesassignments"></a>
# **saveAssignmentV1securityprofilesassignments**
> saveAssignmentV1securityprofilesassignments(securityProfileAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfileApi();
var securityProfileAssignment = new OrderCloud.SecurityProfileAssignment(); // SecurityProfileAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1securityprofilesassignments(securityProfileAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityProfileAssignment** | [**SecurityProfileAssignment**](SecurityProfileAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

