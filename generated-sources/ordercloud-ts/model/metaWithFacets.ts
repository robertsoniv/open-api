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

import { ListFacet } from './listFacet';

export class MetaWithFacets {
    'Facets'?: Array<ListFacet>;
    'Page'?: number;
    'PageSize'?: number;
    'TotalCount'?: number;
    'TotalPages'?: number;
    'ItemRange'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Facets",
            "baseName": "Facets",
            "type": "Array<ListFacet>"
        },
        {
            "name": "Page",
            "baseName": "Page",
            "type": "number"
        },
        {
            "name": "PageSize",
            "baseName": "PageSize",
            "type": "number"
        },
        {
            "name": "TotalCount",
            "baseName": "TotalCount",
            "type": "number"
        },
        {
            "name": "TotalPages",
            "baseName": "TotalPages",
            "type": "number"
        },
        {
            "name": "ItemRange",
            "baseName": "ItemRange",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return MetaWithFacets.attributeTypeMap;
    }
}

