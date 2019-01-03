# OrderCloud.SpendingAccountApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpendingAccounts**](SpendingAccountApi.md#createSpendingAccounts) | **POST** /buyers/{buyerID}/spendingaccounts | 
[**deleteAssignmentSpendingAccounts**](SpendingAccountApi.md#deleteAssignmentSpendingAccounts) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments | 
[**deleteSpendingAccounts**](SpendingAccountApi.md#deleteSpendingAccounts) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**getSpendingAccounts**](SpendingAccountApi.md#getSpendingAccounts) | **GET** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**listAssignmentsSpendingAccounts**](SpendingAccountApi.md#listAssignmentsSpendingAccounts) | **GET** /buyers/{buyerID}/spendingaccounts/assignments | 
[**listSpendingAccounts**](SpendingAccountApi.md#listSpendingAccounts) | **GET** /buyers/{buyerID}/spendingaccounts | 
[**patchSpendingAccounts**](SpendingAccountApi.md#patchSpendingAccounts) | **PATCH** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**saveAssignmentSpendingAccounts**](SpendingAccountApi.md#saveAssignmentSpendingAccounts) | **POST** /buyers/{buyerID}/spendingaccounts/assignments | 
[**saveSpendingAccounts**](SpendingAccountApi.md#saveSpendingAccounts) | **PUT** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 


<a name="createSpendingAccounts"></a>
# **createSpendingAccounts**
> SpendingAccount createSpendingAccounts(buyerID, spendingAccount)



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
apiInstance.createSpendingAccounts(buyerID, spendingAccount, callback);
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

<a name="deleteAssignmentSpendingAccounts"></a>
# **deleteAssignmentSpendingAccounts**
> deleteAssignmentSpendingAccounts(buyerID, spendingAccountID, opts)



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
apiInstance.deleteAssignmentSpendingAccounts(buyerID, spendingAccountID, opts, callback);
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

<a name="deleteSpendingAccounts"></a>
# **deleteSpendingAccounts**
> deleteSpendingAccounts(buyerID, spendingAccountID)



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
apiInstance.deleteSpendingAccounts(buyerID, spendingAccountID, callback);
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

<a name="getSpendingAccounts"></a>
# **getSpendingAccounts**
> SpendingAccount getSpendingAccounts(buyerID, spendingAccountID)



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
apiInstance.getSpendingAccounts(buyerID, spendingAccountID, callback);
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

<a name="listAssignmentsSpendingAccounts"></a>
# **listAssignmentsSpendingAccounts**
> ListSpendingAccountAssignment listAssignmentsSpendingAccounts(buyerID, opts)



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
apiInstance.listAssignmentsSpendingAccounts(buyerID, opts, callback);
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

<a name="listSpendingAccounts"></a>
# **listSpendingAccounts**
> ListSpendingAccount listSpendingAccounts(buyerID, opts)



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
apiInstance.listSpendingAccounts(buyerID, opts, callback);
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

<a name="patchSpendingAccounts"></a>
# **patchSpendingAccounts**
> SpendingAccount patchSpendingAccounts(buyerID, spendingAccountID, spendingAccount)



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
apiInstance.patchSpendingAccounts(buyerID, spendingAccountID, spendingAccount, callback);
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

<a name="saveAssignmentSpendingAccounts"></a>
# **saveAssignmentSpendingAccounts**
> saveAssignmentSpendingAccounts(buyerID, spendingAccountAssignment)



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
apiInstance.saveAssignmentSpendingAccounts(buyerID, spendingAccountAssignment, callback);
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

<a name="saveSpendingAccounts"></a>
# **saveSpendingAccounts**
> SpendingAccount saveSpendingAccounts(buyerID, spendingAccountID, spendingAccount)



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
apiInstance.saveSpendingAccounts(buyerID, spendingAccountID, spendingAccount, callback);
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

