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


export class Category {
    'ID'?: string;
    'Name'?: string;
    'Description'?: string;
    'ListOrder'?: number;
    'Active'?: boolean;
    'ParentID'?: string;
    'ChildCount'?: number;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "Description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "ListOrder",
            "baseName": "ListOrder",
            "type": "number"
        },
        {
            "name": "Active",
            "baseName": "Active",
            "type": "boolean"
        },
        {
            "name": "ParentID",
            "baseName": "ParentID",
            "type": "string"
        },
        {
            "name": "ChildCount",
            "baseName": "ChildCount",
            "type": "number"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }
}

