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


export class Inventory {
    'Enabled'?: boolean;
    'NotificationPoint'?: number;
    'VariantLevelTracking'?: boolean;
    'OrderCanExceed'?: boolean;
    'QuantityAvailable'?: number;
    'LastUpdated'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Enabled",
            "baseName": "Enabled",
            "type": "boolean"
        },
        {
            "name": "NotificationPoint",
            "baseName": "NotificationPoint",
            "type": "number"
        },
        {
            "name": "VariantLevelTracking",
            "baseName": "VariantLevelTracking",
            "type": "boolean"
        },
        {
            "name": "OrderCanExceed",
            "baseName": "OrderCanExceed",
            "type": "boolean"
        },
        {
            "name": "QuantityAvailable",
            "baseName": "QuantityAvailable",
            "type": "number"
        },
        {
            "name": "LastUpdated",
            "baseName": "LastUpdated",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Inventory.attributeTypeMap;
    }
}

