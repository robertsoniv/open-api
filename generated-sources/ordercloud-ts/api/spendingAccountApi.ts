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
import { ListSpendingAccount } from '../model/listSpendingAccount';
import { ListSpendingAccountAssignment } from '../model/listSpendingAccountAssignment';
import { SpendingAccount } from '../model/spendingAccount';
import { SpendingAccountAssignment } from '../model/spendingAccountAssignment';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SpendingAccountApiApiKeys {
}

export class SpendingAccountApi {
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

    public setApiKey(key: SpendingAccountApiApiKeys, value: string) {
        (this.authentications as any)[SpendingAccountApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param BuyerID ID of the buyer.
     * @param SpendingAccount 
     */
    public createV1buyersbuyerIDspendingaccounts (BuyerID: string, SpendingAccount: SpendingAccount) : Promise<{ response: http.ClientResponse; body: SpendingAccount;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling createV1buyersbuyerIDspendingaccounts.');
        }

        // verify required parameter 'SpendingAccount' is not null or undefined
        if (SpendingAccount === null || SpendingAccount === undefined) {
            throw new Error('Required parameter SpendingAccount was null or undefined when calling createV1buyersbuyerIDspendingaccounts.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(SpendingAccount, "SpendingAccount")
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
        return new Promise<{ response: http.ClientResponse; body: SpendingAccount;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SpendingAccount");
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
     * @param SpendingAccountID ID of the spending account.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     */
    public deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments (BuyerID: string, SpendingAccountID: string, UserID?: string, UserGroupID?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)))
            .replace('{' + 'spendingAccountID' + '}', encodeURIComponent(String(SpendingAccountID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments.');
        }

        // verify required parameter 'SpendingAccountID' is not null or undefined
        if (SpendingAccountID === null || SpendingAccountID === undefined) {
            throw new Error('Required parameter SpendingAccountID was null or undefined when calling deleteAssignmentV1buyersbuyerIDspendingaccountsspendingAccountIDassignments.');
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
     * @param BuyerID ID of the buyer.
     * @param SpendingAccountID ID of the spending account.
     */
    public deleteV1buyersbuyerIDspendingaccountsspendingAccountID (BuyerID: string, SpendingAccountID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)))
            .replace('{' + 'spendingAccountID' + '}', encodeURIComponent(String(SpendingAccountID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling deleteV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccountID' is not null or undefined
        if (SpendingAccountID === null || SpendingAccountID === undefined) {
            throw new Error('Required parameter SpendingAccountID was null or undefined when calling deleteV1buyersbuyerIDspendingaccountsspendingAccountID.');
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
     * @param BuyerID ID of the buyer.
     * @param SpendingAccountID ID of the spending account.
     */
    public getV1buyersbuyerIDspendingaccountsspendingAccountID (BuyerID: string, SpendingAccountID: string) : Promise<{ response: http.ClientResponse; body: SpendingAccount;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)))
            .replace('{' + 'spendingAccountID' + '}', encodeURIComponent(String(SpendingAccountID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling getV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccountID' is not null or undefined
        if (SpendingAccountID === null || SpendingAccountID === undefined) {
            throw new Error('Required parameter SpendingAccountID was null or undefined when calling getV1buyersbuyerIDspendingaccountsspendingAccountID.');
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
        return new Promise<{ response: http.ClientResponse; body: SpendingAccount;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SpendingAccount");
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
     * @param SpendingAccountID ID of the spending account.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     * @param Level Level of the spending account assignment. Possible values: User, Group, Company.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     */
    public listAssignmentsV1buyersbuyerIDspendingaccountsassignments (BuyerID: string, SpendingAccountID?: string, UserID?: string, UserGroupID?: string, Level?: string, Page?: number, PageSize?: number) : Promise<{ response: http.ClientResponse; body: ListSpendingAccountAssignment;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/assignments'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling listAssignmentsV1buyersbuyerIDspendingaccountsassignments.');
        }

        if (SpendingAccountID !== undefined) {
            localVarQueryParameters['spendingAccountID'] = ObjectSerializer.serialize(SpendingAccountID, "string");
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
        return new Promise<{ response: http.ClientResponse; body: ListSpendingAccountAssignment;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListSpendingAccountAssignment");
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
     * @param Search Word or phrase to search for.
     * @param SearchOn Comma-delimited list of fields to search on.
     * @param SortBy Comma-delimited list of fields to sort by.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     * @param Filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    public listV1buyersbuyerIDspendingaccounts (BuyerID: string, Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListSpendingAccount;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling listV1buyersbuyerIDspendingaccounts.');
        }

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
        return new Promise<{ response: http.ClientResponse; body: ListSpendingAccount;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListSpendingAccount");
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
     * @param SpendingAccountID ID of the spending account.
     * @param SpendingAccount 
     */
    public patchV1buyersbuyerIDspendingaccountsspendingAccountID (BuyerID: string, SpendingAccountID: string, SpendingAccount: SpendingAccount) : Promise<{ response: http.ClientResponse; body: SpendingAccount;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)))
            .replace('{' + 'spendingAccountID' + '}', encodeURIComponent(String(SpendingAccountID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling patchV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccountID' is not null or undefined
        if (SpendingAccountID === null || SpendingAccountID === undefined) {
            throw new Error('Required parameter SpendingAccountID was null or undefined when calling patchV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccount' is not null or undefined
        if (SpendingAccount === null || SpendingAccount === undefined) {
            throw new Error('Required parameter SpendingAccount was null or undefined when calling patchV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(SpendingAccount, "SpendingAccount")
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
        return new Promise<{ response: http.ClientResponse; body: SpendingAccount;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SpendingAccount");
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
     * @param SpendingAccountAssignment 
     */
    public saveAssignmentV1buyersbuyerIDspendingaccountsassignments (BuyerID: string, SpendingAccountAssignment: SpendingAccountAssignment) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/assignments'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling saveAssignmentV1buyersbuyerIDspendingaccountsassignments.');
        }

        // verify required parameter 'SpendingAccountAssignment' is not null or undefined
        if (SpendingAccountAssignment === null || SpendingAccountAssignment === undefined) {
            throw new Error('Required parameter SpendingAccountAssignment was null or undefined when calling saveAssignmentV1buyersbuyerIDspendingaccountsassignments.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(SpendingAccountAssignment, "SpendingAccountAssignment")
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
     * @param BuyerID ID of the buyer.
     * @param SpendingAccountID ID of the spending account.
     * @param SpendingAccount 
     */
    public saveV1buyersbuyerIDspendingaccountsspendingAccountID (BuyerID: string, SpendingAccountID: string, SpendingAccount: SpendingAccount) : Promise<{ response: http.ClientResponse; body: SpendingAccount;  }> {
        const localVarPath = this.basePath + '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}'
            .replace('{' + 'buyerID' + '}', encodeURIComponent(String(BuyerID)))
            .replace('{' + 'spendingAccountID' + '}', encodeURIComponent(String(SpendingAccountID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'BuyerID' is not null or undefined
        if (BuyerID === null || BuyerID === undefined) {
            throw new Error('Required parameter BuyerID was null or undefined when calling saveV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccountID' is not null or undefined
        if (SpendingAccountID === null || SpendingAccountID === undefined) {
            throw new Error('Required parameter SpendingAccountID was null or undefined when calling saveV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }

        // verify required parameter 'SpendingAccount' is not null or undefined
        if (SpendingAccount === null || SpendingAccount === undefined) {
            throw new Error('Required parameter SpendingAccount was null or undefined when calling saveV1buyersbuyerIDspendingaccountsspendingAccountID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(SpendingAccount, "SpendingAccount")
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
        return new Promise<{ response: http.ClientResponse; body: SpendingAccount;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SpendingAccount");
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