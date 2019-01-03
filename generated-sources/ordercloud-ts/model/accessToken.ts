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


export class AccessToken {
    'AccessToken'?: string;
    'ExpiresIn'?: number;
    'TokenType'?: string;
    'RefreshToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AccessToken",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "ExpiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "TokenType",
            "baseName": "token_type",
            "type": "string"
        },
        {
            "name": "RefreshToken",
            "baseName": "refresh_token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccessToken.attributeTypeMap;
    }
}

