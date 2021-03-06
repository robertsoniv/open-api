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
    instance = new OrderCloud.ProductApi();
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

  describe('ProductApi', function() {
    describe('createV1products', function() {
      it('should call createV1products successfully', function(done) {
        //uncomment below and update the code to test createV1products
        //instance.createV1products(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssignmentV1productsproductIDassignmentsbuyerID', function() {
      it('should call deleteAssignmentV1productsproductIDassignmentsbuyerID successfully', function(done) {
        //uncomment below and update the code to test deleteAssignmentV1productsproductIDassignmentsbuyerID
        //instance.deleteAssignmentV1productsproductIDassignmentsbuyerID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV1productsproductID', function() {
      it('should call deleteV1productsproductID successfully', function(done) {
        //uncomment below and update the code to test deleteV1productsproductID
        //instance.deleteV1productsproductID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateVariantsV1productsproductIDvariantsgenerate', function() {
      it('should call generateVariantsV1productsproductIDvariantsgenerate successfully', function(done) {
        //uncomment below and update the code to test generateVariantsV1productsproductIDvariantsgenerate
        //instance.generateVariantsV1productsproductIDvariantsgenerate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV1productsproductID', function() {
      it('should call getV1productsproductID successfully', function(done) {
        //uncomment below and update the code to test getV1productsproductID
        //instance.getV1productsproductID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVariantV1productsproductIDvariantsvariantID', function() {
      it('should call getVariantV1productsproductIDvariantsvariantID successfully', function(done) {
        //uncomment below and update the code to test getVariantV1productsproductIDvariantsvariantID
        //instance.getVariantV1productsproductIDvariantsvariantID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssignmentsV1productsassignments', function() {
      it('should call listAssignmentsV1productsassignments successfully', function(done) {
        //uncomment below and update the code to test listAssignmentsV1productsassignments
        //instance.listAssignmentsV1productsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSuppliersV1productsproductIDsuppliers', function() {
      it('should call listSuppliersV1productsproductIDsuppliers successfully', function(done) {
        //uncomment below and update the code to test listSuppliersV1productsproductIDsuppliers
        //instance.listSuppliersV1productsproductIDsuppliers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listV1products', function() {
      it('should call listV1products successfully', function(done) {
        //uncomment below and update the code to test listV1products
        //instance.listV1products(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listVariantsV1productsproductIDvariants', function() {
      it('should call listVariantsV1productsproductIDvariants successfully', function(done) {
        //uncomment below and update the code to test listVariantsV1productsproductIDvariants
        //instance.listVariantsV1productsproductIDvariants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchV1productsproductID', function() {
      it('should call patchV1productsproductID successfully', function(done) {
        //uncomment below and update the code to test patchV1productsproductID
        //instance.patchV1productsproductID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchVariantV1productsproductIDvariantsvariantID', function() {
      it('should call patchVariantV1productsproductIDvariantsvariantID successfully', function(done) {
        //uncomment below and update the code to test patchVariantV1productsproductIDvariantsvariantID
        //instance.patchVariantV1productsproductIDvariantsvariantID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSupplierV1productsproductIDsupplierssupplierID', function() {
      it('should call removeSupplierV1productsproductIDsupplierssupplierID successfully', function(done) {
        //uncomment below and update the code to test removeSupplierV1productsproductIDsupplierssupplierID
        //instance.removeSupplierV1productsproductIDsupplierssupplierID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAssignmentV1productsassignments', function() {
      it('should call saveAssignmentV1productsassignments successfully', function(done) {
        //uncomment below and update the code to test saveAssignmentV1productsassignments
        //instance.saveAssignmentV1productsassignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveSupplierV1productsproductIDsupplierssupplierID', function() {
      it('should call saveSupplierV1productsproductIDsupplierssupplierID successfully', function(done) {
        //uncomment below and update the code to test saveSupplierV1productsproductIDsupplierssupplierID
        //instance.saveSupplierV1productsproductIDsupplierssupplierID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveV1productsproductID', function() {
      it('should call saveV1productsproductID successfully', function(done) {
        //uncomment below and update the code to test saveV1productsproductID
        //instance.saveV1productsproductID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveVariantV1productsproductIDvariantsvariantID', function() {
      it('should call saveVariantV1productsproductIDvariantsvariantID successfully', function(done) {
        //uncomment below and update the code to test saveVariantV1productsproductIDvariantsvariantID
        //instance.saveVariantV1productsproductIDvariantsvariantID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
