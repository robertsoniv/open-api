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


export class CreditCardAssignment {
    'CreditCardID'?: string;
    'UserID'?: string;
    'UserGroupID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CreditCardID",
            "baseName": "CreditCardID",
            "type": "string"
        },
        {
            "name": "UserID",
            "baseName": "UserID",
            "type": "string"
        },
        {
            "name": "UserGroupID",
            "baseName": "UserGroupID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreditCardAssignment.attributeTypeMap;
    }
}
