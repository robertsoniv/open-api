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

import { PaymentTransaction } from './paymentTransaction';

export class PartialPayment {
    'ID'?: string;
    'Type'?: string;
    'DateCreated'?: string;
    'CreditCardID'?: string;
    'SpendingAccountID'?: string;
    'Description'?: string;
    'Amount'?: number;
    'Accepted'?: boolean;
    'Xp'?: any;
    'Transactions'?: Array<PaymentTransaction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "Type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "DateCreated",
            "baseName": "DateCreated",
            "type": "string"
        },
        {
            "name": "CreditCardID",
            "baseName": "CreditCardID",
            "type": "string"
        },
        {
            "name": "SpendingAccountID",
            "baseName": "SpendingAccountID",
            "type": "string"
        },
        {
            "name": "Description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "Amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "Accepted",
            "baseName": "Accepted",
            "type": "boolean"
        },
        {
            "name": "Xp",
            "baseName": "xp",
            "type": "any"
        },
        {
            "name": "Transactions",
            "baseName": "Transactions",
            "type": "Array<PaymentTransaction>"
        }    ];

    static getAttributeTypeMap() {
        return PartialPayment.attributeTypeMap;
    }
}

