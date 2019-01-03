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


export class BuyerCreditCard {
    'ID'?: string;
    'Editable'?: boolean;
    'Token'?: string;
    'DateCreated'?: string;
    'CardType'?: string;
    'PartialAccountNumber'?: string;
    'CardholderName'?: string;
    'ExpirationDate'?: string;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "Editable",
            "baseName": "Editable",
            "type": "boolean"
        },
        {
            "name": "Token",
            "baseName": "Token",
            "type": "string"
        },
        {
            "name": "DateCreated",
            "baseName": "DateCreated",
            "type": "string"
        },
        {
            "name": "CardType",
            "baseName": "CardType",
            "type": "string"
        },
        {
            "name": "PartialAccountNumber",
            "baseName": "PartialAccountNumber",
            "type": "string"
        },
        {
            "name": "CardholderName",
            "baseName": "CardholderName",
            "type": "string"
        },
        {
            "name": "ExpirationDate",
            "baseName": "ExpirationDate",
            "type": "string"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return BuyerCreditCard.attributeTypeMap;
    }
}

