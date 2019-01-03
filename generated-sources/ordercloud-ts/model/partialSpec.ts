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


export class PartialSpec {
    'OptionCount'?: number;
    'ID'?: string;
    'ListOrder'?: number;
    'Name'?: string;
    'DefaultValue'?: string;
    'Required'?: boolean;
    'AllowOpenText'?: boolean;
    'DefaultOptionID'?: string;
    'DefinesVariant'?: boolean;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "OptionCount",
            "baseName": "OptionCount",
            "type": "number"
        },
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "ListOrder",
            "baseName": "ListOrder",
            "type": "number"
        },
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "DefaultValue",
            "baseName": "DefaultValue",
            "type": "string"
        },
        {
            "name": "Required",
            "baseName": "Required",
            "type": "boolean"
        },
        {
            "name": "AllowOpenText",
            "baseName": "AllowOpenText",
            "type": "boolean"
        },
        {
            "name": "DefaultOptionID",
            "baseName": "DefaultOptionID",
            "type": "string"
        },
        {
            "name": "DefinesVariant",
            "baseName": "DefinesVariant",
            "type": "boolean"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PartialSpec.attributeTypeMap;
    }
}

