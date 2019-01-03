# OrderCloud.CreditCardApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDcreditcards**](CreditCardApi.md#createV1buyersbuyerIDcreditcards) | **POST** /buyers/{buyerID}/creditcards | 
[**deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments**](CreditCardApi.md#deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID}/assignments | 
[**deleteV1buyersbuyerIDcreditcardscreditCardID**](CreditCardApi.md#deleteV1buyersbuyerIDcreditcardscreditCardID) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**getV1buyersbuyerIDcreditcardscreditCardID**](CreditCardApi.md#getV1buyersbuyerIDcreditcardscreditCardID) | **GET** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**listAssignmentsV1buyersbuyerIDcreditcardsassignments**](CreditCardApi.md#listAssignmentsV1buyersbuyerIDcreditcardsassignments) | **GET** /buyers/{buyerID}/creditcards/assignments | 
[**listV1buyersbuyerIDcreditcards**](CreditCardApi.md#listV1buyersbuyerIDcreditcards) | **GET** /buyers/{buyerID}/creditcards | 
[**patchV1buyersbuyerIDcreditcardscreditCardID**](CreditCardApi.md#patchV1buyersbuyerIDcreditcardscreditCardID) | **PATCH** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**saveAssignmentV1buyersbuyerIDcreditcardsassignments**](CreditCardApi.md#saveAssignmentV1buyersbuyerIDcreditcardsassignments) | **POST** /buyers/{buyerID}/creditcards/assignments | 
[**saveV1buyersbuyerIDcreditcardscreditCardID**](CreditCardApi.md#saveV1buyersbuyerIDcreditcardscreditCardID) | **PUT** /buyers/{buyerID}/creditcards/{creditCardID} | 


<a name="createV1buyersbuyerIDcreditcards"></a>
# **createV1buyersbuyerIDcreditcards**
> CreditCard createV1buyersbuyerIDcreditcards(buyerID, creditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCard = new OrderCloud.CreditCard(); // CreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDcreditcards(buyerID, creditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments"></a>
# **deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments**
> deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments(buyerID, creditCardID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardID = "creditCardID_example"; // String | ID of the credit card.
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
apiInstance.deleteAssignmentV1buyersbuyerIDcreditcardscreditCardIDassignments(buyerID, creditCardID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1buyersbuyerIDcreditcardscreditCardID"></a>
# **deleteV1buyersbuyerIDcreditcardscreditCardID**
> deleteV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardID = "creditCardID_example"; // String | ID of the credit card.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1buyersbuyerIDcreditcardscreditCardID"></a>
# **getV1buyersbuyerIDcreditcardscreditCardID**
> CreditCard getV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardID = "creditCardID_example"; // String | ID of the credit card.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1buyersbuyerIDcreditcardsassignments"></a>
# **listAssignmentsV1buyersbuyerIDcreditcardsassignments**
> ListCreditCardAssignment listAssignmentsV1buyersbuyerIDcreditcardsassignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var opts = {
  'creditCardID': "creditCardID_example", // String | ID of the credit card.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the credit card assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1buyersbuyerIDcreditcardsassignments(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the credit card assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCreditCardAssignment**](ListCreditCardAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDcreditcards"></a>
# **listV1buyersbuyerIDcreditcards**
> ListCreditCard listV1buyersbuyerIDcreditcards(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
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
apiInstance.listV1buyersbuyerIDcreditcards(buyerID, opts, callback);
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

[**ListCreditCard**](ListCreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDcreditcardscreditCardID"></a>
# **patchV1buyersbuyerIDcreditcardscreditCardID**
> CreditCard patchV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, creditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardID = "creditCardID_example"; // String | ID of the credit card.
var creditCard = new OrderCloud.CreditCard(); // CreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, creditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1buyersbuyerIDcreditcardsassignments"></a>
# **saveAssignmentV1buyersbuyerIDcreditcardsassignments**
> saveAssignmentV1buyersbuyerIDcreditcardsassignments(buyerID, creditCardAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardAssignment = new OrderCloud.CreditCardAssignment(); // CreditCardAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1buyersbuyerIDcreditcardsassignments(buyerID, creditCardAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardAssignment** | [**CreditCardAssignment**](CreditCardAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1buyersbuyerIDcreditcardscreditCardID"></a>
# **saveV1buyersbuyerIDcreditcardscreditCardID**
> CreditCard saveV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, creditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCardApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var creditCardID = "creditCardID_example"; // String | ID of the credit card.
var creditCard = new OrderCloud.CreditCard(); // CreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDcreditcardscreditCardID(buyerID, creditCardID, creditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

