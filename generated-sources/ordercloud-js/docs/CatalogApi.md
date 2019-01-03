# OrderCloud.CatalogApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1catalogs**](CatalogApi.md#createV1catalogs) | **POST** /catalogs | 
[**deleteAssignmentV1catalogscatalogIDassignments**](CatalogApi.md#deleteAssignmentV1catalogscatalogIDassignments) | **DELETE** /catalogs/{catalogID}/assignments | 
[**deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID**](CatalogApi.md#deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID) | **DELETE** /catalogs/{catalogID}/productassignments/{productID} | 
[**deleteV1catalogscatalogID**](CatalogApi.md#deleteV1catalogscatalogID) | **DELETE** /catalogs/{catalogID} | 
[**getV1catalogscatalogID**](CatalogApi.md#getV1catalogscatalogID) | **GET** /catalogs/{catalogID} | 
[**listAssignmentsV1catalogsassignments**](CatalogApi.md#listAssignmentsV1catalogsassignments) | **GET** /catalogs/assignments | 
[**listProductAssignmentsV1catalogsproductassignments**](CatalogApi.md#listProductAssignmentsV1catalogsproductassignments) | **GET** /catalogs/productassignments | 
[**listV1catalogs**](CatalogApi.md#listV1catalogs) | **GET** /catalogs | 
[**patchV1catalogscatalogID**](CatalogApi.md#patchV1catalogscatalogID) | **PATCH** /catalogs/{catalogID} | 
[**saveAssignmentV1catalogsassignments**](CatalogApi.md#saveAssignmentV1catalogsassignments) | **POST** /catalogs/assignments | 
[**saveProductAssignmentV1catalogsproductassignments**](CatalogApi.md#saveProductAssignmentV1catalogsproductassignments) | **POST** /catalogs/productassignments | 
[**saveV1catalogscatalogID**](CatalogApi.md#saveV1catalogscatalogID) | **PUT** /catalogs/{catalogID} | 


<a name="createV1catalogs"></a>
# **createV1catalogs**
> Catalog createV1catalogs(catalog)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalog = new OrderCloud.Catalog(); // Catalog | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1catalogs(catalog, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1catalogscatalogIDassignments"></a>
# **deleteAssignmentV1catalogscatalogIDassignments**
> deleteAssignmentV1catalogscatalogIDassignments(catalogID, buyerID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var buyerID = "buyerID_example"; // String | ID of the buyer.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAssignmentV1catalogscatalogIDassignments(catalogID, buyerID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **buyerID** | **String**| ID of the buyer. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID"></a>
# **deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID**
> deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID(catalogID, productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductAssignmentV1catalogscatalogIDproductassignmentsproductID(catalogID, productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1catalogscatalogID"></a>
# **deleteV1catalogscatalogID**
> deleteV1catalogscatalogID(catalogID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1catalogscatalogID(catalogID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1catalogscatalogID"></a>
# **getV1catalogscatalogID**
> Catalog getV1catalogscatalogID(catalogID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1catalogscatalogID(catalogID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1catalogsassignments"></a>
# **listAssignmentsV1catalogsassignments**
> ListCatalogAssignment listAssignmentsV1catalogsassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var opts = {
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'buyerID': "buyerID_example", // String | ID of the buyer.
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
apiInstance.listAssignmentsV1catalogsassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCatalogAssignment**](ListCatalogAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProductAssignmentsV1catalogsproductassignments"></a>
# **listProductAssignmentsV1catalogsproductassignments**
> ListProductCatalogAssignment listProductAssignmentsV1catalogsproductassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var opts = {
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'productID': "productID_example", // String | ID of the product.
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
apiInstance.listProductAssignmentsV1catalogsproductassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListProductCatalogAssignment**](ListProductCatalogAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1catalogs"></a>
# **listV1catalogs**
> ListCatalog listV1catalogs(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
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
apiInstance.listV1catalogs(opts, callback);
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

[**ListCatalog**](ListCatalog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1catalogscatalogID"></a>
# **patchV1catalogscatalogID**
> Catalog patchV1catalogscatalogID(catalogID, catalog)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var catalog = new OrderCloud.Catalog(); // Catalog | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1catalogscatalogID(catalogID, catalog, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **catalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1catalogsassignments"></a>
# **saveAssignmentV1catalogsassignments**
> saveAssignmentV1catalogsassignments(catalogAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogAssignment = new OrderCloud.CatalogAssignment(); // CatalogAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1catalogsassignments(catalogAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogAssignment** | [**CatalogAssignment**](CatalogAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveProductAssignmentV1catalogsproductassignments"></a>
# **saveProductAssignmentV1catalogsproductassignments**
> saveProductAssignmentV1catalogsproductassignments(productCatalogAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var productCatalogAssignment = new OrderCloud.ProductCatalogAssignment(); // ProductCatalogAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProductAssignmentV1catalogsproductassignments(productCatalogAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCatalogAssignment** | [**ProductCatalogAssignment**](ProductCatalogAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1catalogscatalogID"></a>
# **saveV1catalogscatalogID**
> Catalog saveV1catalogscatalogID(catalogID, catalog)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CatalogApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var catalog = new OrderCloud.Catalog(); // Catalog | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1catalogscatalogID(catalogID, catalog, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **catalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

