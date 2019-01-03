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


export class BuyerAddress {
    'ID'?: string;
    'Shipping'?: boolean;
    'Billing'?: boolean;
    'Editable'?: boolean;
    'DateCreated'?: string;
    'CompanyName'?: string;
    'FirstName'?: string;
    'LastName'?: string;
    'Street1'?: string;
    'Street2'?: string;
    'City'?: string;
    'State'?: string;
    'Zip'?: string;
    'Country'?: string;
    'Phone'?: string;
    'AddressName'?: string;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "Shipping",
            "baseName": "Shipping",
            "type": "boolean"
        },
        {
            "name": "Billing",
            "baseName": "Billing",
            "type": "boolean"
        },
        {
            "name": "Editable",
            "baseName": "Editable",
            "type": "boolean"
        },
        {
            "name": "DateCreated",
            "baseName": "DateCreated",
            "type": "string"
        },
        {
            "name": "CompanyName",
            "baseName": "CompanyName",
            "type": "string"
        },
        {
            "name": "FirstName",
            "baseName": "FirstName",
            "type": "string"
        },
        {
            "name": "LastName",
            "baseName": "LastName",
            "type": "string"
        },
        {
            "name": "Street1",
            "baseName": "Street1",
            "type": "string"
        },
        {
            "name": "Street2",
            "baseName": "Street2",
            "type": "string"
        },
        {
            "name": "City",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "State",
            "baseName": "State",
            "type": "string"
        },
        {
            "name": "Zip",
            "baseName": "Zip",
            "type": "string"
        },
        {
            "name": "Country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "Phone",
            "baseName": "Phone",
            "type": "string"
        },
        {
            "name": "AddressName",
            "baseName": "AddressName",
            "type": "string"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return BuyerAddress.attributeTypeMap;
    }
}

