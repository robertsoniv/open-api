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
    instance = new OrderCloud.PromotionApi();
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

  describe('PromotionApi', function() {
    describe('createV1promotions', function() {
      it('should call createV1promotions successfully', function(done) {
        //uncomment below and update the code to test createV1promotions
        //instance.createV1promotions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssignmentV1promotionspromotionIDassignments', function() {
      it('should call deleteAssignmentV1promotionspromotionIDassignments successfully', function(done) {
        //uncomment below and update the code to test deleteAssignmentV1promotionspromotionIDassignments
        //instance.deleteAssignmentV1promotionspromotionIDassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1promotionspromotionID', function() {
      it('should call deleteV1promotionspromotionID successfully', function(done) {
        //uncomment below and update the code to test deleteV1promotionspromotionID
        //instance.deleteV1promotionspromotionID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1promotionspromotionID', function() {
      it('should call getV1promotionspromotionID successfully', function(done) {
        //uncomment below and update the code to test getV1promotionspromotionID
        //instance.getV1promotionspromotionID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssignmentsV1promotionsassignments', function() {
      it('should call listAssignmentsV1promotionsassignments successfully', function(done) {
        //uncomment below and update the code to test listAssignmentsV1promotionsassignments
        //instance.listAssignmentsV1promotionsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1promotions', function() {
      it('should call listV1promotions successfully', function(done) {
        //uncomment below and update the code to test listV1promotions
        //instance.listV1promotions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1promotionspromotionID', function() {
      it('should call patchV1promotionspromotionID successfully', function(done) {
        //uncomment below and update the code to test patchV1promotionspromotionID
        //instance.patchV1promotionspromotionID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAssignmentV1promotionsassignments', function() {
      it('should call saveAssignmentV1promotionsassignments successfully', function(done) {
        //uncomment below and update the code to test saveAssignmentV1promotionsassignments
        //instance.saveAssignmentV1promotionsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1promotionspromotionID', function() {
      it('should call saveV1promotionspromotionID successfully', function(done) {
        //uncomment below and update the code to test saveV1promotionspromotionID
        //instance.saveV1promotionspromotionID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
