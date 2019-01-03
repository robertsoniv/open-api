# OrderCloud.ProductApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1products**](ProductApi.md#createV1products) | **POST** /products | 
[**deleteAssignmentV1productsproductIDassignmentsbuyerID**](ProductApi.md#deleteAssignmentV1productsproductIDassignmentsbuyerID) | **DELETE** /products/{productID}/assignments/{buyerID} | 
[**deleteV1productsproductID**](ProductApi.md#deleteV1productsproductID) | **DELETE** /products/{productID} | 
[**generateVariantsV1productsproductIDvariantsgenerate**](ProductApi.md#generateVariantsV1productsproductIDvariantsgenerate) | **POST** /products/{productID}/variants/generate | 
[**getV1productsproductID**](ProductApi.md#getV1productsproductID) | **GET** /products/{productID} | 
[**getVariantV1productsproductIDvariantsvariantID**](ProductApi.md#getVariantV1productsproductIDvariantsvariantID) | **GET** /products/{productID}/variants/{variantID} | 
[**listAssignmentsV1productsassignments**](ProductApi.md#listAssignmentsV1productsassignments) | **GET** /products/assignments | 
[**listSuppliersV1productsproductIDsuppliers**](ProductApi.md#listSuppliersV1productsproductIDsuppliers) | **GET** /products/{productID}/suppliers | 
[**listV1products**](ProductApi.md#listV1products) | **GET** /products | 
[**listVariantsV1productsproductIDvariants**](ProductApi.md#listVariantsV1productsproductIDvariants) | **GET** /products/{productID}/variants | 
[**patchV1productsproductID**](ProductApi.md#patchV1productsproductID) | **PATCH** /products/{productID} | 
[**patchVariantV1productsproductIDvariantsvariantID**](ProductApi.md#patchVariantV1productsproductIDvariantsvariantID) | **PATCH** /products/{productID}/variants/{variantID} | 
[**removeSupplierV1productsproductIDsupplierssupplierID**](ProductApi.md#removeSupplierV1productsproductIDsupplierssupplierID) | **DELETE** /products/{productID}/suppliers/{supplierID} | 
[**saveAssignmentV1productsassignments**](ProductApi.md#saveAssignmentV1productsassignments) | **POST** /products/assignments | 
[**saveSupplierV1productsproductIDsupplierssupplierID**](ProductApi.md#saveSupplierV1productsproductIDsupplierssupplierID) | **PUT** /products/{productID}/suppliers/{supplierID} | 
[**saveV1productsproductID**](ProductApi.md#saveV1productsproductID) | **PUT** /products/{productID} | 
[**saveVariantV1productsproductIDvariantsvariantID**](ProductApi.md#saveVariantV1productsproductIDvariantsvariantID) | **PUT** /products/{productID}/variants/{variantID} | 


<a name="createV1products"></a>
# **createV1products**
> Product createV1products(product)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var product = new OrderCloud.Product(); // Product | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1products(product, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1productsproductIDassignmentsbuyerID"></a>
# **deleteAssignmentV1productsproductIDassignmentsbuyerID**
> deleteAssignmentV1productsproductIDassignmentsbuyerID(productID, buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
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
apiInstance.deleteAssignmentV1productsproductIDassignmentsbuyerID(productID, buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
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

<a name="deleteV1productsproductID"></a>
# **deleteV1productsproductID**
> deleteV1productsproductID(productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1productsproductID(productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="generateVariantsV1productsproductIDvariantsgenerate"></a>
# **generateVariantsV1productsproductIDvariantsgenerate**
> Product generateVariantsV1productsproductIDvariantsgenerate(productID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var opts = {
  'overwriteExisting': true // Boolean | Overwrite existing of the product.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateVariantsV1productsproductIDvariantsgenerate(productID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **overwriteExisting** | **Boolean**| Overwrite existing of the product. | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV1productsproductID"></a>
# **getV1productsproductID**
> Product getV1productsproductID(productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1productsproductID(productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 

### Return type

[**Product**](Product.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVariantV1productsproductIDvariantsvariantID"></a>
# **getVariantV1productsproductIDvariantsvariantID**
> Variant getVariantV1productsproductIDvariantsvariantID(productID, variantID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var variantID = "variantID_example"; // String | ID of the variant.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantV1productsproductIDvariantsvariantID(productID, variantID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **variantID** | **String**| ID of the variant. | 

### Return type

[**Variant**](Variant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1productsassignments"></a>
# **listAssignmentsV1productsassignments**
> ListProductAssignment listAssignmentsV1productsassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var opts = {
  'productID': "productID_example", // String | ID of the product.
  'priceScheduleID': "priceScheduleID_example", // String | ID of the price schedule.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the product assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1productsassignments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | [optional] 
 **priceScheduleID** | **String**| ID of the price schedule. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the product assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListProductAssignment**](ListProductAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSuppliersV1productsproductIDsuppliers"></a>
# **listSuppliersV1productsproductIDsuppliers**
> ListSupplier listSuppliersV1productsproductIDsuppliers(productID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
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
apiInstance.listSuppliersV1productsproductIDsuppliers(productID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
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

<a name="listV1products"></a>
# **listV1products**
> ListProduct listV1products(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var opts = {
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'categoryID': "categoryID_example", // String | ID of the category.
  'supplierID': "supplierID_example", // String | ID of the supplier.
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
apiInstance.listV1products(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **categoryID** | **String**| ID of the category. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListProduct**](ListProduct.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listVariantsV1productsproductIDvariants"></a>
# **listVariantsV1productsproductIDvariants**
> ListVariant listVariantsV1productsproductIDvariants(productID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
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
apiInstance.listVariantsV1productsproductIDvariants(productID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListVariant**](ListVariant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1productsproductID"></a>
# **patchV1productsproductID**
> Product patchV1productsproductID(productID, product)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var product = new OrderCloud.Product(); // Product | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1productsproductID(productID, product, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchVariantV1productsproductIDvariantsvariantID"></a>
# **patchVariantV1productsproductIDvariantsvariantID**
> Variant patchVariantV1productsproductIDvariantsvariantID(productID, variantID, variant)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var variantID = "variantID_example"; // String | ID of the variant.
var variant = new OrderCloud.Variant(); // Variant | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchVariantV1productsproductIDvariantsvariantID(productID, variantID, variant, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **variantID** | **String**| ID of the variant. | 
 **variant** | [**Variant**](Variant.md)|  | 

### Return type

[**Variant**](Variant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSupplierV1productsproductIDsupplierssupplierID"></a>
# **removeSupplierV1productsproductIDsupplierssupplierID**
> removeSupplierV1productsproductIDsupplierssupplierID(productID, supplierID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var supplierID = "supplierID_example"; // String | ID of the supplier.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeSupplierV1productsproductIDsupplierssupplierID(productID, supplierID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **supplierID** | **String**| ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="saveAssignmentV1productsassignments"></a>
# **saveAssignmentV1productsassignments**
> saveAssignmentV1productsassignments(productAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productAssignment = new OrderCloud.ProductAssignment(); // ProductAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1productsassignments(productAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAssignment** | [**ProductAssignment**](ProductAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveSupplierV1productsproductIDsupplierssupplierID"></a>
# **saveSupplierV1productsproductIDsupplierssupplierID**
> saveSupplierV1productsproductIDsupplierssupplierID(productID, supplierID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var supplierID = "supplierID_example"; // String | ID of the supplier.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveSupplierV1productsproductIDsupplierssupplierID(productID, supplierID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **supplierID** | **String**| ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="saveV1productsproductID"></a>
# **saveV1productsproductID**
> Product saveV1productsproductID(productID, product)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var product = new OrderCloud.Product(); // Product | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1productsproductID(productID, product, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveVariantV1productsproductIDvariantsvariantID"></a>
# **saveVariantV1productsproductIDvariantsvariantID**
> Variant saveVariantV1productsproductIDvariantsvariantID(productID, variantID, variant)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductApi();
var productID = "productID_example"; // String | ID of the product.
var variantID = "variantID_example"; // String | ID of the variant.
var variant = new OrderCloud.Variant(); // Variant | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveVariantV1productsproductIDvariantsvariantID(productID, variantID, variant, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **variantID** | **String**| ID of the variant. | 
 **variant** | [**Variant**](Variant.md)|  | 

### Return type

[**Variant**](Variant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

