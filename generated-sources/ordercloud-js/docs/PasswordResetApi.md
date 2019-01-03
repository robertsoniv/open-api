# OrderCloud.PasswordResetApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordByVerificationCodeV1passwordresetverificationCode**](PasswordResetApi.md#resetPasswordByVerificationCodeV1passwordresetverificationCode) | **PUT** /password/reset/{verificationCode} | 
[**sendVerificationCodeV1passwordreset**](PasswordResetApi.md#sendVerificationCodeV1passwordreset) | **POST** /password/reset | 


<a name="resetPasswordByVerificationCodeV1passwordresetverificationCode"></a>
# **resetPasswordByVerificationCodeV1passwordresetverificationCode**
> resetPasswordByVerificationCodeV1passwordresetverificationCode(verificationCode, passwordReset)



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
apiInstance.resetPasswordByVerificationCodeV1passwordresetverificationCode(verificationCode, passwordReset, callback);
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

<a name="sendVerificationCodeV1passwordreset"></a>
# **sendVerificationCodeV1passwordreset**
> sendVerificationCodeV1passwordreset(passwordResetRequest)



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
apiInstance.sendVerificationCodeV1passwordreset(passwordResetRequest, callback);
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

