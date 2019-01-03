# OrderCloud.CategoryApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1catalogscatalogIDcategories**](CategoryApi.md#createV1catalogscatalogIDcategories) | **POST** /catalogs/{catalogID}/categories | 
[**deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments**](CategoryApi.md#deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/assignments | 
[**deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID**](CategoryApi.md#deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID} | 
[**deleteV1catalogscatalogIDcategoriescategoryID**](CategoryApi.md#deleteV1catalogscatalogIDcategoriescategoryID) | **DELETE** /catalogs/{catalogID}/categories/{categoryID} | 
[**getV1catalogscatalogIDcategoriescategoryID**](CategoryApi.md#getV1catalogscatalogIDcategoriescategoryID) | **GET** /catalogs/{catalogID}/categories/{categoryID} | 
[**listAssignmentsV1catalogscatalogIDcategoriesassignments**](CategoryApi.md#listAssignmentsV1catalogscatalogIDcategoriesassignments) | **GET** /catalogs/{catalogID}/categories/assignments | 
[**listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments**](CategoryApi.md#listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments) | **GET** /catalogs/{catalogID}/categories/productassignments | 
[**listV1catalogscatalogIDcategories**](CategoryApi.md#listV1catalogscatalogIDcategories) | **GET** /catalogs/{catalogID}/categories | 
[**patchV1catalogscatalogIDcategoriescategoryID**](CategoryApi.md#patchV1catalogscatalogIDcategoriescategoryID) | **PATCH** /catalogs/{catalogID}/categories/{categoryID} | 
[**saveAssignmentV1catalogscatalogIDcategoriesassignments**](CategoryApi.md#saveAssignmentV1catalogscatalogIDcategoriesassignments) | **POST** /catalogs/{catalogID}/categories/assignments | 
[**saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments**](CategoryApi.md#saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments) | **POST** /catalogs/{catalogID}/categories/productassignments | 
[**saveV1catalogscatalogIDcategoriescategoryID**](CategoryApi.md#saveV1catalogscatalogIDcategoriescategoryID) | **PUT** /catalogs/{catalogID}/categories/{categoryID} | 


<a name="createV1catalogscatalogIDcategories"></a>
# **createV1catalogscatalogIDcategories**
> Category createV1catalogscatalogIDcategories(catalogID, category)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var category = new OrderCloud.Category(); // Category | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1catalogscatalogIDcategories(catalogID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments"></a>
# **deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments**
> deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments(catalogID, categoryID, buyerID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
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
apiInstance.deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments(catalogID, categoryID, buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
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

<a name="deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID"></a>
# **deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID**
> deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID(catalogID, categoryID, productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID(catalogID, categoryID, productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1catalogscatalogIDcategoriescategoryID"></a>
# **deleteV1catalogscatalogIDcategoriescategoryID**
> deleteV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getV1catalogscatalogIDcategoriescategoryID"></a>
# **getV1catalogscatalogIDcategoriescategoryID**
> Category getV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

[**Category**](Category.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssignmentsV1catalogscatalogIDcategoriesassignments"></a>
# **listAssignmentsV1catalogscatalogIDcategoriesassignments**
> ListCategoryAssignment listAssignmentsV1catalogscatalogIDcategoriesassignments(catalogID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var opts = {
  'categoryID': "categoryID_example", // String | ID of the category.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the category assignment. Possible values: User, Group, Company.
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
apiInstance.listAssignmentsV1catalogscatalogIDcategoriesassignments(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the category assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCategoryAssignment**](ListCategoryAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments"></a>
# **listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments**
> ListCategoryProductAssignment listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments(catalogID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var opts = {
  'categoryID': "categoryID_example", // String | ID of the category.
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
apiInstance.listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCategoryProductAssignment**](ListCategoryProductAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1catalogscatalogIDcategories"></a>
# **listV1catalogscatalogIDcategories**
> ListCategory listV1catalogscatalogIDcategories(catalogID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var opts = {
  'depth': "depth_example", // String | Depth of the category.
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
apiInstance.listV1catalogscatalogIDcategories(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **depth** | **String**| Depth of the category. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListCategory**](ListCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchV1catalogscatalogIDcategoriescategoryID"></a>
# **patchV1catalogscatalogIDcategoriescategoryID**
> Category patchV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, category)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
var category = new OrderCloud.Category(); // Category | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAssignmentV1catalogscatalogIDcategoriesassignments"></a>
# **saveAssignmentV1catalogscatalogIDcategoriesassignments**
> saveAssignmentV1catalogscatalogIDcategoriesassignments(catalogID, categoryAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryAssignment = new OrderCloud.CategoryAssignment(); // CategoryAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignmentV1catalogscatalogIDcategoriesassignments(catalogID, categoryAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryAssignment** | [**CategoryAssignment**](CategoryAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments"></a>
# **saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments**
> saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments(catalogID, categoryProductAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryProductAssignment = new OrderCloud.CategoryProductAssignment(); // CategoryProductAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments(catalogID, categoryProductAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryProductAssignment** | [**CategoryProductAssignment**](CategoryProductAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1catalogscatalogIDcategoriescategoryID"></a>
# **saveV1catalogscatalogIDcategoriescategoryID**
> Category saveV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, category)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CategoryApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var categoryID = "categoryID_example"; // String | ID of the category.
var category = new OrderCloud.Category(); // Category | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1catalogscatalogIDcategoriescategoryID(catalogID, categoryID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

