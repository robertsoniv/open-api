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

import { VariantInventory } from './variantInventory';

export class PartialVariant {
    'ID'?: string;
    'Name'?: string;
    'Description'?: string;
    'Active'?: boolean;
    'ShipWeight'?: number;
    'ShipHeight'?: number;
    'ShipWidth'?: number;
    'ShipLength'?: number;
    'Inventory'?: VariantInventory;
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
            "name": "Active",
            "baseName": "Active",
            "type": "boolean"
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
            "name": "Inventory",
            "baseName": "Inventory",
            "type": "VariantInventory"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PartialVariant.attributeTypeMap;
    }
}

