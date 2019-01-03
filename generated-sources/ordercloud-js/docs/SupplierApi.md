# OrderCloud.SupplierApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1suppliers**](SupplierApi.md#createV1suppliers) | **POST** /suppliers | 
[**deleteV1supplierssupplierID**](SupplierApi.md#deleteV1supplierssupplierID) | **DELETE** /suppliers/{supplierID} | 
[**getV1supplierssupplierID**](SupplierApi.md#getV1supplierssupplierID) | **GET** /suppliers/{supplierID} | 
[**listV1suppliers**](SupplierApi.md#listV1suppliers) | **GET** /suppliers | 
[**patchV1supplierssupplierID**](SupplierApi.md#patchV1supplierssupplierID) | **PATCH** /suppliers/{supplierID} | 
[**saveV1supplierssupplierID**](SupplierApi.md#saveV1supplierssupplierID) | **PUT** /suppliers/{supplierID} | 


<a name="createV1suppliers"></a>
# **createV1suppliers**
> Supplier createV1suppliers(supplier)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
var supplier = new OrderCloud.Supplier(); // Supplier | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1suppliers(supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteV1supplierssupplierID"></a>
# **deleteV1supplierssupplierID**
> deleteV1supplierssupplierID(supplierID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1supplierssupplierID(supplierID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1supplierssupplierID"></a>
# **getV1supplierssupplierID**
> Supplier getV1supplierssupplierID(supplierID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1supplierssupplierID(supplierID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1suppliers"></a>
# **listV1suppliers**
> ListSupplier listV1suppliers(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
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
apiInstance.listV1suppliers(opts, callback);
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

[**ListSupplier**](ListSupplier.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1supplierssupplierID"></a>
# **patchV1supplierssupplierID**
> Supplier patchV1supplierssupplierID(supplierID, supplier)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var supplier = new OrderCloud.Supplier(); // Supplier | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1supplierssupplierID(supplierID, supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **supplier** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1supplierssupplierID"></a>
# **saveV1supplierssupplierID**
> Supplier saveV1supplierssupplierID(supplierID, supplier)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierApi();
var supplierID = "supplierID_example"; // String | ID of the supplier.
var supplier = new OrderCloud.Supplier(); // Supplier | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1supplierssupplierID(supplierID, supplier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **supplier** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

