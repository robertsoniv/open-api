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
    instance = new OrderCloud.OrderApproval();
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

  describe('OrderApproval', function() {
    it('should create an instance of OrderApproval', function() {
      // uncomment below and update the code to test OrderApproval
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be.a(OrderCloud.OrderApproval);
    });

    it('should have the property approvalRuleID (base name: "ApprovalRuleID")', function() {
      // uncomment below and update the code to test the property approvalRuleID
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property approvingGroupID (base name: "ApprovingGroupID")', function() {
      // uncomment below and update the code to test the property approvingGroupID
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property allowResubmit (base name: "AllowResubmit")', function() {
      // uncomment below and update the code to test the property allowResubmit
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "DateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property dateCompleted (base name: "DateCompleted")', function() {
      // uncomment below and update the code to test the property dateCompleted
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property approver (base name: "Approver")', function() {
      // uncomment below and update the code to test the property approver
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "Comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new OrderCloud.OrderApproval();
      //expect(instance).to.be();
    });

  });

}));