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
    instance = new OrderCloud.LineItemApi();
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

  describe('LineItemApi', function() {
    describe('createV1ordersdirectionorderIDlineitems', function() {
      it('should call createV1ordersdirectionorderIDlineitems successfully', function(done) {
        //uncomment below and update the code to test createV1ordersdirectionorderIDlineitems
        //instance.createV1ordersdirectionorderIDlineitems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1ordersdirectionorderIDlineitemslineItemID', function() {
      it('should call deleteV1ordersdirectionorderIDlineitemslineItemID successfully', function(done) {
        //uncomment below and update the code to test deleteV1ordersdirectionorderIDlineitemslineItemID
        //instance.deleteV1ordersdirectionorderIDlineitemslineItemID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1ordersdirectionorderIDlineitemslineItemID', function() {
      it('should call getV1ordersdirectionorderIDlineitemslineItemID successfully', function(done) {
        //uncomment below and update the code to test getV1ordersdirectionorderIDlineitemslineItemID
        //instance.getV1ordersdirectionorderIDlineitemslineItemID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1ordersdirectionorderIDlineitems', function() {
      it('should call listV1ordersdirectionorderIDlineitems successfully', function(done) {
        //uncomment below and update the code to test listV1ordersdirectionorderIDlineitems
        //instance.listV1ordersdirectionorderIDlineitems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto', function() {
      it('should call patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto successfully', function(done) {
        //uncomment below and update the code to test patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto
        //instance.patchShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1ordersdirectionorderIDlineitemslineItemID', function() {
      it('should call patchV1ordersdirectionorderIDlineitemslineItemID successfully', function(done) {
        //uncomment below and update the code to test patchV1ordersdirectionorderIDlineitemslineItemID
        //instance.patchV1ordersdirectionorderIDlineitemslineItemID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1ordersdirectionorderIDlineitemslineItemID', function() {
      it('should call saveV1ordersdirectionorderIDlineitemslineItemID successfully', function(done) {
        //uncomment below and update the code to test saveV1ordersdirectionorderIDlineitemslineItemID
        //instance.saveV1ordersdirectionorderIDlineitemslineItemID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto', function() {
      it('should call setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto successfully', function(done) {
        //uncomment below and update the code to test setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto
        //instance.setShippingAddressV1ordersdirectionorderIDlineitemslineItemIDshipto(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
