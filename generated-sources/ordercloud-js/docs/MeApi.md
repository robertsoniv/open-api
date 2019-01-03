# OrderCloud.MeApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddressV1meaddresses**](MeApi.md#createAddressV1meaddresses) | **POST** /me/addresses | 
[**createCreditCardV1mecreditcards**](MeApi.md#createCreditCardV1mecreditcards) | **POST** /me/creditcards | 
[**deleteAddressV1meaddressesaddressID**](MeApi.md#deleteAddressV1meaddressesaddressID) | **DELETE** /me/addresses/{addressID} | 
[**deleteCreditCardV1mecreditcardscreditcardID**](MeApi.md#deleteCreditCardV1mecreditcardscreditcardID) | **DELETE** /me/creditcards/{creditcardID} | 
[**getAddressV1meaddressesaddressID**](MeApi.md#getAddressV1meaddressesaddressID) | **GET** /me/addresses/{addressID} | 
[**getCatalogV1mecatalogscatalogID**](MeApi.md#getCatalogV1mecatalogscatalogID) | **GET** /me/catalogs/{catalogID} | 
[**getCategoryV1mecategoriescategoryID**](MeApi.md#getCategoryV1mecategoriescategoryID) | **GET** /me/categories/{categoryID} | 
[**getCreditCardV1mecreditcardscreditcardID**](MeApi.md#getCreditCardV1mecreditcardscreditcardID) | **GET** /me/creditcards/{creditcardID} | 
[**getProductV1meproductsproductID**](MeApi.md#getProductV1meproductsproductID) | **GET** /me/products/{productID} | 
[**getPromotionV1mepromotionspromotionID**](MeApi.md#getPromotionV1mepromotionspromotionID) | **GET** /me/promotions/{promotionID} | 
[**getShipmentV1meshipmentsshipmentID**](MeApi.md#getShipmentV1meshipmentsshipmentID) | **GET** /me/shipments/{shipmentID} | 
[**getSpecV1meproductsproductIDspecsspecID**](MeApi.md#getSpecV1meproductsproductIDspecsspecID) | **GET** /me/products/{productID}/specs/{specID} | 
[**getSpendingAccountV1mespendingaccountsspendingAccountID**](MeApi.md#getSpendingAccountV1mespendingaccountsspendingAccountID) | **GET** /me/spendingaccounts/{spendingAccountID} | 
[**getV1me**](MeApi.md#getV1me) | **GET** /me | 
[**listAddressesV1meaddresses**](MeApi.md#listAddressesV1meaddresses) | **GET** /me/addresses | 
[**listApprovableOrdersV1meordersapprovable**](MeApi.md#listApprovableOrdersV1meordersapprovable) | **GET** /me/orders/approvable | 
[**listCatalogsV1mecatalogs**](MeApi.md#listCatalogsV1mecatalogs) | **GET** /me/catalogs | 
[**listCategoriesV1mecategories**](MeApi.md#listCategoriesV1mecategories) | **GET** /me/categories | 
[**listCostCentersV1mecostcenters**](MeApi.md#listCostCentersV1mecostcenters) | **GET** /me/costcenters | 
[**listCreditCardsV1mecreditcards**](MeApi.md#listCreditCardsV1mecreditcards) | **GET** /me/creditcards | 
[**listOrdersV1meorders**](MeApi.md#listOrdersV1meorders) | **GET** /me/orders | 
[**listProductsV1meproducts**](MeApi.md#listProductsV1meproducts) | **GET** /me/products | 
[**listPromotionsV1mepromotions**](MeApi.md#listPromotionsV1mepromotions) | **GET** /me/promotions | 
[**listShipmentItemsV1meshipmentsshipmentIDitems**](MeApi.md#listShipmentItemsV1meshipmentsshipmentIDitems) | **GET** /me/shipments/{shipmentID}/items | 
[**listShipmentsV1meshipments**](MeApi.md#listShipmentsV1meshipments) | **GET** /me/shipments | 
[**listSpecsV1meproductsproductIDspecs**](MeApi.md#listSpecsV1meproductsproductIDspecs) | **GET** /me/products/{productID}/specs | 
[**listSpendingAccountsV1mespendingAccounts**](MeApi.md#listSpendingAccountsV1mespendingAccounts) | **GET** /me/spendingAccounts | 
[**listUserGroupsV1meusergroups**](MeApi.md#listUserGroupsV1meusergroups) | **GET** /me/usergroups | 
[**patchAddressV1meaddressesaddressID**](MeApi.md#patchAddressV1meaddressesaddressID) | **PATCH** /me/addresses/{addressID} | 
[**patchCreditCardV1mecreditcardscreditcardID**](MeApi.md#patchCreditCardV1mecreditcardscreditcardID) | **PATCH** /me/creditcards/{creditcardID} | 
[**patchV1me**](MeApi.md#patchV1me) | **PATCH** /me | 
[**registerV1meregister**](MeApi.md#registerV1meregister) | **PUT** /me/register | 
[**resetPasswordByTokenV1mepassword**](MeApi.md#resetPasswordByTokenV1mepassword) | **POST** /me/password | 
[**saveAddressV1meaddressesaddressID**](MeApi.md#saveAddressV1meaddressesaddressID) | **PUT** /me/addresses/{addressID} | 
[**saveCreditCardV1mecreditcardscreditcardID**](MeApi.md#saveCreditCardV1mecreditcardscreditcardID) | **PUT** /me/creditcards/{creditcardID} | 
[**saveV1me**](MeApi.md#saveV1me) | **PUT** /me | 
[**transferAnonUserOrderV1meorders**](MeApi.md#transferAnonUserOrderV1meorders) | **PUT** /me/orders | 


<a name="createAddressV1meaddresses"></a>
# **createAddressV1meaddresses**
> BuyerAddress createAddressV1meaddresses(buyerAddress)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var buyerAddress = new OrderCloud.BuyerAddress(); // BuyerAddress | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAddressV1meaddresses(buyerAddress, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerAddress** | [**BuyerAddress**](BuyerAddress.md)|  | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCreditCardV1mecreditcards"></a>
# **createCreditCardV1mecreditcards**
> BuyerCreditCard createCreditCardV1mecreditcards(buyerCreditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var buyerCreditCard = new OrderCloud.BuyerCreditCard(); // BuyerCreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCreditCardV1mecreditcards(buyerCreditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerCreditCard** | [**BuyerCreditCard**](BuyerCreditCard.md)|  | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAddressV1meaddressesaddressID"></a>
# **deleteAddressV1meaddressesaddressID**
> deleteAddressV1meaddressesaddressID(addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAddressV1meaddressesaddressID(addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCreditCardV1mecreditcardscreditcardID"></a>
# **deleteCreditCardV1mecreditcardscreditcardID**
> deleteCreditCardV1mecreditcardscreditcardID(creditcardID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var creditcardID = "creditcardID_example"; // String | ID of the creditcard.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCreditCardV1mecreditcardscreditcardID(creditcardID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAddressV1meaddressesaddressID"></a>
# **getAddressV1meaddressesaddressID**
> BuyerAddress getAddressV1meaddressesaddressID(addressID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var addressID = "addressID_example"; // String | ID of the address.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressV1meaddressesaddressID(addressID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCatalogV1mecatalogscatalogID"></a>
# **getCatalogV1mecatalogscatalogID**
> Catalog getCatalogV1mecatalogscatalogID(catalogID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var catalogID = "catalogID_example"; // String | ID of the catalog.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogV1mecatalogscatalogID(catalogID, callback);
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

<a name="getCategoryV1mecategoriescategoryID"></a>
# **getCategoryV1mecategoriescategoryID**
> Category getCategoryV1mecategoriescategoryID(categoryID, catalogID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var categoryID = "categoryID_example"; // String | ID of the category.
var catalogID = "catalogID_example"; // String | ID of the catalog.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoryV1mecategoriescategoryID(categoryID, catalogID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryID** | **String**| ID of the category. | 
 **catalogID** | **String**| ID of the catalog. | 

### Return type

[**Category**](Category.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCreditCardV1mecreditcardscreditcardID"></a>
# **getCreditCardV1mecreditcardscreditcardID**
> BuyerCreditCard getCreditCardV1mecreditcardscreditcardID(creditcardID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var creditcardID = "creditcardID_example"; // String | ID of the creditcard.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCreditCardV1mecreditcardscreditcardID(creditcardID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductV1meproductsproductID"></a>
# **getProductV1meproductsproductID**
> BuyerProduct getProductV1meproductsproductID(productID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var productID = "productID_example"; // String | ID of the product.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductV1meproductsproductID(productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 

### Return type

[**BuyerProduct**](BuyerProduct.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPromotionV1mepromotionspromotionID"></a>
# **getPromotionV1mepromotionspromotionID**
> Promotion getPromotionV1mepromotionspromotionID(promotionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var promotionID = "promotionID_example"; // String | ID of the promotion.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPromotionV1mepromotionspromotionID(promotionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentV1meshipmentsshipmentID"></a>
# **getShipmentV1meshipmentsshipmentID**
> Shipment getShipmentV1meshipmentsshipmentID(shipmentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShipmentV1meshipmentsshipmentID(shipmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpecV1meproductsproductIDspecsspecID"></a>
# **getSpecV1meproductsproductIDspecsspecID**
> BuyerSpec getSpecV1meproductsproductIDspecsspecID(productID, specID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var productID = "productID_example"; // String | ID of the product.
var specID = "specID_example"; // String | ID of the spec.
var opts = {
  'catalogID': "catalogID_example" // String | ID of the catalog.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpecV1meproductsproductIDspecsspecID(productID, specID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **specID** | **String**| ID of the spec. | 
 **catalogID** | **String**| ID of the catalog. | [optional] 

### Return type

[**BuyerSpec**](BuyerSpec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpendingAccountV1mespendingaccountsspendingAccountID"></a>
# **getSpendingAccountV1mespendingaccountsspendingAccountID**
> SpendingAccount getSpendingAccountV1mespendingaccountsspendingAccountID(spendingAccountID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpendingAccountV1mespendingaccountsspendingAccountID(spendingAccountID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV1me"></a>
# **getV1me**
> MeUser getV1me()



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV1me(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MeUser**](MeUser.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAddressesV1meaddresses"></a>
# **listAddressesV1meaddresses**
> ListBuyerAddress listAddressesV1meaddresses(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listAddressesV1meaddresses(opts, callback);
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

[**ListBuyerAddress**](ListBuyerAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApprovableOrdersV1meordersapprovable"></a>
# **listApprovableOrdersV1meordersapprovable**
> ListOrder listApprovableOrdersV1meordersapprovable(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var opts = {
  'from': "from_example", // String | Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'to': "to_example", // String | Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
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
apiInstance.listApprovableOrdersV1meordersapprovable(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Lower bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **to** | **String**| Upper bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCatalogsV1mecatalogs"></a>
# **listCatalogsV1mecatalogs**
> ListCatalog listCatalogsV1mecatalogs(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listCatalogsV1mecatalogs(opts, callback);
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

<a name="listCategoriesV1mecategories"></a>
# **listCategoriesV1mecategories**
> ListCategory listCategoriesV1mecategories(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var opts = {
  'depth': "depth_example", // String | Depth of the category.
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'productID': "productID_example", // String | ID of the product.
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
apiInstance.listCategoriesV1mecategories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depth** | **String**| Depth of the category. | [optional] 
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
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

<a name="listCostCentersV1mecostcenters"></a>
# **listCostCentersV1mecostcenters**
> ListCostCenter listCostCentersV1mecostcenters(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listCostCentersV1mecostcenters(opts, callback);
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

[**ListCostCenter**](ListCostCenter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCreditCardsV1mecreditcards"></a>
# **listCreditCardsV1mecreditcards**
> ListBuyerCreditCard listCreditCardsV1mecreditcards(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listCreditCardsV1mecreditcards(opts, callback);
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

[**ListBuyerCreditCard**](ListBuyerCreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrdersV1meorders"></a>
# **listOrdersV1meorders**
> ListOrder listOrdersV1meorders(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var opts = {
  'from': "from_example", // String | Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'to': "to_example", // String | Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
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
apiInstance.listOrdersV1meorders(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Lower bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **to** | **String**| Upper bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProductsV1meproducts"></a>
# **listProductsV1meproducts**
> ListBuyerProduct listProductsV1meproducts(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var opts = {
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'categoryID': "categoryID_example", // String | ID of the category.
  'depth': "depth_example", // String | Depth of the product.
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
apiInstance.listProductsV1meproducts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **categoryID** | **String**| ID of the category. | [optional] 
 **depth** | **String**| Depth of the product. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListBuyerProduct**](ListBuyerProduct.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPromotionsV1mepromotions"></a>
# **listPromotionsV1mepromotions**
> ListPromotion listPromotionsV1mepromotions(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listPromotionsV1mepromotions(opts, callback);
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

[**ListPromotion**](ListPromotion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentItemsV1meshipmentsshipmentIDitems"></a>
# **listShipmentItemsV1meshipmentsshipmentIDitems**
> ListShipmentItem listShipmentItemsV1meshipmentsshipmentIDitems(shipmentID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var shipmentID = "shipmentID_example"; // String | ID of the shipment.
var opts = {
  'orderID': "orderID_example", // String | ID of the order.
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
apiInstance.listShipmentItemsV1meshipmentsshipmentIDitems(shipmentID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipmentItem**](ListShipmentItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShipmentsV1meshipments"></a>
# **listShipmentsV1meshipments**
> ListShipment listShipmentsV1meshipments(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var opts = {
  'orderID': "orderID_example", // String | ID of the order.
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
apiInstance.listShipmentsV1meshipments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipment**](ListShipment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSpecsV1meproductsproductIDspecs"></a>
# **listSpecsV1meproductsproductIDspecs**
> ListBuyerSpec listSpecsV1meproductsproductIDspecs(productID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var productID = "productID_example"; // String | ID of the product.
var opts = {
  'catalogID': "catalogID_example", // String | ID of the catalog.
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
apiInstance.listSpecsV1meproductsproductIDspecs(productID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**Object**](.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListBuyerSpec**](ListBuyerSpec.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSpendingAccountsV1mespendingAccounts"></a>
# **listSpendingAccountsV1mespendingAccounts**
> ListSpendingAccount listSpendingAccountsV1mespendingAccounts(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listSpendingAccountsV1mespendingAccounts(opts, callback);
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

[**ListSpendingAccount**](ListSpendingAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserGroupsV1meusergroups"></a>
# **listUserGroupsV1meusergroups**
> ListUserGroup listUserGroupsV1meusergroups(opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
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
apiInstance.listUserGroupsV1meusergroups(opts, callback);
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

[**ListUserGroup**](ListUserGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchAddressV1meaddressesaddressID"></a>
# **patchAddressV1meaddressesaddressID**
> patchAddressV1meaddressesaddressID(addressID, buyerAddress)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var addressID = "addressID_example"; // String | ID of the address.
var buyerAddress = new OrderCloud.BuyerAddress(); // BuyerAddress | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchAddressV1meaddressesaddressID(addressID, buyerAddress, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 
 **buyerAddress** | [**BuyerAddress**](BuyerAddress.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="patchCreditCardV1mecreditcardscreditcardID"></a>
# **patchCreditCardV1mecreditcardscreditcardID**
> patchCreditCardV1mecreditcardscreditcardID(creditcardID, buyerCreditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var creditcardID = "creditcardID_example"; // String | ID of the creditcard.
var buyerCreditCard = new OrderCloud.BuyerCreditCard(); // BuyerCreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchCreditCardV1mecreditcardscreditcardID(creditcardID, buyerCreditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 
 **buyerCreditCard** | [**BuyerCreditCard**](BuyerCreditCard.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="patchV1me"></a>
# **patchV1me**
> MeUser patchV1me(meUser)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var meUser = new OrderCloud.MeUser(); // MeUser | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchV1me(meUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meUser** | [**MeUser**](MeUser.md)|  | 

### Return type

[**MeUser**](MeUser.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerV1meregister"></a>
# **registerV1meregister**
> Authentication registerV1meregister(anonUserToken, meUser)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var anonUserToken = "anonUserToken_example"; // String | Anon user token of the user.
var meUser = new OrderCloud.MeUser(); // MeUser | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerV1meregister(anonUserToken, meUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anonUserToken** | **String**| Anon user token of the user. | 
 **meUser** | [**MeUser**](MeUser.md)|  | 

### Return type

[**Authentication**](Authentication.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordByTokenV1mepassword"></a>
# **resetPasswordByTokenV1mepassword**
> resetPasswordByTokenV1mepassword(tokenPasswordReset)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var tokenPasswordReset = new OrderCloud.TokenPasswordReset(); // TokenPasswordReset | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resetPasswordByTokenV1mepassword(tokenPasswordReset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenPasswordReset** | [**TokenPasswordReset**](TokenPasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="saveAddressV1meaddressesaddressID"></a>
# **saveAddressV1meaddressesaddressID**
> BuyerAddress saveAddressV1meaddressesaddressID(addressID, buyerAddress)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var addressID = "addressID_example"; // String | ID of the address.
var buyerAddress = new OrderCloud.BuyerAddress(); // BuyerAddress | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveAddressV1meaddressesaddressID(addressID, buyerAddress, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 
 **buyerAddress** | [**BuyerAddress**](BuyerAddress.md)|  | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveCreditCardV1mecreditcardscreditcardID"></a>
# **saveCreditCardV1mecreditcardscreditcardID**
> BuyerCreditCard saveCreditCardV1mecreditcardscreditcardID(creditcardID, buyerCreditCard)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var creditcardID = "creditcardID_example"; // String | ID of the creditcard.
var buyerCreditCard = new OrderCloud.BuyerCreditCard(); // BuyerCreditCard | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveCreditCardV1mecreditcardscreditcardID(creditcardID, buyerCreditCard, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 
 **buyerCreditCard** | [**BuyerCreditCard**](BuyerCreditCard.md)|  | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveV1me"></a>
# **saveV1me**
> MeUser saveV1me(meUser)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var meUser = new OrderCloud.MeUser(); // MeUser | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveV1me(meUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meUser** | [**MeUser**](MeUser.md)|  | 

### Return type

[**MeUser**](MeUser.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferAnonUserOrderV1meorders"></a>
# **transferAnonUserOrderV1meorders**
> transferAnonUserOrderV1meorders(anonUserToken)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MeApi();
var anonUserToken = "anonUserToken_example"; // String | Anon user token of the me.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.transferAnonUserOrderV1meorders(anonUserToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anonUserToken** | **String**| Anon user token of the me. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

