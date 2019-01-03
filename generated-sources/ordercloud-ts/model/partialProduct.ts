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

import { Inventory } from './inventory';

export class PartialProduct {
    'DefaultPriceScheduleID'?: string;
    'ID'?: string;
    'Name'?: string;
    'Description'?: string;
    'QuantityMultiplier'?: number;
    'ShipWeight'?: number;
    'ShipHeight'?: number;
    'ShipWidth'?: number;
    'ShipLength'?: number;
    'Active'?: boolean;
    'SpecCount'?: number;
    'Xp'?: any;
    'VariantCount'?: number;
    'ShipFromAddressID'?: string;
    'Inventory'?: Inventory;
    'DefaultSupplierID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DefaultPriceScheduleID",
            "baseName": "DefaultPriceScheduleID",
            "type": "string"
        },
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
            "name": "Active",
            "baseName": "Active",
            "type": "boolean"
        },
        {
            "name": "SpecCount",
            "baseName": "SpecCount",
            "type": "number"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        },
        {
            "name": "VariantCount",
            "baseName": "VariantCount",
            "type": "number"
        },
        {
            "name": "ShipFromAddressID",
            "baseName": "ShipFromAddressID",
            "type": "string"
        },
        {
            "name": "Inventory",
            "baseName": "Inventory",
            "type": "Inventory"
        },
        {
            "name": "DefaultSupplierID",
            "baseName": "DefaultSupplierID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PartialProduct.attributeTypeMap;
    }
}

