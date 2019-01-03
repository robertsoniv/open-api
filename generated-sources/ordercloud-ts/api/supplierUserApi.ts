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
import { AccessToken } from '../model/accessToken';
import { ImpersonateTokenRequest } from '../model/impersonateTokenRequest';
import { ListUser } from '../model/listUser';
import { User } from '../model/user';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SupplierUserApiApiKeys {
}

export class SupplierUserApi {
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

    public setApiKey(key: SupplierUserApiApiKeys, value: string) {
        (this.authentications as any)[SupplierUserApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param SupplierID ID of the supplier.
     * @param User 
     */
    public createV1supplierssupplierIDusers (SupplierID: string, User: User) : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling createV1supplierssupplierIDusers.');
        }

        // verify required parameter 'User' is not null or undefined
        if (User === null || User === undefined) {
            throw new Error('Required parameter User was null or undefined when calling createV1supplierssupplierIDusers.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(User, "User")
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
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "User");
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
     * @param SupplierID ID of the supplier.
     * @param UserID ID of the user.
     */
    public deleteV1supplierssupplierIDusersuserID (SupplierID: string, UserID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users/{userID}'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling deleteV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling deleteV1supplierssupplierIDusersuserID.');
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
     * @param SupplierID ID of the supplier.
     * @param UserID ID of the user.
     * @param ImpersonateTokenRequest 
     */
    public getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken (SupplierID: string, UserID: string, ImpersonateTokenRequest: ImpersonateTokenRequest) : Promise<{ response: http.ClientResponse; body: AccessToken;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users/{userID}/accesstoken'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken.');
        }

        // verify required parameter 'ImpersonateTokenRequest' is not null or undefined
        if (ImpersonateTokenRequest === null || ImpersonateTokenRequest === undefined) {
            throw new Error('Required parameter ImpersonateTokenRequest was null or undefined when calling getAccessTokenV1supplierssupplierIDusersuserIDaccesstoken.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ImpersonateTokenRequest, "ImpersonateTokenRequest")
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
        return new Promise<{ response: http.ClientResponse; body: AccessToken;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AccessToken");
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
     * @param SupplierID ID of the supplier.
     * @param UserID ID of the user.
     */
    public getV1supplierssupplierIDusersuserID (SupplierID: string, UserID: string) : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users/{userID}'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling getV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling getV1supplierssupplierIDusersuserID.');
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
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "User");
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
     * @param SupplierID ID of the supplier.
     * @param UserGroupID ID of the user group.
     * @param Search Word or phrase to search for.
     * @param SearchOn Comma-delimited list of fields to search on.
     * @param SortBy Comma-delimited list of fields to sort by.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     * @param Filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    public listV1supplierssupplierIDusers (SupplierID: string, UserGroupID?: string, Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListUser;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling listV1supplierssupplierIDusers.');
        }

        if (UserGroupID !== undefined) {
            localVarQueryParameters['userGroupID'] = ObjectSerializer.serialize(UserGroupID, "string");
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
        return new Promise<{ response: http.ClientResponse; body: ListUser;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListUser");
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
     * @param SupplierID ID of the supplier.
     * @param UserID ID of the user.
     * @param User 
     */
    public patchV1supplierssupplierIDusersuserID (SupplierID: string, UserID: string, User: User) : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users/{userID}'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling patchV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling patchV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'User' is not null or undefined
        if (User === null || User === undefined) {
            throw new Error('Required parameter User was null or undefined when calling patchV1supplierssupplierIDusersuserID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(User, "User")
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
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "User");
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
     * @param SupplierID ID of the supplier.
     * @param UserID ID of the user.
     * @param User 
     */
    public saveV1supplierssupplierIDusersuserID (SupplierID: string, UserID: string, User: User) : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/suppliers/{supplierID}/users/{userID}'
            .replace('{' + 'supplierID' + '}', encodeURIComponent(String(SupplierID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SupplierID' is not null or undefined
        if (SupplierID === null || SupplierID === undefined) {
            throw new Error('Required parameter SupplierID was null or undefined when calling saveV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling saveV1supplierssupplierIDusersuserID.');
        }

        // verify required parameter 'User' is not null or undefined
        if (User === null || User === undefined) {
            throw new Error('Required parameter User was null or undefined when calling saveV1supplierssupplierIDusersuserID.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(User, "User")
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
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "User");
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
