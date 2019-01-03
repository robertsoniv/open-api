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
    instance = new OrderCloud.CategoryApi();
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

  describe('CategoryApi', function() {
    describe('createV1catalogscatalogIDcategories', function() {
      it('should call createV1catalogscatalogIDcategories successfully', function(done) {
        //uncomment below and update the code to test createV1catalogscatalogIDcategories
        //instance.createV1catalogscatalogIDcategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments', function() {
      it('should call deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments successfully', function(done) {
        //uncomment below and update the code to test deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments
        //instance.deleteAssignmentV1catalogscatalogIDcategoriescategoryIDassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID', function() {
      it('should call deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID successfully', function(done) {
        //uncomment below and update the code to test deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID
        //instance.deleteProductAssignmentV1catalogscatalogIDcategoriescategoryIDproductassignmentsproductID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1catalogscatalogIDcategoriescategoryID', function() {
      it('should call deleteV1catalogscatalogIDcategoriescategoryID successfully', function(done) {
        //uncomment below and update the code to test deleteV1catalogscatalogIDcategoriescategoryID
        //instance.deleteV1catalogscatalogIDcategoriescategoryID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1catalogscatalogIDcategoriescategoryID', function() {
      it('should call getV1catalogscatalogIDcategoriescategoryID successfully', function(done) {
        //uncomment below and update the code to test getV1catalogscatalogIDcategoriescategoryID
        //instance.getV1catalogscatalogIDcategoriescategoryID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssignmentsV1catalogscatalogIDcategoriesassignments', function() {
      it('should call listAssignmentsV1catalogscatalogIDcategoriesassignments successfully', function(done) {
        //uncomment below and update the code to test listAssignmentsV1catalogscatalogIDcategoriesassignments
        //instance.listAssignmentsV1catalogscatalogIDcategoriesassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments', function() {
      it('should call listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments successfully', function(done) {
        //uncomment below and update the code to test listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments
        //instance.listProductAssignmentsV1catalogscatalogIDcategoriesproductassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1catalogscatalogIDcategories', function() {
      it('should call listV1catalogscatalogIDcategories successfully', function(done) {
        //uncomment below and update the code to test listV1catalogscatalogIDcategories
        //instance.listV1catalogscatalogIDcategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1catalogscatalogIDcategoriescategoryID', function() {
      it('should call patchV1catalogscatalogIDcategoriescategoryID successfully', function(done) {
        //uncomment below and update the code to test patchV1catalogscatalogIDcategoriescategoryID
        //instance.patchV1catalogscatalogIDcategoriescategoryID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAssignmentV1catalogscatalogIDcategoriesassignments', function() {
      it('should call saveAssignmentV1catalogscatalogIDcategoriesassignments successfully', function(done) {
        //uncomment below and update the code to test saveAssignmentV1catalogscatalogIDcategoriesassignments
        //instance.saveAssignmentV1catalogscatalogIDcategoriesassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments', function() {
      it('should call saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments successfully', function(done) {
        //uncomment below and update the code to test saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments
        //instance.saveProductAssignmentV1catalogscatalogIDcategoriesproductassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1catalogscatalogIDcategoriescategoryID', function() {
      it('should call saveV1catalogscatalogIDcategoriescategoryID successfully', function(done) {
        //uncomment below and update the code to test saveV1catalogscatalogIDcategoriescategoryID
        //instance.saveV1catalogscatalogIDcategoriescategoryID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
