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


export class PartialLineItemProduct {
    'ID'?: string;
    'Name'?: string;
    'Description'?: string;
    'QuantityMultiplier'?: number;
    'ShipWeight'?: number;
    'ShipHeight'?: number;
    'ShipWidth'?: number;
    'ShipLength'?: number;
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
            "name": "QuantityMultiplier",
            "baseName": "QuantityMultiplier",
            "type": "number"
        },
        {
            "name": "ShipWeight",
            "baseName": "ShipWeight",
            "type": "number"
        },
        {
            "name": "ShipHeight",
            "baseName": "ShipHeight",
            "type": "number"
        },
        {
            "name": "ShipWidth",
            "baseName": "ShipWidth",
            "type": "number"
        },
        {
            "name": "ShipLength",
            "baseName": "ShipLength",
            "type": "number"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PartialLineItemProduct.attributeTypeMap;
    }
}

