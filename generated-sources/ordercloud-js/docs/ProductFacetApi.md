# OrderCloud.ProductFacetApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1productfacets**](ProductFacetApi.md#createV1productfacets) | **POST** /productfacets | 
[**deleteV1productfacetsproductFacetID**](ProductFacetApi.md#deleteV1productfacetsproductFacetID) | **DELETE** /productfacets/{productFacetID} | 
[**getV1productfacetsproductFacetID**](ProductFacetApi.md#getV1productfacetsproductFacetID) | **GET** /productfacets/{productFacetID} | 
[**listV1productfacets**](ProductFacetApi.md#listV1productfacets) | **GET** /productfacets | 
[**patchV1productfacetsproductFacetID**](ProductFacetApi.md#patchV1productfacetsproductFacetID) | **PATCH** /productfacets/{productFacetID} | 
[**saveV1productfacetsproductFacetID**](ProductFacetApi.md#saveV1productfacetsproductFacetID) | **PUT** /productfacets/{productFacetID} | 


<a name="createV1productfacets"></a>
# **createV1productfacets**
> ProductFacet createV1productfacets(productFacet)



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
apiInstance.createV1productfacets(productFacet, callback);
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

<a name="deleteV1productfacetsproductFacetID"></a>
# **deleteV1productfacetsproductFacetID**
> deleteV1productfacetsproductFacetID(productFacetID)



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
apiInstance.deleteV1productfacetsproductFacetID(productFacetID, callback);
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

<a name="getV1productfacetsproductFacetID"></a>
# **getV1productfacetsproductFacetID**
> ProductFacet getV1productfacetsproductFacetID(productFacetID)



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
apiInstance.getV1productfacetsproductFacetID(productFacetID, callback);
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

<a name="listV1productfacets"></a>
# **listV1productfacets**
> ListProductFacet listV1productfacets(opts)



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
apiInstance.listV1productfacets(opts, callback);
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

<a name="patchV1productfacetsproductFacetID"></a>
# **patchV1productfacetsproductFacetID**
> ProductFacet patchV1productfacetsproductFacetID(productFacetID, productFacet)



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
apiInstance.patchV1productfacetsproductFacetID(productFacetID, productFacet, callback);
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

<a name="saveV1productfacetsproductFacetID"></a>
# **saveV1productfacetsproductFacetID**
> ProductFacet saveV1productfacetsproductFacetID(productFacetID, productFacet)



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
apiInstance.saveV1productfacetsproductFacetID(productFacetID, productFacet, callback);
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

