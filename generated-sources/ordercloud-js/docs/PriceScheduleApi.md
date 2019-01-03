# OrderCloud.PriceScheduleApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPriceSchedules**](PriceScheduleApi.md#createPriceSchedules) | **POST** /priceschedules | 
[**deletePriceBreakPriceSchedules**](PriceScheduleApi.md#deletePriceBreakPriceSchedules) | **DELETE** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**deletePriceSchedules**](PriceScheduleApi.md#deletePriceSchedules) | **DELETE** /priceschedules/{priceScheduleID} | 
[**getPriceSchedules**](PriceScheduleApi.md#getPriceSchedules) | **GET** /priceschedules/{priceScheduleID} | 
[**listPriceSchedules**](PriceScheduleApi.md#listPriceSchedules) | **GET** /priceschedules | 
[**patchPriceSchedules**](PriceScheduleApi.md#patchPriceSchedules) | **PATCH** /priceschedules/{priceScheduleID} | 
[**savePriceBreakPriceSchedules**](PriceScheduleApi.md#savePriceBreakPriceSchedules) | **POST** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**savePriceSchedules**](PriceScheduleApi.md#savePriceSchedules) | **PUT** /priceschedules/{priceScheduleID} | 


<a name="createPriceSchedules"></a>
# **createPriceSchedules**
> PriceSchedule createPriceSchedules(priceSchedule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPriceSchedules(priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePriceBreakPriceSchedules"></a>
# **deletePriceBreakPriceSchedules**
> deletePriceBreakPriceSchedules(priceScheduleID, quantity)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var quantity = 56; // Number | Quantity of the price schedule.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePriceBreakPriceSchedules(priceScheduleID, quantity, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **quantity** | **Number**| Quantity of the price schedule. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePriceSchedules"></a>
# **deletePriceSchedules**
> deletePriceSchedules(priceScheduleID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePriceSchedules(priceScheduleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPriceSchedules"></a>
# **getPriceSchedules**
> PriceSchedule getPriceSchedules(priceScheduleID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPriceSchedules(priceScheduleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPriceSchedules"></a>
# **listPriceSchedules**
> ListPriceSchedule listPriceSchedules(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
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
apiInstance.listPriceSchedules(opts, callback);
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

[**ListPriceSchedule**](ListPriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchPriceSchedules"></a>
# **patchPriceSchedules**
> PriceSchedule patchPriceSchedules(priceScheduleID, priceSchedule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var priceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchPriceSchedules(priceScheduleID, priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="savePriceBreakPriceSchedules"></a>
# **savePriceBreakPriceSchedules**
> PriceSchedule savePriceBreakPriceSchedules(priceScheduleID, priceBreak)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var priceBreak = new OrderCloud.PriceBreak(); // PriceBreak | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.savePriceBreakPriceSchedules(priceScheduleID, priceBreak, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceBreak** | [**PriceBreak**](PriceBreak.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="savePriceSchedules"></a>
# **savePriceSchedules**
> PriceSchedule savePriceSchedules(priceScheduleID, priceSchedule)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceScheduleApi();
var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.
var priceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.savePriceSchedules(priceScheduleID, priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

