/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');

/* tslint:disable:no-unused-locals */
import { ListProductFacet } from '../model/listProductFacet';
import { ProductFacet } from '../model/productFacet';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ProductFacetApiApiKeys {
}

export class ProductFacetApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ProductFacetApiApiKeys, value: string) {
        (this.authentications as any)[ProductFacetApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param ProductFacet 
     */
    public createProductFacets (ProductFacet: ProductFacet) : Promise<{ response: http.ClientResponse; body: ProductFacet;  }> {
        const localVarPath = this.basePath + '/productfacets';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ProductFacet' is not null or undefined
        if (ProductFacet === null || ProductFacet === undefined) {
            throw new Error('Required parameter ProductFacet was null or undefined when calling createProductFacets.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ProductFacet, "ProductFacet")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ProductFacet;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ProductFacet");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param ProductFacetID ID of the product facet.
     */
    public deleteProductFacets (ProductFacetID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/productfacets/{productFacetID}'
            .replace('{' + 'productFacetID' + '}', encodeURIComponent(String(ProductFacetID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ProductFacetID' is not null or undefined
        if (ProductFacetID === null || ProductFacetID === undefined) {
            throw new Error('Required parameter ProductFacetID was null or undefined when calling deleteProductFacets.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param ProductFacetID ID of the product facet.
     */
    public getProductFacets (ProductFacetID: string) : Promise<{ response: http.ClientResponse; body: ProductFacet;  }> {
        const localVarPath = this.basePath + '/productfacets/{productFacetID}'
            .replace('{' + 'productFacetID' + '}', encodeURIComponent(String(ProductFacetID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ProductFacetID' is not null or undefined
        if (ProductFacetID === null || ProductFacetID === undefined) {
            throw new Error('Required parameter ProductFacetID was null or undefined when calling getProductFacets.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ProductFacet;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ProductFacet");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param Search Word or phrase to search for.
     * @param SearchOn Comma-delimited list of fields to search on.
     * @param SortBy Comma-delimited list of fields to sort by.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     * @param Filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    public listProductFacets (Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListProductFacet;  }> {
        const localVarPath = this.basePath + '/productfacets';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (Search !== undefined) {
            localVarQueryParameters['search'] = ObjectSerializer.serialize(Search, "string");
        }

        if (SearchOn !== undefined) {
            localVarQueryParameters['searchOn'] = ObjectSerializer.serialize(SearchOn, "string");
        }

        if (SortBy !== undefined) {
            localVarQueryParameters['sortBy'] = ObjectSerializer.serialize(SortBy, "string");
        }

        if (Page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(Page, "number");
        }

        if (PageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(PageSize, "number");
        }

        if (Filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(Filters, "any");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ListProductFacet;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListProductFacet");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param ProductFacetID ID of the product facet.
     * @param ProductFacet 
     */
    public patchProductFacets (ProductFacetID: string, ProductFacet: ProductFacet) : Promise<{ response: http.ClientResponse; body: ProductFacet;  }> {
        const localVarPath = this.basePath + '/productfacets/{productFacetID}'
            .replace('{' + 'productFacetID' + '}', encodeURIComponent(String(ProductFacetID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ProductFacetID' is not null or undefined
        if (ProductFacetID === null || ProductFacetID === undefined) {
            throw new Error('Required parameter ProductFacetID was null or undefined when calling patchProductFacets.');
        }

        // verify required parameter 'ProductFacet' is not null or undefined
        if (ProductFacet === null || ProductFacet === undefined) {
            throw new Error('Required parameter ProductFacet was null or undefined when calling patchProductFacets.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ProductFacet, "ProductFacet")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ProductFacet;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ProductFacet");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param ProductFacetID ID of the product facet.
     * @param ProductFacet 
     */
    public saveProductFacets (ProductFacetID: string, ProductFacet: ProductFacet) : Promise<{ response: http.ClientResponse; body: ProductFacet;  }> {
        const localVarPath = this.basePath + '/productfacets/{productFacetID}'
            .replace('{' + 'productFacetID' + '}', encodeURIComponent(String(ProductFacetID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'ProductFacetID' is not null or undefined
        if (ProductFacetID === null || ProductFacetID === undefined) {
            throw new Error('Required parameter ProductFacetID was null or undefined when calling saveProductFacets.');
        }

        // verify required parameter 'ProductFacet' is not null or undefined
        if (ProductFacet === null || ProductFacet === undefined) {
            throw new Error('Required parameter ProductFacet was null or undefined when calling saveProductFacets.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ProductFacet, "ProductFacet")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: ProductFacet;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ProductFacet");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
