# OrderCloud.MessageSenderApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAssignmentV1messagesendersmessageSenderIDassignments**](MessageSenderApi.md#deleteAssignmentV1messagesendersmessageSenderIDassignments) | **DELETE** /messagesenders/{messageSenderID}/assignments | 
[**getV1messagesendersmessageSenderID**](MessageSenderApi.md#getV1messagesendersmessageSenderID) | **GET** /messagesenders/{messageSenderID} | 
[**listAssignmentsV1messagesendersassignments**](MessageSenderApi.md#listAssignmentsV1messagesendersassignments) | **GET** /messagesenders/assignments | 
[**listCCListenerAssignmentsV1messagesendersCCListenerAssignments**](MessageSenderApi.md#listCCListenerAssignmentsV1messagesendersCCListenerAssignments) | **GET** /messagesenders/CCListenerAssignments | 
[**listV1messagesenders**](MessageSenderApi.md#listV1messagesenders) | **GET** /messagesenders | 
[**saveAssignmentV1messagesendersassignments**](MessageSenderApi.md#saveAssignmentV1messagesendersassignments) | **POST** /messagesenders/assignments | 
[**saveCCListenerAssignmentV1messagesendersCCListenerAssignments**](MessageSenderApi.md#saveCCListenerAssignmentV1messagesendersCCListenerAssignments) | **POST** /messagesenders/CCListenerAssignments | 


<a name="deleteAssignmentV1messagesendersmessageSenderIDassignments"></a>
# **deleteAssignmentV1messagesendersmessageSenderIDassignments**
> deleteAssignmentV1messagesendersmessageSenderIDassignments(messageSenderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
var messageSenderID = "messageSenderID_example"; // String | ID of the message sender.
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
apiInstance.deleteAssignmentV1messagesendersmessageSenderIDassignments(messageSenderID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageSenderID** | **String**| ID of the message sender. | 
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

<a name="getV1messagesendersmessageSenderID"></a>
# **getV1messagesendersmessageSenderID**
> MessageSender getV1messagesendersmessageSenderID(messageSenderID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
var messageSenderID = "messageSenderID_example"; // String | ID of the message sender.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1messagesendersmessageSenderID(messageSenderID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageSenderID** | **String**| ID of the message sender. | 

### Return type

[**MessageSender**](MessageSender.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1messagesendersassignments"></a>
# **listAssignmentsV1messagesendersassignments**
> ListMessageSenderAssignment listAssignmentsV1messagesendersassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
var opts = {
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'messageSenderID': "messageSenderID_example", // String | ID of the message sender.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the message sender assignment. Possible values: User, Group, Company.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'supplierID': "supplierID_example" // String | ID of the supplier.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAssignmentsV1messagesendersassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **messageSenderID** | **String**| ID of the message sender. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the message sender assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 

### Return type

[**ListMessageSenderAssignment**](ListMessageSenderAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCCListenerAssignmentsV1messagesendersCCListenerAssignments"></a>
# **listCCListenerAssignmentsV1messagesendersCCListenerAssignments**
> ListMessageCCListenerAssignment listCCListenerAssignmentsV1messagesendersCCListenerAssignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
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
apiInstance.listCCListenerAssignmentsV1messagesendersCCListenerAssignments(opts, callback);
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

[**ListMessageCCListenerAssignment**](ListMessageCCListenerAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1messagesenders"></a>
# **listV1messagesenders**
> ListMessageSender listV1messagesenders(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
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
apiInstance.listV1messagesenders(opts, callback);
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

[**ListMessageSender**](ListMessageSender.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveAssignmentV1messagesendersassignments"></a>
# **saveAssignmentV1messagesendersassignments**
> saveAssignmentV1messagesendersassignments(messageSenderAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
var messageSenderAssignment = new OrderCloud.MessageSenderAssignment(); // MessageSenderAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1messagesendersassignments(messageSenderAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageSenderAssignment** | [**MessageSenderAssignment**](MessageSenderAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveCCListenerAssignmentV1messagesendersCCListenerAssignments"></a>
# **saveCCListenerAssignmentV1messagesendersCCListenerAssignments**
> saveCCListenerAssignmentV1messagesendersCCListenerAssignments(messageCCListenerAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenderApi();
var messageCCListenerAssignment = new OrderCloud.MessageCCListenerAssignment(); // MessageCCListenerAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveCCListenerAssignmentV1messagesendersCCListenerAssignments(messageCCListenerAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageCCListenerAssignment** | [**MessageCCListenerAssignment**](MessageCCListenerAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

