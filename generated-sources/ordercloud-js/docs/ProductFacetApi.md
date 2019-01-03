# OrderCloud.ProductFacetApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductFacets**](ProductFacetApi.md#createProductFacets) | **POST** /productfacets | 
[**deleteProductFacets**](ProductFacetApi.md#deleteProductFacets) | **DELETE** /productfacets/{productFacetID} | 
[**getProductFacets**](ProductFacetApi.md#getProductFacets) | **GET** /productfacets/{productFacetID} | 
[**listProductFacets**](ProductFacetApi.md#listProductFacets) | **GET** /productfacets | 
[**patchProductFacets**](ProductFacetApi.md#patchProductFacets) | **PATCH** /productfacets/{productFacetID} | 
[**saveProductFacets**](ProductFacetApi.md#saveProductFacets) | **PUT** /productfacets/{productFacetID} | 


<a name="createProductFacets"></a>
# **createProductFacets**
> ProductFacet createProductFacets(productFacet)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
var productFacet = new OrderCloud.ProductFacet(); // ProductFacet | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProductFacets(productFacet, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductFacets"></a>
# **deleteProductFacets**
> deleteProductFacets(productFacetID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
var productFacetID = "productFacetID_example"; // String | ID of the product facet.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductFacets(productFacetID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductFacets"></a>
# **getProductFacets**
> ProductFacet getProductFacets(productFacetID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
var productFacetID = "productFacetID_example"; // String | ID of the product facet.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductFacets(productFacetID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProductFacets"></a>
# **listProductFacets**
> ListProductFacet listProductFacets(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
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
apiInstance.listProductFacets(opts, callback);
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

[**ListProductFacet**](ListProductFacet.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchProductFacets"></a>
# **patchProductFacets**
> ProductFacet patchProductFacets(productFacetID, productFacet)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
var productFacetID = "productFacetID_example"; // String | ID of the product facet.
var productFacet = new OrderCloud.ProductFacet(); // ProductFacet | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchProductFacets(productFacetID, productFacet, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 
 **productFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveProductFacets"></a>
# **saveProductFacets**
> ProductFacet saveProductFacets(productFacetID, productFacet)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacetApi();
var productFacetID = "productFacetID_example"; // String | ID of the product facet.
var productFacet = new OrderCloud.ProductFacet(); // ProductFacet | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveProductFacets(productFacetID, productFacet, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 
 **productFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

