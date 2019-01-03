# OrderCloud.CostCenterApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDcostcenters**](CostCenterApi.md#createV1buyersbuyerIDcostcenters) | **POST** /buyers/{buyerID}/costcenters | 
[**deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments**](CostCenterApi.md#deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID}/assignments | 
[**deleteV1buyersbuyerIDcostcenterscostCenterID**](CostCenterApi.md#deleteV1buyersbuyerIDcostcenterscostCenterID) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**getV1buyersbuyerIDcostcenterscostCenterID**](CostCenterApi.md#getV1buyersbuyerIDcostcenterscostCenterID) | **GET** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**listAssignmentsV1buyersbuyerIDcostcentersassignments**](CostCenterApi.md#listAssignmentsV1buyersbuyerIDcostcentersassignments) | **GET** /buyers/{buyerID}/costcenters/assignments | 
[**listV1buyersbuyerIDcostcenters**](CostCenterApi.md#listV1buyersbuyerIDcostcenters) | **GET** /buyers/{buyerID}/costcenters | 
[**patchV1buyersbuyerIDcostcenterscostCenterID**](CostCenterApi.md#patchV1buyersbuyerIDcostcenterscostCenterID) | **PATCH** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**saveAssignmentV1buyersbuyerIDcostcentersassignments**](CostCenterApi.md#saveAssignmentV1buyersbuyerIDcostcentersassignments) | **POST** /buyers/{buyerID}/costcenters/assignments | 
[**saveV1buyersbuyerIDcostcenterscostCenterID**](CostCenterApi.md#saveV1buyersbuyerIDcostcenterscostCenterID) | **PUT** /buyers/{buyerID}/costcenters/{costCenterID} | 


<a name="createV1buyersbuyerIDcostcenters"></a>
# **createV1buyersbuyerIDcostcenters**
> CostCenter createV1buyersbuyerIDcostcenters(buyerID, costCenter)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenter = new OrderCloud.CostCenter(); // CostCenter | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDcostcenters(buyerID, costCenter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments"></a>
# **deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments**
> deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments(buyerID, costCenterID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterID = "costCenterID_example"; // String | ID of the cost center.
var opts = {
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAssignmentV1buyersbuyerIDcostcenterscostCenterIDassignments(buyerID, costCenterID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1buyersbuyerIDcostcenterscostCenterID"></a>
# **deleteV1buyersbuyerIDcostcenterscostCenterID**
> deleteV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterID = "costCenterID_example"; // String | ID of the cost center.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1buyersbuyerIDcostcenterscostCenterID"></a>
# **getV1buyersbuyerIDcostcenterscostCenterID**
> CostCenter getV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterID = "costCenterID_example"; // String | ID of the cost center.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1buyersbuyerIDcostcentersassignments"></a>
# **listAssignmentsV1buyersbuyerIDcostcentersassignments**
> ListCostCenterAssignment listAssignmentsV1buyersbuyerIDcostcentersassignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var opts = {
  'costCenterID': "costCenterID_example", // String | ID of the cost center.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the cost center assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1buyersbuyerIDcostcentersassignments(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the cost center assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCostCenterAssignment**](ListCostCenterAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDcostcenters"></a>
# **listV1buyersbuyerIDcostcenters**
> ListCostCenter listV1buyersbuyerIDcostcenters(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
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
apiInstance.listV1buyersbuyerIDcostcenters(buyerID, opts, callback);
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

[**ListCostCenter**](ListCostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDcostcenterscostCenterID"></a>
# **patchV1buyersbuyerIDcostcenterscostCenterID**
> CostCenter patchV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, costCenter)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterID = "costCenterID_example"; // String | ID of the cost center.
var costCenter = new OrderCloud.CostCenter(); // CostCenter | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, costCenter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1buyersbuyerIDcostcentersassignments"></a>
# **saveAssignmentV1buyersbuyerIDcostcentersassignments**
> saveAssignmentV1buyersbuyerIDcostcentersassignments(buyerID, costCenterAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterAssignment = new OrderCloud.CostCenterAssignment(); // CostCenterAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1buyersbuyerIDcostcentersassignments(buyerID, costCenterAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterAssignment** | [**CostCenterAssignment**](CostCenterAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1buyersbuyerIDcostcenterscostCenterID"></a>
# **saveV1buyersbuyerIDcostcenterscostCenterID**
> CostCenter saveV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, costCenter)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenterApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var costCenterID = "costCenterID_example"; // String | ID of the cost center.
var costCenter = new OrderCloud.CostCenter(); // CostCenter | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDcostcenterscostCenterID(buyerID, costCenterID, costCenter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

