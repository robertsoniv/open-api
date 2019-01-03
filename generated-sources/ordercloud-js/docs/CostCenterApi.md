# OrderCloud.CostCenterApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCostCenters**](CostCenterApi.md#createCostCenters) | **POST** /buyers/{buyerID}/costcenters | 
[**deleteAssignmentCostCenters**](CostCenterApi.md#deleteAssignmentCostCenters) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID}/assignments | 
[**deleteCostCenters**](CostCenterApi.md#deleteCostCenters) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**getCostCenters**](CostCenterApi.md#getCostCenters) | **GET** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**listAssignmentsCostCenters**](CostCenterApi.md#listAssignmentsCostCenters) | **GET** /buyers/{buyerID}/costcenters/assignments | 
[**listCostCenters**](CostCenterApi.md#listCostCenters) | **GET** /buyers/{buyerID}/costcenters | 
[**patchCostCenters**](CostCenterApi.md#patchCostCenters) | **PATCH** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**saveAssignmentCostCenters**](CostCenterApi.md#saveAssignmentCostCenters) | **POST** /buyers/{buyerID}/costcenters/assignments | 
[**saveCostCenters**](CostCenterApi.md#saveCostCenters) | **PUT** /buyers/{buyerID}/costcenters/{costCenterID} | 


<a name="createCostCenters"></a>
# **createCostCenters**
> CostCenter createCostCenters(buyerID, costCenter)



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
apiInstance.createCostCenters(buyerID, costCenter, callback);
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

<a name="deleteAssignmentCostCenters"></a>
# **deleteAssignmentCostCenters**
> deleteAssignmentCostCenters(buyerID, costCenterID, opts)



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
apiInstance.deleteAssignmentCostCenters(buyerID, costCenterID, opts, callback);
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

<a name="deleteCostCenters"></a>
# **deleteCostCenters**
> deleteCostCenters(buyerID, costCenterID)



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
apiInstance.deleteCostCenters(buyerID, costCenterID, callback);
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

<a name="getCostCenters"></a>
# **getCostCenters**
> CostCenter getCostCenters(buyerID, costCenterID)



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
apiInstance.getCostCenters(buyerID, costCenterID, callback);
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

<a name="listAssignmentsCostCenters"></a>
# **listAssignmentsCostCenters**
> ListCostCenterAssignment listAssignmentsCostCenters(buyerID, opts)



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
apiInstance.listAssignmentsCostCenters(buyerID, opts, callback);
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

<a name="listCostCenters"></a>
# **listCostCenters**
> ListCostCenter listCostCenters(buyerID, opts)



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
apiInstance.listCostCenters(buyerID, opts, callback);
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

<a name="patchCostCenters"></a>
# **patchCostCenters**
> CostCenter patchCostCenters(buyerID, costCenterID, costCenter)



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
apiInstance.patchCostCenters(buyerID, costCenterID, costCenter, callback);
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

<a name="saveAssignmentCostCenters"></a>
# **saveAssignmentCostCenters**
> saveAssignmentCostCenters(buyerID, costCenterAssignment)



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
apiInstance.saveAssignmentCostCenters(buyerID, costCenterAssignment, callback);
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

<a name="saveCostCenters"></a>
# **saveCostCenters**
> CostCenter saveCostCenters(buyerID, costCenterID, costCenter)



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
apiInstance.saveCostCenters(buyerID, costCenterID, costCenter, callback);
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

