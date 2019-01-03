# OrderCloud.PasswordResetApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordByVerificationCodePasswordResets**](PasswordResetApi.md#resetPasswordByVerificationCodePasswordResets) | **PUT** /password/reset/{verificationCode} | 
[**sendVerificationCodePasswordResets**](PasswordResetApi.md#sendVerificationCodePasswordResets) | **POST** /password/reset | 


<a name="resetPasswordByVerificationCodePasswordResets"></a>
# **resetPasswordByVerificationCodePasswordResets**
> resetPasswordByVerificationCodePasswordResets(verificationCode, passwordReset)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResetApi();
var verificationCode = "verificationCode_example"; // String | Verification code of the password reset.
var passwordReset = new OrderCloud.PasswordReset(); // PasswordReset | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resetPasswordByVerificationCodePasswordResets(verificationCode, passwordReset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationCode** | **String**| Verification code of the password reset. | 
 **passwordReset** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="sendVerificationCodePasswordResets"></a>
# **sendVerificationCodePasswordResets**
> sendVerificationCodePasswordResets(passwordResetRequest)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResetApi();
var passwordResetRequest = new OrderCloud.PasswordResetRequest(); // PasswordResetRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendVerificationCodePasswordResets(passwordResetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetRequest** | [**PasswordResetRequest**](PasswordResetRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

