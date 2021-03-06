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

import { ListFacetValue } from './listFacetValue';

export class ListFacet {
    'Name'?: string;
    'XpPath'?: string;
    'Values'?: Array<ListFacetValue>;
    'Xp'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "XpPath",
            "baseName": "XpPath",
            "type": "string"
        },
        {
            "name": "Values",
            "baseName": "Values",
            "type": "Array<ListFacetValue>"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return ListFacet.attributeTypeMap;
    }
}

