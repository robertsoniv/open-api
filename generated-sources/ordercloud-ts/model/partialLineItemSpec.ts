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


export class PartialLineItemSpec {
    'SpecID'?: string;
    'Name'?: string;
    'OptionID'?: string;
    'Value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SpecID",
            "baseName": "SpecID",
            "type": "string"
        },
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "OptionID",
            "baseName": "OptionID",
            "type": "string"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PartialLineItemSpec.attributeTypeMap;
    }
}

