# OrderCloud.SupplierAddressApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1supplierssupplierIDaddresses**](SupplierAddressApi.md#createV1supplierssupplierIDaddresses) | **POST** /suppliers/{supplierID}/addresses | 
[**deleteV1supplierssupplierIDaddressesaddressID**](SupplierAddressApi.md#deleteV1supplierssupplierIDaddressesaddressID) | **DELETE** /suppliers/{supplierID}/addresses/{addressID} | 
[**getV1supplierssupplierIDaddressesaddressID**](SupplierAddressApi.md#getV1supplierssupplierIDaddressesaddressID) | **GET** /suppliers/{supplierID}/addresses/{addressID} | 
[**listV1supplierssupplierIDaddresses**](SupplierAddressApi.md#listV1supplierssupplierIDaddresses) | **GET** /suppliers/{supplierID}/addresses | 
[**patchV1supplierssupplierIDaddressesaddressID**](SupplierAddressApi.md#patchV1supplierssupplierIDaddressesaddressID) | **PATCH** /suppliers/{supplierID}/addresses/{addressID} | 
[**saveV1supplierssupplierIDaddressesaddressID**](SupplierAddressApi.md#saveV1supplierssupplierIDaddressesaddressID) | **PUT** /suppliers/{supplierID}/addresses/{addressID} | 


<a name="createV1supplierssupplierIDaddresses"></a>
# **createV1supplierssupplierIDaddresses**
> Address createV1supplierssupplierIDaddresses(supplierID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1supplierssupplierIDaddresses(supplierID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1supplierssupplierIDaddressesaddressID"></a>
# **deleteV1supplierssupplierIDaddressesaddressID**
> deleteV1supplierssupplierIDaddressesaddressID(supplierID, addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1supplierssupplierIDaddressesaddressID(supplierID, addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **addressID** | **String**| ID of the address. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1supplierssupplierIDaddressesaddressID"></a>
# **getV1supplierssupplierIDaddressesaddressID**
> Address getV1supplierssupplierIDaddressesaddressID(supplierID, addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1supplierssupplierIDaddressesaddressID(supplierID, addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **addressID** | **String**| ID of the address. | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1supplierssupplierIDaddresses"></a>
# **listV1supplierssupplierIDaddresses**
> ListAddress listV1supplierssupplierIDaddresses(supplierID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
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
apiInstance.listV1supplierssupplierIDaddresses(supplierID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
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

<a name="patchV1supplierssupplierIDaddressesaddressID"></a>
# **patchV1supplierssupplierIDaddressesaddressID**
> Address patchV1supplierssupplierIDaddressesaddressID(supplierID, addressID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var addressID = "addressID_example"; // String | ID of the address.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1supplierssupplierIDaddressesaddressID(supplierID, addressID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **addressID** | **String**| ID of the address. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1supplierssupplierIDaddressesaddressID"></a>
# **saveV1supplierssupplierIDaddressesaddressID**
> Address saveV1supplierssupplierIDaddressesaddressID(supplierID, addressID, address)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierAddressApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var addressID = "addressID_example"; // String | ID of the address.
var address = new OrderCloud.Address(); // Address | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1supplierssupplierIDaddressesaddressID(supplierID, addressID, address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **addressID** | **String**| ID of the address. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

