/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PasswordReset', 'model/PasswordResetRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PasswordReset'), require('../model/PasswordResetRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PasswordResetApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.PasswordReset, root.OrderCloud.PasswordResetRequest);
  }
}(this, function(ApiClient, PasswordReset, PasswordResetRequest) {
  'use strict';

  /**
   * PasswordReset service.
   * @module api/PasswordResetApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PasswordResetApi. 
   * @alias module:api/PasswordResetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resetPasswordByVerificationCodePasswordResets operation.
     * @callback module:api/PasswordResetApi~resetPasswordByVerificationCodePasswordResetsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} verificationCode Verification code of the password reset.
     * @param {module:model/PasswordReset} passwordReset 
     * @param {module:api/PasswordResetApi~resetPasswordByVerificationCodePasswordResetsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.resetPasswordByVerificationCodePasswordResets = function(verificationCode, passwordReset, callback) {
      var postBody = passwordReset;

      // verify the required parameter 'verificationCode' is set
      if (verificationCode === undefined || verificationCode === null) {
        throw new Error("Missing the required parameter 'verificationCode' when calling resetPasswordByVerificationCodePasswordResets");
      }

      // verify the required parameter 'passwordReset' is set
      if (passwordReset === undefined || passwordReset === null) {
        throw new Error("Missing the required parameter 'passwordReset' when calling resetPasswordByVerificationCodePasswordResets");
      }


      var pathParams = {
        'verificationCode': verificationCode
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/password/reset/{verificationCode}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendVerificationCodePasswordResets operation.
     * @callback module:api/PasswordResetApi~sendVerificationCodePasswordResetsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PasswordResetRequest} passwordResetRequest 
     * @param {module:api/PasswordResetApi~sendVerificationCodePasswordResetsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendVerificationCodePasswordResets = function(passwordResetRequest, callback) {
      var postBody = passwordResetRequest;

      // verify the required parameter 'passwordResetRequest' is set
      if (passwordResetRequest === undefined || passwordResetRequest === null) {
        throw new Error("Missing the required parameter 'passwordResetRequest' when calling sendVerificationCodePasswordResets");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/password/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
