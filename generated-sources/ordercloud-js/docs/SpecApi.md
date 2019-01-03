# OrderCloud.SpecApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOptionV1specsspecIDoptions**](SpecApi.md#createOptionV1specsspecIDoptions) | **POST** /specs/{specID}/options | 
[**createV1specs**](SpecApi.md#createV1specs) | **POST** /specs | 
[**deleteOptionV1specsspecIDoptionsoptionID**](SpecApi.md#deleteOptionV1specsspecIDoptionsoptionID) | **DELETE** /specs/{specID}/options/{optionID} | 
[**deleteProductAssignmentV1specsspecIDproductassignmentsproductID**](SpecApi.md#deleteProductAssignmentV1specsspecIDproductassignmentsproductID) | **DELETE** /specs/{specID}/productassignments/{productID} | 
[**deleteV1specsspecID**](SpecApi.md#deleteV1specsspecID) | **DELETE** /specs/{specID} | 
[**getOptionV1specsspecIDoptionsoptionID**](SpecApi.md#getOptionV1specsspecIDoptionsoptionID) | **GET** /specs/{specID}/options/{optionID} | 
[**getV1specsspecID**](SpecApi.md#getV1specsspecID) | **GET** /specs/{specID} | 
[**listOptionsV1specsspecIDoptions**](SpecApi.md#listOptionsV1specsspecIDoptions) | **GET** /specs/{specID}/options | 
[**listProductAssignmentsV1specsproductassignments**](SpecApi.md#listProductAssignmentsV1specsproductassignments) | **GET** /specs/productassignments | 
[**listV1specs**](SpecApi.md#listV1specs) | **GET** /specs | 
[**patchOptionV1specsspecIDoptionsoptionID**](SpecApi.md#patchOptionV1specsspecIDoptionsoptionID) | **PATCH** /specs/{specID}/options/{optionID} | 
[**patchV1specsspecID**](SpecApi.md#patchV1specsspecID) | **PATCH** /specs/{specID} | 
[**saveOptionV1specsspecIDoptionsoptionID**](SpecApi.md#saveOptionV1specsspecIDoptionsoptionID) | **PUT** /specs/{specID}/options/{optionID} | 
[**saveProductAssignmentV1specsproductassignments**](SpecApi.md#saveProductAssignmentV1specsproductassignments) | **POST** /specs/productassignments | 
[**saveV1specsspecID**](SpecApi.md#saveV1specsspecID) | **PUT** /specs/{specID} | 


<a name="createOptionV1specsspecIDoptions"></a>
# **createOptionV1specsspecIDoptions**
> SpecOption createOptionV1specsspecIDoptions(specID, specOption)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var specOption = new OrderCloud.SpecOption(); // SpecOption | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOptionV1specsspecIDoptions(specID, specOption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **specOption** | [**SpecOption**](SpecOption.md)|  | 

### Return type

[**SpecOption**](SpecOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createV1specs"></a>
# **createV1specs**
> Spec createV1specs(spec)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var spec = new OrderCloud.Spec(); // Spec | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV1specs(spec, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spec** | [**Spec**](Spec.md)|  | 

### Return type

[**Spec**](Spec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOptionV1specsspecIDoptionsoptionID"></a>
# **deleteOptionV1specsspecIDoptionsoptionID**
> deleteOptionV1specsspecIDoptionsoptionID(specID, optionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var optionID = "optionID_example"; // String | ID of the option.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOptionV1specsspecIDoptionsoptionID(specID, optionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **optionID** | **String**| ID of the option. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProductAssignmentV1specsspecIDproductassignmentsproductID"></a>
# **deleteProductAssignmentV1specsspecIDproductassignmentsproductID**
> deleteProductAssignmentV1specsspecIDproductassignmentsproductID(specID, productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductAssignmentV1specsspecIDproductassignmentsproductID(specID, productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteV1specsspecID"></a>
# **deleteV1specsspecID**
> deleteV1specsspecID(specID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteV1specsspecID(specID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOptionV1specsspecIDoptionsoptionID"></a>
# **getOptionV1specsspecIDoptionsoptionID**
> SpecOption getOptionV1specsspecIDoptionsoptionID(specID, optionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var optionID = "optionID_example"; // String | ID of the option.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptionV1specsspecIDoptionsoptionID(specID, optionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **optionID** | **String**| ID of the option. | 

### Return type

[**SpecOption**](SpecOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV1specsspecID"></a>
# **getV1specsspecID**
> Spec getV1specsspecID(specID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1specsspecID(specID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 

### Return type

[**Spec**](Spec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOptionsV1specsspecIDoptions"></a>
# **listOptionsV1specsspecIDoptions**
> ListSpecOption listOptionsV1specsspecIDoptions(specID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
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
apiInstance.listOptionsV1specsspecIDoptions(specID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListSpecOption**](ListSpecOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProductAssignmentsV1specsproductassignments"></a>
# **listProductAssignmentsV1specsproductassignments**
> ListSpecProductAssignment listProductAssignmentsV1specsproductassignments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
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
apiInstance.listProductAssignmentsV1specsproductassignments(opts, callback);
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

[**ListSpecProductAssignment**](ListSpecProductAssignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listV1specs"></a>
# **listV1specs**
> ListSpec listV1specs(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
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
apiInstance.listV1specs(opts, callback);
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

[**ListSpec**](ListSpec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchOptionV1specsspecIDoptionsoptionID"></a>
# **patchOptionV1specsspecIDoptionsoptionID**
> SpecOption patchOptionV1specsspecIDoptionsoptionID(specID, optionID, specOption)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var optionID = "optionID_example"; // String | ID of the option.
var specOption = new OrderCloud.SpecOption(); // SpecOption | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchOptionV1specsspecIDoptionsoptionID(specID, optionID, specOption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **optionID** | **String**| ID of the option. | 
 **specOption** | [**SpecOption**](SpecOption.md)|  | 

### Return type

[**SpecOption**](SpecOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchV1specsspecID"></a>
# **patchV1specsspecID**
> Spec patchV1specsspecID(specID, spec)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var spec = new OrderCloud.Spec(); // Spec | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1specsspecID(specID, spec, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **spec** | [**Spec**](Spec.md)|  | 

### Return type

[**Spec**](Spec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveOptionV1specsspecIDoptionsoptionID"></a>
# **saveOptionV1specsspecIDoptionsoptionID**
> SpecOption saveOptionV1specsspecIDoptionsoptionID(specID, optionID, specOption)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var optionID = "optionID_example"; // String | ID of the option.
var specOption = new OrderCloud.SpecOption(); // SpecOption | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveOptionV1specsspecIDoptionsoptionID(specID, optionID, specOption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **optionID** | **String**| ID of the option. | 
 **specOption** | [**SpecOption**](SpecOption.md)|  | 

### Return type

[**SpecOption**](SpecOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveProductAssignmentV1specsproductassignments"></a>
# **saveProductAssignmentV1specsproductassignments**
> saveProductAssignmentV1specsproductassignments(specProductAssignment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specProductAssignment = new OrderCloud.SpecProductAssignment(); // SpecProductAssignment | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProductAssignmentV1specsproductassignments(specProductAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specProductAssignment** | [**SpecProductAssignment**](SpecProductAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveV1specsspecID"></a>
# **saveV1specsspecID**
> Spec saveV1specsspecID(specID, spec)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpecApi();
var specID = "specID_example"; // String | ID of the spec.
var spec = new OrderCloud.Spec(); // Spec | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1specsspecID(specID, spec, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specID** | **String**| ID of the spec. | 
 **spec** | [**Spec**](Spec.md)|  | 

### Return type

[**Spec**](Spec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

