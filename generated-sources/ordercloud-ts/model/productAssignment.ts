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


export class ProductAssignment {
    'ProductID'?: string;
    'BuyerID'?: string;
    'UserGroupID'?: string;
    'PriceScheduleID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ProductID",
            "baseName": "ProductID",
            "type": "string"
        },
        {
            "name": "BuyerID",
            "baseName": "BuyerID",
            "type": "string"
        },
        {
            "name": "UserGroupID",
            "baseName": "UserGroupID",
            "type": "string"
        },
        {
            "name": "PriceScheduleID",
            "baseName": "PriceScheduleID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductAssignment.attributeTypeMap;
    }
}

