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


export class PartialPaymentTransaction {
    'ID'?: string;
    'Type'?: string;
    'DateExecuted'?: string;
    'Amount'?: number;
    'Succeeded'?: boolean;
    'ResultCode'?: string;
    'ResultMessage'?: string;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "Type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "DateExecuted",
            "baseName": "DateExecuted",
            "type": "string"
        },
        {
            "name": "Amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "Succeeded",
            "baseName": "Succeeded",
            "type": "boolean"
        },
        {
            "name": "ResultCode",
            "baseName": "ResultCode",
            "type": "string"
        },
        {
            "name": "ResultMessage",
            "baseName": "ResultMessage",
            "type": "string"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PartialPaymentTransaction.attributeTypeMap;
    }
}

