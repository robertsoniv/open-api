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

import { CategoryProductAssignment } from './categoryProductAssignment';
import { Meta } from './meta';

export class ListCategoryProductAssignment {
    'Items'?: Array<CategoryProductAssignment>;
    'Meta'?: Meta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Items",
            "baseName": "Items",
            "type": "Array<CategoryProductAssignment>"
        },
        {
            "name": "Meta",
            "baseName": "Meta",
            "type": "Meta"
        }    ];

    static getAttributeTypeMap() {
        return ListCategoryProductAssignment.attributeTypeMap;
    }
}

