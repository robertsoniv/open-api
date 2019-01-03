# OrderCloud.ApprovalRuleApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApprovalRules**](ApprovalRuleApi.md#createApprovalRules) | **POST** /buyers/{buyerID}/approvalrules | 
[**deleteApprovalRules**](ApprovalRuleApi.md#deleteApprovalRules) | **DELETE** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**getApprovalRules**](ApprovalRuleApi.md#getApprovalRules) | **GET** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**listApprovalRules**](ApprovalRuleApi.md#listApprovalRules) | **GET** /buyers/{buyerID}/approvalrules | 
[**patchApprovalRules**](ApprovalRuleApi.md#patchApprovalRules) | **PATCH** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**saveApprovalRules**](ApprovalRuleApi.md#saveApprovalRules) | **PUT** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 


<a name="createApprovalRules"></a>
# **createApprovalRules**
> ApprovalRule createApprovalRules(buyerID, approvalRule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApprovalRules(buyerID, approvalRule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApprovalRules"></a>
# **deleteApprovalRules**
> deleteApprovalRules(buyerID, approvalRuleID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteApprovalRules(buyerID, approvalRuleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getApprovalRules"></a>
# **getApprovalRules**
> ApprovalRule getApprovalRules(buyerID, approvalRuleID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApprovalRules(buyerID, approvalRuleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApprovalRules"></a>
# **listApprovalRules**
> ListApprovalRule listApprovalRules(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
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
apiInstance.listApprovalRules(buyerID, opts, callback);
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

[**ListApprovalRule**](ListApprovalRule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchApprovalRules"></a>
# **patchApprovalRules**
> ApprovalRule patchApprovalRules(buyerID, approvalRuleID, approvalRule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.
var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchApprovalRules(buyerID, approvalRuleID, approvalRule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 
 **approvalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveApprovalRules"></a>
# **saveApprovalRules**
> ApprovalRule saveApprovalRules(buyerID, approvalRuleID, approvalRule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRuleApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.
var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveApprovalRules(buyerID, approvalRuleID, approvalRule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 
 **approvalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

