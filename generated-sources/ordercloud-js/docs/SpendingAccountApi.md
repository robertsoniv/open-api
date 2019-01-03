# OrderCloud.SpendingAccountApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDspendingaccounts**](SpendingAccountApi.md#createV1buyersbuyerIDspendingaccounts) | **POST** /buyers/{buyerID}/spendingaccounts | 
[**deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments**](SpendingAccountApi.md#deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments | 
[**deleteV1buyersbuyerIDspendingaccountsspendingAccountID**](SpendingAccountApi.md#deleteV1buyersbuyerIDspendingaccountsspendingAccountID) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**getV1buyersbuyerIDspendingaccountsspendingAccountID**](SpendingAccountApi.md#getV1buyersbuyerIDspendingaccountsspendingAccountID) | **GET** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**listAssignmentsV1buyersbuyerIDspendingaccountsassignments**](SpendingAccountApi.md#listAssignmentsV1buyersbuyerIDspendingaccountsassignments) | **GET** /buyers/{buyerID}/spendingaccounts/assignments | 
[**listV1buyersbuyerIDspendingaccounts**](SpendingAccountApi.md#listV1buyersbuyerIDspendingaccounts) | **GET** /buyers/{buyerID}/spendingaccounts | 
[**patchV1buyersbuyerIDspendingaccountsspendingAccountID**](SpendingAccountApi.md#patchV1buyersbuyerIDspendingaccountsspendingAccountID) | **PATCH** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**saveAssignmentV1buyersbuyerIDspendingaccountsassignments**](SpendingAccountApi.md#saveAssignmentV1buyersbuyerIDspendingaccountsassignments) | **POST** /buyers/{buyerID}/spendingaccounts/assignments | 
[**saveV1buyersbuyerIDspendingaccountsspendingAccountID**](SpendingAccountApi.md#saveV1buyersbuyerIDspendingaccountsspendingAccountID) | **PUT** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 


<a name="createV1buyersbuyerIDspendingaccounts"></a>
# **createV1buyersbuyerIDspendingaccounts**
> SpendingAccount createV1buyersbuyerIDspendingaccounts(buyerID, spendingAccount)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDspendingaccounts(buyerID, spendingAccount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments"></a>
# **deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments**
> deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments(buyerID, spendingAccountID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
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
apiInstance.deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments(buyerID, spendingAccountID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1buyersbuyerIDspendingaccountsspendingAccountID"></a>
# **deleteV1buyersbuyerIDspendingaccountsspendingAccountID**
> deleteV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1buyersbuyerIDspendingaccountsspendingAccountID"></a>
# **getV1buyersbuyerIDspendingaccountsspendingAccountID**
> SpendingAccount getV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1buyersbuyerIDspendingaccountsassignments"></a>
# **listAssignmentsV1buyersbuyerIDspendingaccountsassignments**
> ListSpendingAccountAssignment listAssignmentsV1buyersbuyerIDspendingaccountsassignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var opts = {
  'spendingAccountID': "spendingAccountID_example", // String | ID of the spending account.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the spending account assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1buyersbuyerIDspendingaccountsassignments(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the spending account assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListSpendingAccountAssignment**](ListSpendingAccountAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDspendingaccounts"></a>
# **listV1buyersbuyerIDspendingaccounts**
> ListSpendingAccount listV1buyersbuyerIDspendingaccounts(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
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
apiInstance.listV1buyersbuyerIDspendingaccounts(buyerID, opts, callback);
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

[**ListSpendingAccount**](ListSpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDspendingaccountsspendingAccountID"></a>
# **patchV1buyersbuyerIDspendingaccountsspendingAccountID**
> SpendingAccount patchV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, spendingAccount)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, spendingAccount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
 **spendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1buyersbuyerIDspendingaccountsassignments"></a>
# **saveAssignmentV1buyersbuyerIDspendingaccountsassignments**
> saveAssignmentV1buyersbuyerIDspendingaccountsassignments(buyerID, spendingAccountAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountAssignment = new OrderCloud.SpendingAccountAssignment(); // SpendingAccountAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1buyersbuyerIDspendingaccountsassignments(buyerID, spendingAccountAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountAssignment** | [**SpendingAccountAssignment**](SpendingAccountAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1buyersbuyerIDspendingaccountsspendingAccountID"></a>
# **saveV1buyersbuyerIDspendingaccountsspendingAccountID**
> SpendingAccount saveV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, spendingAccount)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccountApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDspendingaccountsspendingAccountID(buyerID, spendingAccountID, spendingAccount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
 **spendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

