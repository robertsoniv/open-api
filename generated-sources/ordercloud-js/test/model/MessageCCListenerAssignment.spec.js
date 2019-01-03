/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.89
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.MessageCCListenerAssignment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MessageCCListenerAssignment', function() {
    it('should create an instance of MessageCCListenerAssignment', function() {
      // uncomment below and update the code to test MessageCCListenerAssignment
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be.a(OrderCloud.MessageCCListenerAssignment);
    });

    it('should have the property messageSenderAssignment (base name: "MessageSenderAssignment")', function() {
      // uncomment below and update the code to test the property messageSenderAssignment
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property messageConfigName (base name: "MessageConfigName")', function() {
      // uncomment below and update the code to test the property messageConfigName
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property messageConfigDescription (base name: "MessageConfigDescription")', function() {
      // uncomment below and update the code to test the property messageConfigDescription
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "MessageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property buyerID (base name: "BuyerID")', function() {
      // uncomment below and update the code to test the property buyerID
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property supplierID (base name: "SupplierID")', function() {
      // uncomment below and update the code to test the property supplierID
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property userGroupID (base name: "UserGroupID")', function() {
      // uncomment below and update the code to test the property userGroupID
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

    it('should have the property userID (base name: "UserID")', function() {
      // uncomment below and update the code to test the property userID
      //var instance = new OrderCloud.MessageCCListenerAssignment();
      //expect(instance).to.be();
    });

  });

}));
