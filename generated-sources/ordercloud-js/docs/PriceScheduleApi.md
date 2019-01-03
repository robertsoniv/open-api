# OrderCloud.PriceScheduleApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV1priceschedules**](PriceScheduleApi.md#createV1priceschedules) | **POST** /priceschedules | 
[**deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks**](PriceScheduleApi.md#deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks) | **DELETE** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**deleteV1priceschedulespriceScheduleID**](PriceScheduleApi.md#deleteV1priceschedulespriceScheduleID) | **DELETE** /priceschedules/{priceScheduleID} | 
[**getV1priceschedulespriceScheduleID**](PriceScheduleApi.md#getV1priceschedulespriceScheduleID) | **GET** /priceschedules/{priceScheduleID} | 
[**listV1priceschedules**](PriceScheduleApi.md#listV1priceschedules) | **GET** /priceschedules | 
[**patchV1priceschedulespriceScheduleID**](PriceScheduleApi.md#patchV1priceschedulespriceScheduleID) | **PATCH** /priceschedules/{priceScheduleID} | 
[**savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks**](PriceScheduleApi.md#savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks) | **POST** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**saveV1priceschedulespriceScheduleID**](PriceScheduleApi.md#saveV1priceschedulespriceScheduleID) | **PUT** /priceschedules/{priceScheduleID} | 


<a name="createV1priceschedules"></a>
# **createV1priceschedules**
> PriceSchedule createV1priceschedules(priceSchedule)



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
apiInstance.createV1priceschedules(priceSchedule, callback);
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

<a name="deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks"></a>
# **deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks**
> deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks(priceScheduleID, quantity)



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
apiInstance.deletePriceBreakV1priceschedulespriceScheduleIDPriceBreaks(priceScheduleID, quantity, callback);
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

<a name="deleteV1priceschedulespriceScheduleID"></a>
# **deleteV1priceschedulespriceScheduleID**
> deleteV1priceschedulespriceScheduleID(priceScheduleID)



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
apiInstance.deleteV1priceschedulespriceScheduleID(priceScheduleID, callback);
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

<a name="getV1priceschedulespriceScheduleID"></a>
# **getV1priceschedulespriceScheduleID**
> PriceSchedule getV1priceschedulespriceScheduleID(priceScheduleID)



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
apiInstance.getV1priceschedulespriceScheduleID(priceScheduleID, callback);
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

<a name="listV1priceschedules"></a>
# **listV1priceschedules**
> ListPriceSchedule listV1priceschedules(opts)



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
apiInstance.listV1priceschedules(opts, callback);
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

<a name="patchV1priceschedulespriceScheduleID"></a>
# **patchV1priceschedulespriceScheduleID**
> PriceSchedule patchV1priceschedulespriceScheduleID(priceScheduleID, priceSchedule)



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
apiInstance.patchV1priceschedulespriceScheduleID(priceScheduleID, priceSchedule, callback);
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

<a name="savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks"></a>
# **savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks**
> PriceSchedule savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks(priceScheduleID, priceBreak)



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
apiInstance.savePriceBreakV1priceschedulespriceScheduleIDPriceBreaks(priceScheduleID, priceBreak, callback);
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

<a name="saveV1priceschedulespriceScheduleID"></a>
# **saveV1priceschedulespriceScheduleID**
> PriceSchedule saveV1priceschedulespriceScheduleID(priceScheduleID, priceSchedule)



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
apiInstance.saveV1priceschedulespriceScheduleID(priceScheduleID, priceSchedule, callback);
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

