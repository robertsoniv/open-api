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

import { MessageCCListenerAssignment } from './messageCCListenerAssignment';
import { Meta } from './meta';

export class ListMessageCCListenerAssignment {
    'Items'?: Array<MessageCCListenerAssignment>;
    'Meta'?: Meta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Items",
            "baseName": "Items",
            "type": "Array<MessageCCListenerAssignment>"
        },
        {
            "name": "Meta",
            "baseName": "Meta",
            "type": "Meta"
        }    ];

    static getAttributeTypeMap() {
        return ListMessageCCListenerAssignment.attributeTypeMap;
    }
}

