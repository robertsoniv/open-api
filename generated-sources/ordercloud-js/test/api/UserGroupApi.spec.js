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
    instance = new OrderCloud.UserGroupApi();
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

  describe('UserGroupApi', function() {
    describe('createV1buyersbuyerIDusergroups', function() {
      it('should call createV1buyersbuyerIDusergroups successfully', function(done) {
        //uncomment below and update the code to test createV1buyersbuyerIDusergroups
        //instance.createV1buyersbuyerIDusergroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID', function() {
      it('should call deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID successfully', function(done) {
        //uncomment below and update the code to test deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID
        //instance.deleteUserAssignmentV1buyersbuyerIDusergroupsuserGroupIDassignmentsuserID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1buyersbuyerIDusergroupsuserGroupID', function() {
      it('should call deleteV1buyersbuyerIDusergroupsuserGroupID successfully', function(done) {
        //uncomment below and update the code to test deleteV1buyersbuyerIDusergroupsuserGroupID
        //instance.deleteV1buyersbuyerIDusergroupsuserGroupID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1buyersbuyerIDusergroupsuserGroupID', function() {
      it('should call getV1buyersbuyerIDusergroupsuserGroupID successfully', function(done) {
        //uncomment below and update the code to test getV1buyersbuyerIDusergroupsuserGroupID
        //instance.getV1buyersbuyerIDusergroupsuserGroupID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUserAssignmentsV1buyersbuyerIDusergroupsassignments', function() {
      it('should call listUserAssignmentsV1buyersbuyerIDusergroupsassignments successfully', function(done) {
        //uncomment below and update the code to test listUserAssignmentsV1buyersbuyerIDusergroupsassignments
        //instance.listUserAssignmentsV1buyersbuyerIDusergroupsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1buyersbuyerIDusergroups', function() {
      it('should call listV1buyersbuyerIDusergroups successfully', function(done) {
        //uncomment below and update the code to test listV1buyersbuyerIDusergroups
        //instance.listV1buyersbuyerIDusergroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1buyersbuyerIDusergroupsuserGroupID', function() {
      it('should call patchV1buyersbuyerIDusergroupsuserGroupID successfully', function(done) {
        //uncomment below and update the code to test patchV1buyersbuyerIDusergroupsuserGroupID
        //instance.patchV1buyersbuyerIDusergroupsuserGroupID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveUserAssignmentV1buyersbuyerIDusergroupsassignments', function() {
      it('should call saveUserAssignmentV1buyersbuyerIDusergroupsassignments successfully', function(done) {
        //uncomment below and update the code to test saveUserAssignmentV1buyersbuyerIDusergroupsassignments
        //instance.saveUserAssignmentV1buyersbuyerIDusergroupsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1buyersbuyerIDusergroupsuserGroupID', function() {
      it('should call saveV1buyersbuyerIDusergroupsuserGroupID successfully', function(done) {
        //uncomment below and update the code to test saveV1buyersbuyerIDusergroupsuserGroupID
        //instance.saveV1buyersbuyerIDusergroupsuserGroupID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));