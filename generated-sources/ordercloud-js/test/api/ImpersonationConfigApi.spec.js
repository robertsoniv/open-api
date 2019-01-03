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
    instance = new OrderCloud.ImpersonationConfigApi();
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

  describe('ImpersonationConfigApi', function() {
    describe('createV1impersonationconfig', function() {
      it('should call createV1impersonationconfig successfully', function(done) {
        //uncomment below and update the code to test createV1impersonationconfig
        //instance.createV1impersonationconfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1impersonationconfigimpersonationConfigID', function() {
      it('should call deleteV1impersonationconfigimpersonationConfigID successfully', function(done) {
        //uncomment below and update the code to test deleteV1impersonationconfigimpersonationConfigID
        //instance.deleteV1impersonationconfigimpersonationConfigID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1impersonationconfigimpersonationConfigID', function() {
      it('should call getV1impersonationconfigimpersonationConfigID successfully', function(done) {
        //uncomment below and update the code to test getV1impersonationconfigimpersonationConfigID
        //instance.getV1impersonationconfigimpersonationConfigID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1impersonationconfig', function() {
      it('should call listV1impersonationconfig successfully', function(done) {
        //uncomment below and update the code to test listV1impersonationconfig
        //instance.listV1impersonationconfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1impersonationconfigimpersonationConfigID', function() {
      it('should call patchV1impersonationconfigimpersonationConfigID successfully', function(done) {
        //uncomment below and update the code to test patchV1impersonationconfigimpersonationConfigID
        //instance.patchV1impersonationconfigimpersonationConfigID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1impersonationconfigimpersonationConfigID', function() {
      it('should call saveV1impersonationconfigimpersonationConfigID successfully', function(done) {
        //uncomment below and update the code to test saveV1impersonationconfigimpersonationConfigID
        //instance.saveV1impersonationconfigimpersonationConfigID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));