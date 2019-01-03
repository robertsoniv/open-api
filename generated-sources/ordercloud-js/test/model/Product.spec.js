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
    instance = new OrderCloud.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be.a(OrderCloud.Product);
    });

    it('should have the property defaultPriceScheduleID (base name: "DefaultPriceScheduleID")', function() {
      // uncomment below and update the code to test the property defaultPriceScheduleID
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property quantityMultiplier (base name: "QuantityMultiplier")', function() {
      // uncomment below and update the code to test the property quantityMultiplier
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property shipWeight (base name: "ShipWeight")', function() {
      // uncomment below and update the code to test the property shipWeight
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property shipHeight (base name: "ShipHeight")', function() {
      // uncomment below and update the code to test the property shipHeight
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property shipWidth (base name: "ShipWidth")', function() {
      // uncomment below and update the code to test the property shipWidth
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property shipLength (base name: "ShipLength")', function() {
      // uncomment below and update the code to test the property shipLength
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "Active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property specCount (base name: "SpecCount")', function() {
      // uncomment below and update the code to test the property specCount
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property variantCount (base name: "VariantCount")', function() {
      // uncomment below and update the code to test the property variantCount
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property shipFromAddressID (base name: "ShipFromAddressID")', function() {
      // uncomment below and update the code to test the property shipFromAddressID
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property inventory (base name: "Inventory")', function() {
      // uncomment below and update the code to test the property inventory
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

    it('should have the property defaultSupplierID (base name: "DefaultSupplierID")', function() {
      // uncomment below and update the code to test the property defaultSupplierID
      //var instance = new OrderCloud.Product();
      //expect(instance).to.be();
    });

  });

}));
