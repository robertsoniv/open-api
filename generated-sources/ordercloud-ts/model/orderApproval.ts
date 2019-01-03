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

import { User } from './user';

export class OrderApproval {
    'ApprovalRuleID'?: string;
    'ApprovingGroupID'?: string;
    'Status'?: string;
    'AllowResubmit'?: boolean;
    'DateCreated'?: string;
    'DateCompleted'?: string;
    'Approver'?: User;
    'Comments'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ApprovalRuleID",
            "baseName": "ApprovalRuleID",
            "type": "string"
        },
        {
            "name": "ApprovingGroupID",
            "baseName": "ApprovingGroupID",
            "type": "string"
        },
        {
            "name": "Status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "AllowResubmit",
            "baseName": "AllowResubmit",
            "type": "boolean"
        },
        {
            "name": "DateCreated",
            "baseName": "DateCreated",
            "type": "string"
        },
        {
            "name": "DateCompleted",
            "baseName": "DateCompleted",
            "type": "string"
        },
        {
            "name": "Approver",
            "baseName": "Approver",
            "type": "User"
        },
        {
            "name": "Comments",
            "baseName": "Comments",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderApproval.attributeTypeMap;
    }
}

