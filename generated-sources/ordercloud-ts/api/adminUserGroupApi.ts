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
import { ListUserGroup } from '../model/listUserGroup';
import { ListUserGroupAssignment } from '../model/listUserGroupAssignment';
import { UserGroup } from '../model/userGroup';
import { UserGroupAssignment } from '../model/userGroupAssignment';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.ordercloud.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AdminUserGroupApiApiKeys {
}

export class AdminUserGroupApi {
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

    public setApiKey(key: AdminUserGroupApiApiKeys, value: string) {
        (this.authentications as any)[AdminUserGroupApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param UserGroup 
     */
    public createAdminUserGroups (UserGroup: UserGroup) : Promise<{ response: http.ClientResponse; body: UserGroup;  }> {
        const localVarPath = this.basePath + '/usergroups';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroup' is not null or undefined
        if (UserGroup === null || UserGroup === undefined) {
            throw new Error('Required parameter UserGroup was null or undefined when calling createAdminUserGroups.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(UserGroup, "UserGroup")
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
        return new Promise<{ response: http.ClientResponse; body: UserGroup;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UserGroup");
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
     * @param UserGroupID ID of the user group.
     */
    public deleteAdminUserGroups (UserGroupID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/usergroups/{userGroupID}'
            .replace('{' + 'userGroupID' + '}', encodeURIComponent(String(UserGroupID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupID' is not null or undefined
        if (UserGroupID === null || UserGroupID === undefined) {
            throw new Error('Required parameter UserGroupID was null or undefined when calling deleteAdminUserGroups.');
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
     * @param UserGroupID ID of the user group.
     * @param UserID ID of the user.
     */
    public deleteUserAssignmentAdminUserGroups (UserGroupID: string, UserID: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/usergroups/{userGroupID}/assignments/{userID}'
            .replace('{' + 'userGroupID' + '}', encodeURIComponent(String(UserGroupID)))
            .replace('{' + 'userID' + '}', encodeURIComponent(String(UserID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupID' is not null or undefined
        if (UserGroupID === null || UserGroupID === undefined) {
            throw new Error('Required parameter UserGroupID was null or undefined when calling deleteUserAssignmentAdminUserGroups.');
        }

        // verify required parameter 'UserID' is not null or undefined
        if (UserID === null || UserID === undefined) {
            throw new Error('Required parameter UserID was null or undefined when calling deleteUserAssignmentAdminUserGroups.');
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
     * @param UserGroupID ID of the user group.
     */
    public getAdminUserGroups (UserGroupID: string) : Promise<{ response: http.ClientResponse; body: UserGroup;  }> {
        const localVarPath = this.basePath + '/usergroups/{userGroupID}'
            .replace('{' + 'userGroupID' + '}', encodeURIComponent(String(UserGroupID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupID' is not null or undefined
        if (UserGroupID === null || UserGroupID === undefined) {
            throw new Error('Required parameter UserGroupID was null or undefined when calling getAdminUserGroups.');
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
        return new Promise<{ response: http.ClientResponse; body: UserGroup;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UserGroup");
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
    public listAdminUserGroups (Search?: string, SearchOn?: string, SortBy?: string, Page?: number, PageSize?: number, Filters?: any) : Promise<{ response: http.ClientResponse; body: ListUserGroup;  }> {
        const localVarPath = this.basePath + '/usergroups';
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
        return new Promise<{ response: http.ClientResponse; body: ListUserGroup;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListUserGroup");
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
     * @param UserGroupID ID of the user group.
     * @param UserID ID of the user.
     * @param Page Page of results to return. Default: 1
     * @param PageSize Number of results to return per page. Default: 20, max: 100.
     */
    public listUserAssignmentsAdminUserGroups (UserGroupID?: string, UserID?: string, Page?: number, PageSize?: number) : Promise<{ response: http.ClientResponse; body: ListUserGroupAssignment;  }> {
        const localVarPath = this.basePath + '/usergroups/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (UserGroupID !== undefined) {
            localVarQueryParameters['userGroupID'] = ObjectSerializer.serialize(UserGroupID, "string");
        }

        if (UserID !== undefined) {
            localVarQueryParameters['userID'] = ObjectSerializer.serialize(UserID, "string");
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
        return new Promise<{ response: http.ClientResponse; body: ListUserGroupAssignment;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ListUserGroupAssignment");
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
     * @param UserGroupID ID of the user group.
     * @param UserGroup 
     */
    public patchAdminUserGroups (UserGroupID: string, UserGroup: UserGroup) : Promise<{ response: http.ClientResponse; body: UserGroup;  }> {
        const localVarPath = this.basePath + '/usergroups/{userGroupID}'
            .replace('{' + 'userGroupID' + '}', encodeURIComponent(String(UserGroupID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupID' is not null or undefined
        if (UserGroupID === null || UserGroupID === undefined) {
            throw new Error('Required parameter UserGroupID was null or undefined when calling patchAdminUserGroups.');
        }

        // verify required parameter 'UserGroup' is not null or undefined
        if (UserGroup === null || UserGroup === undefined) {
            throw new Error('Required parameter UserGroup was null or undefined when calling patchAdminUserGroups.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(UserGroup, "UserGroup")
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
        return new Promise<{ response: http.ClientResponse; body: UserGroup;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UserGroup");
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
     * @param UserGroupID ID of the user group.
     * @param UserGroup 
     */
    public saveAdminUserGroups (UserGroupID: string, UserGroup: UserGroup) : Promise<{ response: http.ClientResponse; body: UserGroup;  }> {
        const localVarPath = this.basePath + '/usergroups/{userGroupID}'
            .replace('{' + 'userGroupID' + '}', encodeURIComponent(String(UserGroupID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupID' is not null or undefined
        if (UserGroupID === null || UserGroupID === undefined) {
            throw new Error('Required parameter UserGroupID was null or undefined when calling saveAdminUserGroups.');
        }

        // verify required parameter 'UserGroup' is not null or undefined
        if (UserGroup === null || UserGroup === undefined) {
            throw new Error('Required parameter UserGroup was null or undefined when calling saveAdminUserGroups.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(UserGroup, "UserGroup")
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
        return new Promise<{ response: http.ClientResponse; body: UserGroup;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UserGroup");
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
     * @param UserGroupAssignment 
     */
    public saveUserAssignmentAdminUserGroups (UserGroupAssignment: UserGroupAssignment) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/usergroups/assignments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'UserGroupAssignment' is not null or undefined
        if (UserGroupAssignment === null || UserGroupAssignment === undefined) {
            throw new Error('Required parameter UserGroupAssignment was null or undefined when calling saveUserAssignmentAdminUserGroups.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(UserGroupAssignment, "UserGroupAssignment")
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
