# OrderCloud.AddressApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1buyersbuyerIDaddresses**](AddressApi.md#createV1buyersbuyerIDaddresses) | **POST** /buyers/{buyerID}/addresses | 
[**deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments**](AddressApi.md#deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments) | **DELETE** /buyers/{buyerID}/addresses/{addressID}/assignments | 
[**deleteV1buyersbuyerIDaddressesaddressID**](AddressApi.md#deleteV1buyersbuyerIDaddressesaddressID) | **DELETE** /buyers/{buyerID}/addresses/{addressID} | 
[**getV1buyersbuyerIDaddressesaddressID**](AddressApi.md#getV1buyersbuyerIDaddressesaddressID) | **GET** /buyers/{buyerID}/addresses/{addressID} | 
[**listAssignmentsV1buyersbuyerIDaddressesassignments**](AddressApi.md#listAssignmentsV1buyersbuyerIDaddressesassignments) | **GET** /buyers/{buyerID}/addresses/assignments | 
[**listV1buyersbuyerIDaddresses**](AddressApi.md#listV1buyersbuyerIDaddresses) | **GET** /buyers/{buyerID}/addresses | 
[**patchV1buyersbuyerIDaddressesaddressID**](AddressApi.md#patchV1buyersbuyerIDaddressesaddressID) | **PATCH** /buyers/{buyerID}/addresses/{addressID} | 
[**saveAssignmentV1buyersbuyerIDaddressesassignments**](AddressApi.md#saveAssignmentV1buyersbuyerIDaddressesassignments) | **POST** /buyers/{buyerID}/addresses/assignments | 
[**saveV1buyersbuyerIDaddressesaddressID**](AddressApi.md#saveV1buyersbuyerIDaddressesaddressID) | **PUT** /buyers/{buyerID}/addresses/{addressID} | 


<a name="createV1buyersbuyerIDaddresses"></a>
# **createV1buyersbuyerIDaddresses**
> Address createV1buyersbuyerIDaddresses(buyerID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1buyersbuyerIDaddresses(buyerID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments"></a>
# **deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments**
> deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments(buyerID, addressID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressID = "addressID_example"; // String | ID of the address.
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
apiInstance.deleteAssignmentV1buyersbuyerIDaddressesaddressIDassignments(buyerID, addressID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1buyersbuyerIDaddressesaddressID"></a>
# **deleteV1buyersbuyerIDaddressesaddressID**
> deleteV1buyersbuyerIDaddressesaddressID(buyerID, addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1buyersbuyerIDaddressesaddressID(buyerID, addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1buyersbuyerIDaddressesaddressID"></a>
# **getV1buyersbuyerIDaddressesaddressID**
> Address getV1buyersbuyerIDaddressesaddressID(buyerID, addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1buyersbuyerIDaddressesaddressID(buyerID, addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1buyersbuyerIDaddressesassignments"></a>
# **listAssignmentsV1buyersbuyerIDaddressesassignments**
> ListAddressAssignment listAssignmentsV1buyersbuyerIDaddressesassignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var opts = {
  'addressID': "addressID_example", // String | ID of the address.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the address assignment. Possible values: User, Group, Company.
  'isShipping': true, // Boolean | Is shipping of the address assignment.
  'isBilling': true, // Boolean | Is billing of the address assignment.
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
apiInstance.listAssignmentsV1buyersbuyerIDaddressesassignments(buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the address assignment. Possible values: User, Group, Company. | [optional] 
 **isShipping** | **Boolean**| Is shipping of the address assignment. | [optional] 
 **isBilling** | **Boolean**| Is billing of the address assignment. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListAddressAssignment**](ListAddressAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1buyersbuyerIDaddresses"></a>
# **listV1buyersbuyerIDaddresses**
> ListAddress listV1buyersbuyerIDaddresses(buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
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
apiInstance.listV1buyersbuyerIDaddresses(buyerID, opts, callback);
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

[**ListAddress**](ListAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1buyersbuyerIDaddressesaddressID"></a>
# **patchV1buyersbuyerIDaddressesaddressID**
> Address patchV1buyersbuyerIDaddressesaddressID(buyerID, addressID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressID = "addressID_example"; // String | ID of the address.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1buyersbuyerIDaddressesaddressID(buyerID, addressID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1buyersbuyerIDaddressesassignments"></a>
# **saveAssignmentV1buyersbuyerIDaddressesassignments**
> saveAssignmentV1buyersbuyerIDaddressesassignments(buyerID, addressAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressAssignment = new OrderCloud.AddressAssignment(); // AddressAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1buyersbuyerIDaddressesassignments(buyerID, addressAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressAssignment** | [**AddressAssignment**](AddressAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1buyersbuyerIDaddressesaddressID"></a>
# **saveV1buyersbuyerIDaddressesaddressID**
> Address saveV1buyersbuyerIDaddressesaddressID(buyerID, addressID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.AddressApi();
var buyerID = "buyerID_example"; // String | ID of the buyer.
var addressID = "addressID_example"; // String | ID of the address.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1buyersbuyerIDaddressesaddressID(buyerID, addressID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **addressID** | **String**| ID of the address. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

