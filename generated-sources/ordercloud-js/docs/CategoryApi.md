# OrderCloud.CategoryApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategories**](CategoryApi.md#createCategories) | **POST** /catalogs/{catalogID}/categories | 
[**deleteAssignmentCategories**](CategoryApi.md#deleteAssignmentCategories) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/assignments | 
[**deleteCategories**](CategoryApi.md#deleteCategories) | **DELETE** /catalogs/{catalogID}/categories/{categoryID} | 
[**deleteProductAssignmentCategories**](CategoryApi.md#deleteProductAssignmentCategories) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID} | 
[**getCategories**](CategoryApi.md#getCategories) | **GET** /catalogs/{catalogID}/categories/{categoryID} | 
[**listAssignmentsCategories**](CategoryApi.md#listAssignmentsCategories) | **GET** /catalogs/{catalogID}/categories/assignments | 
[**listCategories**](CategoryApi.md#listCategories) | **GET** /catalogs/{catalogID}/categories | 
[**listProductAssignmentsCategories**](CategoryApi.md#listProductAssignmentsCategories) | **GET** /catalogs/{catalogID}/categories/productassignments | 
[**patchCategories**](CategoryApi.md#patchCategories) | **PATCH** /catalogs/{catalogID}/categories/{categoryID} | 
[**saveAssignmentCategories**](CategoryApi.md#saveAssignmentCategories) | **POST** /catalogs/{catalogID}/categories/assignments | 
[**saveCategories**](CategoryApi.md#saveCategories) | **PUT** /catalogs/{catalogID}/categories/{categoryID} | 
[**saveProductAssignmentCategories**](CategoryApi.md#saveProductAssignmentCategories) | **POST** /catalogs/{catalogID}/categories/productassignments | 


<a name="createCategories"></a>
# **createCategories**
> Category createCategories(catalogID, category)



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
apiInstance.createCategories(catalogID, category, callback);
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

<a name="deleteAssignmentCategories"></a>
# **deleteAssignmentCategories**
> deleteAssignmentCategories(catalogID, categoryID, buyerID, opts)



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
apiInstance.deleteAssignmentCategories(catalogID, categoryID, buyerID, opts, callback);
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

<a name="deleteCategories"></a>
# **deleteCategories**
> deleteCategories(catalogID, categoryID)



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
apiInstance.deleteCategories(catalogID, categoryID, callback);
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

<a name="deleteProductAssignmentCategories"></a>
# **deleteProductAssignmentCategories**
> deleteProductAssignmentCategories(catalogID, categoryID, productID)



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
apiInstance.deleteProductAssignmentCategories(catalogID, categoryID, productID, callback);
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

<a name="getCategories"></a>
# **getCategories**
> Category getCategories(catalogID, categoryID)



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
apiInstance.getCategories(catalogID, categoryID, callback);
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

<a name="listAssignmentsCategories"></a>
# **listAssignmentsCategories**
> ListCategoryAssignment listAssignmentsCategories(catalogID, opts)



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
apiInstance.listAssignmentsCategories(catalogID, opts, callback);
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

<a name="listCategories"></a>
# **listCategories**
> ListCategory listCategories(catalogID, opts)



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
apiInstance.listCategories(catalogID, opts, callback);
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

<a name="listProductAssignmentsCategories"></a>
# **listProductAssignmentsCategories**
> ListCategoryProductAssignment listProductAssignmentsCategories(catalogID, opts)



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
apiInstance.listProductAssignmentsCategories(catalogID, opts, callback);
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

<a name="patchCategories"></a>
# **patchCategories**
> Category patchCategories(catalogID, categoryID, category)



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
apiInstance.patchCategories(catalogID, categoryID, category, callback);
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

<a name="saveAssignmentCategories"></a>
# **saveAssignmentCategories**
> saveAssignmentCategories(catalogID, categoryAssignment)



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
apiInstance.saveAssignmentCategories(catalogID, categoryAssignment, callback);
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

<a name="saveCategories"></a>
# **saveCategories**
> Category saveCategories(catalogID, categoryID, category)



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
apiInstance.saveCategories(catalogID, categoryID, category, callback);
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

<a name="saveProductAssignmentCategories"></a>
# **saveProductAssignmentCategories**
> saveProductAssignmentCategories(catalogID, categoryProductAssignment)



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
apiInstance.saveProductAssignmentCategories(catalogID, categoryProductAssignment, callback);
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

