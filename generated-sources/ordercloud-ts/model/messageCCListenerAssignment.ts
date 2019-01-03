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

import { MessageSenderAssignment } from './messageSenderAssignment';

export class MessageCCListenerAssignment {
    'MessageSenderAssignment'?: MessageSenderAssignment;
    'MessageConfigName'?: string;
    'MessageConfigDescription'?: string;
    'MessageType'?: string;
    'BuyerID'?: string;
    'SupplierID'?: string;
    'UserGroupID'?: string;
    'UserID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageSenderAssignment",
            "baseName": "MessageSenderAssignment",
            "type": "MessageSenderAssignment"
        },
        {
            "name": "MessageConfigName",
            "baseName": "MessageConfigName",
            "type": "string"
        },
        {
            "name": "MessageConfigDescription",
            "baseName": "MessageConfigDescription",
            "type": "string"
        },
        {
            "name": "MessageType",
            "baseName": "MessageType",
            "type": "string"
        },
        {
            "name": "BuyerID",
            "baseName": "BuyerID",
            "type": "string"
        },
        {
            "name": "SupplierID",
            "baseName": "SupplierID",
            "type": "string"
        },
        {
            "name": "UserGroupID",
            "baseName": "UserGroupID",
            "type": "string"
        },
        {
            "name": "UserID",
            "baseName": "UserID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageCCListenerAssignment.attributeTypeMap;
    }
}
