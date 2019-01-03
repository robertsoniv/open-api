# OrderCloud.CreditCardApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCreditCards**](CreditCardApi.md#createCreditCards) | **POST** /buyers/{buyerID}/creditcards | 
[**deleteAssignmentCreditCards**](CreditCardApi.md#deleteAssignmentCreditCards) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID}/assignments | 
[**deleteCreditCards**](CreditCardApi.md#deleteCreditCards) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**getCreditCards**](CreditCardApi.md#getCreditCards) | **GET** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**listAssignmentsCreditCards**](CreditCardApi.md#listAssignmentsCreditCards) | **GET** /buyers/{buyerID}/creditcards/assignments | 
[**listCreditCards**](CreditCardApi.md#listCreditCards) | **GET** /buyers/{buyerID}/creditcards | 
[**patchCreditCards**](CreditCardApi.md#patchCreditCards) | **PATCH** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**saveAssignmentCreditCards**](CreditCardApi.md#saveAssignmentCreditCards) | **POST** /buyers/{buyerID}/creditcards/assignments | 
[**saveCreditCards**](CreditCardApi.md#saveCreditCards) | **PUT** /buyers/{buyerID}/creditcards/{creditCardID} | 


<a name="createCreditCards"></a>
# **createCreditCards**
> CreditCard createCreditCards(buyerID, creditCard)



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
apiInstance.createCreditCards(buyerID, creditCard, callback);
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

<a name="deleteAssignmentCreditCards"></a>
# **deleteAssignmentCreditCards**
> deleteAssignmentCreditCards(buyerID, creditCardID, opts)



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
apiInstance.deleteAssignmentCreditCards(buyerID, creditCardID, opts, callback);
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

<a name="deleteCreditCards"></a>
# **deleteCreditCards**
> deleteCreditCards(buyerID, creditCardID)



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
apiInstance.deleteCreditCards(buyerID, creditCardID, callback);
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

<a name="getCreditCards"></a>
# **getCreditCards**
> CreditCard getCreditCards(buyerID, creditCardID)



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
apiInstance.getCreditCards(buyerID, creditCardID, callback);
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

<a name="listAssignmentsCreditCards"></a>
# **listAssignmentsCreditCards**
> ListCreditCardAssignment listAssignmentsCreditCards(buyerID, opts)



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
apiInstance.listAssignmentsCreditCards(buyerID, opts, callback);
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

<a name="listCreditCards"></a>
# **listCreditCards**
> ListCreditCard listCreditCards(buyerID, opts)



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
apiInstance.listCreditCards(buyerID, opts, callback);
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

<a name="patchCreditCards"></a>
# **patchCreditCards**
> CreditCard patchCreditCards(buyerID, creditCardID, creditCard)



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
apiInstance.patchCreditCards(buyerID, creditCardID, creditCard, callback);
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

<a name="saveAssignmentCreditCards"></a>
# **saveAssignmentCreditCards**
> saveAssignmentCreditCards(buyerID, creditCardAssignment)



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
apiInstance.saveAssignmentCreditCards(buyerID, creditCardAssignment, callback);
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

<a name="saveCreditCards"></a>
# **saveCreditCards**
> CreditCard saveCreditCards(buyerID, creditCardID, creditCard)



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
apiInstance.saveCreditCards(buyerID, creditCardID, creditCard, callback);
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

