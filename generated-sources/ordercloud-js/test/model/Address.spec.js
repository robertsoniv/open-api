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
    instance = new OrderCloud.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be.a(OrderCloud.Address);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "DateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "CompanyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property street1 (base name: "Street1")', function() {
      // uncomment below and update the code to test the property street1
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property street2 (base name: "Street2")', function() {
      // uncomment below and update the code to test the property street2
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "State")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "Zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "Phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property addressName (base name: "AddressName")', function() {
      // uncomment below and update the code to test the property addressName
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instance = new OrderCloud.Address();
      //expect(instance).to.be();
    });

  });

}));
