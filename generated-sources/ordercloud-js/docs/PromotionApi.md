# OrderCloud.PromotionApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1promotions**](PromotionApi.md#createV1promotions) | **POST** /promotions | 
[**deleteAssignmentV1promotionspromotionIDassignments**](PromotionApi.md#deleteAssignmentV1promotionspromotionIDassignments) | **DELETE** /promotions/{promotionID}/assignments | 
[**deleteV1promotionspromotionID**](PromotionApi.md#deleteV1promotionspromotionID) | **DELETE** /promotions/{promotionID} | 
[**getV1promotionspromotionID**](PromotionApi.md#getV1promotionspromotionID) | **GET** /promotions/{promotionID} | 
[**listAssignmentsV1promotionsassignments**](PromotionApi.md#listAssignmentsV1promotionsassignments) | **GET** /promotions/assignments | 
[**listV1promotions**](PromotionApi.md#listV1promotions) | **GET** /promotions | 
[**patchV1promotionspromotionID**](PromotionApi.md#patchV1promotionspromotionID) | **PATCH** /promotions/{promotionID} | 
[**saveAssignmentV1promotionsassignments**](PromotionApi.md#saveAssignmentV1promotionsassignments) | **POST** /promotions/assignments | 
[**saveV1promotionspromotionID**](PromotionApi.md#saveV1promotionspromotionID) | **PUT** /promotions/{promotionID} | 


<a name="createV1promotions"></a>
# **createV1promotions**
> Promotion createV1promotions(promotion)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotion = new OrderCloud.Promotion(); // Promotion | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1promotions(promotion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotion** | [**Promotion**](Promotion.md)|  | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1promotionspromotionIDassignments"></a>
# **deleteAssignmentV1promotionspromotionIDassignments**
> deleteAssignmentV1promotionspromotionIDassignments(promotionID, buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var buyerID = "buyerID_example"; // String | ID of the buyer.
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
apiInstance.deleteAssignmentV1promotionspromotionIDassignments(promotionID, buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1promotionspromotionID"></a>
# **deleteV1promotionspromotionID**
> deleteV1promotionspromotionID(promotionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1promotionspromotionID(promotionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1promotionspromotionID"></a>
# **getV1promotionspromotionID**
> Promotion getV1promotionspromotionID(promotionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1promotionspromotionID(promotionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1promotionsassignments"></a>
# **listAssignmentsV1promotionsassignments**
> ListPromotionAssignment listAssignmentsV1promotionsassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var opts = {
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'promotionID': "promotionID_example", // String | ID of the promotion.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the promotion assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1promotionsassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **promotionID** | **String**| ID of the promotion. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the promotion assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListPromotionAssignment**](ListPromotionAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1promotions"></a>
# **listV1promotions**
> ListPromotion listV1promotions(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
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
apiInstance.listV1promotions(opts, callback);
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

[**ListPromotion**](ListPromotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1promotionspromotionID"></a>
# **patchV1promotionspromotionID**
> Promotion patchV1promotionspromotionID(promotionID, promotion)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var promotion = new OrderCloud.Promotion(); // Promotion | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1promotionspromotionID(promotionID, promotion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 
 **promotion** | [**Promotion**](Promotion.md)|  | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1promotionsassignments"></a>
# **saveAssignmentV1promotionsassignments**
> saveAssignmentV1promotionsassignments(promotionAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionAssignment = new OrderCloud.PromotionAssignment(); // PromotionAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1promotionsassignments(promotionAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionAssignment** | [**PromotionAssignment**](PromotionAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1promotionspromotionID"></a>
# **saveV1promotionspromotionID**
> Promotion saveV1promotionspromotionID(promotionID, promotion)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PromotionApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var promotion = new OrderCloud.Promotion(); // Promotion | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1promotionspromotionID(promotionID, promotion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 
 **promotion** | [**Promotion**](Promotion.md)|  | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

