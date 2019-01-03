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
import { ListSecurityProfile } from '../model/listSecurityProfile';
import { ListSecurityProfileAssignment } from '../model/listSecurityProfileAssignment';
import { SecurityProfile } from '../model/securityProfile';
import { SecurityProfileAssignment } from '../model/securityProfileAssignment';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SecurityProfileApiApiKeys {
}

export class SecurityProfileApi {
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

    public setApiKey(key: SecurityProfileApiApiKeys, value: string) {
        (this.authentications as any)[SecurityProfileApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param SecurityProfileID ID of the security profile.
     * @param BuyerID ID of the buyer.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     * @param SupplierID ID of the supplier.
     */
    public deleteAssignmentV1securityprofilessecurityProfileIDassignments (SecurityProfileID: string, BuyerID?: string, UserID?: string, UserGroupID?: string, SupplierID?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/securityprofiles/{securityProfileID}/assignments'
            .replace('{' + 'securityProfileID' + '}', encodeURIComponent(String(SecurityProfileID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SecurityProfileID' is not null or undefined
        if (SecurityProfileID === null || SecurityProfileID === undefined) {
            throw new Error('Required parameter SecurityProfileID was null or undefined when calling deleteAssignmentV1securityprofilessecurityProfileIDassignments.');
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

        if (SupplierID !== undefined) {
            localVarQueryParameters['supplierID'] = ObjectSerializer.serialize(SupplierID, "string");
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
     * @param SecurityProfileID ID of the security profile.
     */
    public getV1securityprofilessecurityProfileID (SecurityProfileID: string) : Promise<{ response: http.ClientResponse; body: SecurityProfile;  }> {
        const localVarPath = this.basePath + '/securityprofiles/{securityProfileID}'
            .replace('{' + 'securityProfileID' + '}', encodeURIComponent(String(SecurityProfileID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SecurityProfileID' is not null or undefined
        if (SecurityProfileID === null || SecurityProfileID === undefined) {
            throw new Error('Required parameter SecurityProfileID was null or undefined when calling getV1securityprofilessecurityProfileID.');
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
        return new Promise<{ response: http.ClientResponse; body: SecurityProfile;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SecurityProfile");
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
     * @param SupplierID ID of the supplier.
     * @param SecurityProfileID ID of the security profile.
     * @param UserID ID of the user.
     * @param UserGroupID ID of the user group.
     * @param CommerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
     * @param Level Level of the security profile assignment. Possible values: User, Group, Company.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     */
    public listAssignmentsV1securityprofilesassignments (BuyerID?: string, SupplierID?: string, SecurityProfileID?: string, UserID?: string, UserGroupID?: string, CommerceRole?: string, Level?: string, Page?: number, PageSize?: number) : Promise<{ response: http.ClientResponse; body: ListSecurityProfileAssignment;  }> {
        const localVarPath = this.basePath + '/securityprofiles/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (BuyerID !== undefined) {
            localVarQueryParameters['buyerID'] = ObjectSerializer.serialize(BuyerID, "string");
        }

        if (SupplierID !== undefined) {
            localVarQueryParameters['supplierID'] = ObjectSerializer.serialize(SupplierID, "string");
        }

        if (SecurityProfileID !== undefined) {
            localVarQueryParameters['securityProfileID'] = ObjectSerializer.serialize(SecurityProfileID, "string");
        }

        if (UserID !== undefined) {
            localVarQueryParameters['userID'] = ObjectSerializer.serialize(UserID, "string");
        }

        if (UserGroupID !== undefined) {
            localVarQueryParameters['userGroupID'] = ObjectSerializer.serialize(UserGroupID, "string");
        }

        if (CommerceRole !== undefined) {
            localVarQueryParameters['commerceRole'] = ObjectSerializer.serialize(CommerceRole, "string");
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
        return new Promise<{ response: http.ClientResponse; body: ListSecurityProfileAssignment;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListSecurityProfileAssignment");
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
    public listV1securityprofiles (Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListSecurityProfile;  }> {
        const localVarPath = this.basePath + '/securityprofiles';
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
        return new Promise<{ response: http.ClientResponse; body: ListSecurityProfile;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListSecurityProfile");
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
     * @param SecurityProfileAssignment 
     */
    public saveAssignmentV1securityprofilesassignments (SecurityProfileAssignment: SecurityProfileAssignment) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/securityprofiles/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'SecurityProfileAssignment' is not null or undefined
        if (SecurityProfileAssignment === null || SecurityProfileAssignment === undefined) {
            throw new Error('Required parameter SecurityProfileAssignment was null or undefined when calling saveAssignmentV1securityprofilesassignments.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(SecurityProfileAssignment, "SecurityProfileAssignment")
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
}
