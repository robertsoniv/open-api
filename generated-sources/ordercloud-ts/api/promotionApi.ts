/**
 * OrderCloud
 * OrderCloud is an awesome C# platform API for making eCommerce applications. It is NOT a complete solution. It's designed to be used as the backend component with various other integrations and services.
 *
 * OpenAPI spec version: 1.0.89
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
import { ListPromotion } from '../model/listPromotion';
import { ListPromotionAssignment } from '../model/listPromotionAssignment';
import { Promotion } from '../model/promotion';
import { PromotionAssignment } from '../model/promotionAssignment';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PromotionApiApiKeys {
}

export class PromotionApi {
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

    public setApiKey(key: PromotionApiApiKeys, value: string) {
        (this.authentications as any)[PromotionApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param Promotion 
     */
    public createV1promotions (Promotion: Promotion) : Promise<{ response: http.ClientResponse; body: Promotion;  }> {
        const localVarPath = this.basePath + '/promotions';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'Promotion' is not null or undefined
        if (Promotion === null || Promotion === undefined) {
            throw new Error('Required parameter Promotion was null or undefined when calling createV1promotions.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(Promotion, "Promotion")
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
        return new Promise<{ response: http.ClientResponse; body: Promotion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Promotion");
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
     * @param PromotionID ID of the promotion.
     * @param BuyerID ID of the buyer.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     */
    public deleteAssignmentV1promotionspromotionIDassignments (PromotionID: string, BuyerID: string, UserID?: string, UserGroupID?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/promotions/{promotionID}/assignments'
            .replace('{' + 'promotionID' + '}', encodeURIComponent(String(PromotionID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionID' is not null or undefined
        if (PromotionID === null || PromotionID === undefined) {
            throw new Error('Required parameter PromotionID was null or undefined when calling deleteAssignmentV1promotionspromotionIDassignments.');
        }

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling deleteAssignmentV1promotionspromotionIDassignments.');
        }

        if (BuyerID !== undefined) {
            localVarQueryParameters['buyerID'] = ObjectSerializer.serialize(BuyerID, "string");
        }

        if (UserID !== undefined) {
            localVarQueryParameters['userID'] = ObjectSerializer.serialize(UserID, "string");
        }

        if (UserGroupID !== undefined) {
            localVarQueryParameters['userGroupID'] = ObjectSerializer.serialize(UserGroupID, "string");
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
     * @param PromotionID ID of the promotion.
     */
    public deleteV1promotionspromotionID (PromotionID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/promotions/{promotionID}'
            .replace('{' + 'promotionID' + '}', encodeURIComponent(String(PromotionID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionID' is not null or undefined
        if (PromotionID === null || PromotionID === undefined) {
            throw new Error('Required parameter PromotionID was null or undefined when calling deleteV1promotionspromotionID.');
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
     * @param PromotionID ID of the promotion.
     */
    public getV1promotionspromotionID (PromotionID: string) : Promise<{ response: http.ClientResponse; body: Promotion;  }> {
        const localVarPath = this.basePath + '/promotions/{promotionID}'
            .replace('{' + 'promotionID' + '}', encodeURIComponent(String(PromotionID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionID' is not null or undefined
        if (PromotionID === null || PromotionID === undefined) {
            throw new Error('Required parameter PromotionID was null or undefined when calling getV1promotionspromotionID.');
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
        return new Promise<{ response: http.ClientResponse; body: Promotion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Promotion");
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
     * @param BuyerID ID of the buyer.
     * @param PromotionID ID of the promotion.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     * @param Level Level of the promotion assignment. Possible values: User, Group, Company.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     */
    public listAssignmentsV1promotionsassignments (BuyerID?: string, PromotionID?: string, UserID?: string, UserGroupID?: string, Level?: string, Page?: number, PageSize?: number) : Promise<{ response: http.ClientResponse; body: ListPromotionAssignment;  }> {
        const localVarPath = this.basePath + '/promotions/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (BuyerID !== undefined) {
            localVarQueryParameters['buyerID'] = ObjectSerializer.serialize(BuyerID, "string");
        }

        if (PromotionID !== undefined) {
            localVarQueryParameters['promotionID'] = ObjectSerializer.serialize(PromotionID, "string");
        }

        if (UserID !== undefined) {
            localVarQueryParameters['userID'] = ObjectSerializer.serialize(UserID, "string");
        }

        if (UserGroupID !== undefined) {
            localVarQueryParameters['userGroupID'] = ObjectSerializer.serialize(UserGroupID, "string");
        }

        if (Level !== undefined) {
            localVarQueryParameters['level'] = ObjectSerializer.serialize(Level, "string");
        }

        if (Page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(Page, "number");
        }

        if (PageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(PageSize, "number");
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
        return new Promise<{ response: http.ClientResponse; body: ListPromotionAssignment;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListPromotionAssignment");
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
    public listV1promotions (Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListPromotion;  }> {
        const localVarPath = this.basePath + '/promotions';
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
        return new Promise<{ response: http.ClientResponse; body: ListPromotion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListPromotion");
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
     * @param PromotionID ID of the promotion.
     * @param Promotion 
     */
    public patchV1promotionspromotionID (PromotionID: string, Promotion: Promotion) : Promise<{ response: http.ClientResponse; body: Promotion;  }> {
        const localVarPath = this.basePath + '/promotions/{promotionID}'
            .replace('{' + 'promotionID' + '}', encodeURIComponent(String(PromotionID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionID' is not null or undefined
        if (PromotionID === null || PromotionID === undefined) {
            throw new Error('Required parameter PromotionID was null or undefined when calling patchV1promotionspromotionID.');
        }

        // verify required parameter 'Promotion' is not null or undefined
        if (Promotion === null || Promotion === undefined) {
            throw new Error('Required parameter Promotion was null or undefined when calling patchV1promotionspromotionID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(Promotion, "Promotion")
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
        return new Promise<{ response: http.ClientResponse; body: Promotion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Promotion");
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
     * @param PromotionAssignment 
     */
    public saveAssignmentV1promotionsassignments (PromotionAssignment: PromotionAssignment) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/promotions/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionAssignment' is not null or undefined
        if (PromotionAssignment === null || PromotionAssignment === undefined) {
            throw new Error('Required parameter PromotionAssignment was null or undefined when calling saveAssignmentV1promotionsassignments.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(PromotionAssignment, "PromotionAssignment")
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
     * @param PromotionID ID of the promotion.
     * @param Promotion 
     */
    public saveV1promotionspromotionID (PromotionID: string, Promotion: Promotion) : Promise<{ response: http.ClientResponse; body: Promotion;  }> {
        const localVarPath = this.basePath + '/promotions/{promotionID}'
            .replace('{' + 'promotionID' + '}', encodeURIComponent(String(PromotionID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'PromotionID' is not null or undefined
        if (PromotionID === null || PromotionID === undefined) {
            throw new Error('Required parameter PromotionID was null or undefined when calling saveV1promotionspromotionID.');
        }

        // verify required parameter 'Promotion' is not null or undefined
        if (Promotion === null || Promotion === undefined) {
            throw new Error('Required parameter Promotion was null or undefined when calling saveV1promotionspromotionID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(Promotion, "Promotion")
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
        return new Promise<{ response: http.ClientResponse; body: Promotion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Promotion");
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
