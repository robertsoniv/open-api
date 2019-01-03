export * from './accessToken';
export * from './address';
export * from './addressAssignment';
export * from './apiClient';
export * from './apiClientAssignment';
export * from './approvalRule';
export * from './authentication';
export * from './buyer';
export * from './buyerAddress';
export * from './buyerCreditCard';
export * from './buyerProduct';
export * from './buyerSpec';
export * from './catalog';
export * from './catalogAssignment';
export * from './category';
export * from './categoryAssignment';
export * from './categoryProductAssignment';
export * from './costCenter';
export * from './costCenterAssignment';
export * from './creditCard';
export * from './creditCardAssignment';
export * from './impersonateTokenRequest';
export * from './impersonationConfig';
export * from './incrementor';
export * from './inventory';
export * from './lineItem';
export * from './lineItemProduct';
export * from './lineItemSpec';
export * from './lineItemVariant';
export * from './listAddress';
export * from './listAddressAssignment';
export * from './listApiClient';
export * from './listApiClientAssignment';
export * from './listApprovalRule';
export * from './listBuyer';
export * from './listBuyerAddress';
export * from './listBuyerCreditCard';
export * from './listBuyerProduct';
export * from './listBuyerSpec';
export * from './listCatalog';
export * from './listCatalogAssignment';
export * from './listCategory';
export * from './listCategoryAssignment';
export * from './listCategoryProductAssignment';
export * from './listCostCenter';
export * from './listCostCenterAssignment';
export * from './listCreditCard';
export * from './listCreditCardAssignment';
export * from './listFacet';
export * from './listFacetValue';
export * from './listImpersonationConfig';
export * from './listIncrementor';
export * from './listLineItem';
export * from './listMessageCCListenerAssignment';
export * from './listMessageSender';
export * from './listMessageSenderAssignment';
export * from './listOrder';
export * from './listOrderApproval';
export * from './listOrderPromotion';
export * from './listPayment';
export * from './listPriceSchedule';
export * from './listProduct';
export * from './listProductAssignment';
export * from './listProductCatalogAssignment';
export * from './listProductFacet';
export * from './listPromotion';
export * from './listPromotionAssignment';
export * from './listSecurityProfile';
export * from './listSecurityProfileAssignment';
export * from './listShipment';
export * from './listShipmentItem';
export * from './listSpec';
export * from './listSpecOption';
export * from './listSpecProductAssignment';
export * from './listSpendingAccount';
export * from './listSpendingAccountAssignment';
export * from './listSupplier';
export * from './listUser';
export * from './listUserGroup';
export * from './listUserGroupAssignment';
export * from './listVariant';
export * from './meBuyer';
export * from './meSupplier';
export * from './meUser';
export * from './messageCCListenerAssignment';
export * from './messageSender';
export * from './messageSenderAssignment';
export * from './meta';
export * from './metaWithFacets';
export * from './order';
export * from './orderApproval';
export * from './orderApprovalInfo';
export * from './orderPromotion';
export * from './partialAddress';
export * from './partialApiClient';
export * from './partialApprovalRule';
export * from './partialBuyer';
export * from './partialBuyerAddress';
export * from './partialBuyerCreditCard';
export * from './partialCatalog';
export * from './partialCategory';
export * from './partialCostCenter';
export * from './partialCreditCard';
export * from './partialImpersonationConfig';
export * from './partialIncrementor';
export * from './partialInventory';
export * from './partialLineItem';
export * from './partialLineItemProduct';
export * from './partialLineItemSpec';
export * from './partialLineItemVariant';
export * from './partialMeBuyer';
export * from './partialMeSupplier';
export * from './partialMeUser';
export * from './partialOrder';
export * from './partialPayment';
export * from './partialPaymentTransaction';
export * from './partialPriceBreak';
export * from './partialPriceSchedule';
export * from './partialProduct';
export * from './partialProductFacet';
export * from './partialPromotion';
export * from './partialShipment';
export * from './partialSpec';
export * from './partialSpecOption';
export * from './partialSpendingAccount';
export * from './partialSupplier';
export * from './partialUser';
export * from './partialUserGroup';
export * from './partialVariant';
export * from './partialVariantInventory';
export * from './passwordReset';
export * from './passwordResetRequest';
export * from './payment';
export * from './paymentTransaction';
export * from './priceBreak';
export * from './priceSchedule';
export * from './product';
export * from './productAssignment';
export * from './productCatalogAssignment';
export * from './productFacet';
export * from './promotion';
export * from './promotionAssignment';
export * from './securityProfile';
export * from './securityProfileAssignment';
export * from './shipment';
export * from './shipmentItem';
export * from './spec';
export * from './specOption';
export * from './specProductAssignment';
export * from './spendingAccount';
export * from './spendingAccountAssignment';
export * from './supplier';
export * from './tokenPasswordReset';
export * from './user';
export * from './userGroup';
export * from './userGroupAssignment';
export * from './variant';
export * from './variantInventory';

import localVarRequest = require('request');

import { AccessToken } from './accessToken';
import { Address } from './address';
import { AddressAssignment } from './addressAssignment';
import { ApiClient } from './apiClient';
import { ApiClientAssignment } from './apiClientAssignment';
import { ApprovalRule } from './approvalRule';
import { Authentication } from './authentication';
import { Buyer } from './buyer';
import { BuyerAddress } from './buyerAddress';
import { BuyerCreditCard } from './buyerCreditCard';
import { BuyerProduct } from './buyerProduct';
import { BuyerSpec } from './buyerSpec';
import { Catalog } from './catalog';
import { CatalogAssignment } from './catalogAssignment';
import { Category } from './category';
import { CategoryAssignment } from './categoryAssignment';
import { CategoryProductAssignment } from './categoryProductAssignment';
import { CostCenter } from './costCenter';
import { CostCenterAssignment } from './costCenterAssignment';
import { CreditCard } from './creditCard';
import { CreditCardAssignment } from './creditCardAssignment';
import { ImpersonateTokenRequest } from './impersonateTokenRequest';
import { ImpersonationConfig } from './impersonationConfig';
import { Incrementor } from './incrementor';
import { Inventory } from './inventory';
import { LineItem } from './lineItem';
import { LineItemProduct } from './lineItemProduct';
import { LineItemSpec } from './lineItemSpec';
import { LineItemVariant } from './lineItemVariant';
import { ListAddress } from './listAddress';
import { ListAddressAssignment } from './listAddressAssignment';
import { ListApiClient } from './listApiClient';
import { ListApiClientAssignment } from './listApiClientAssignment';
import { ListApprovalRule } from './listApprovalRule';
import { ListBuyer } from './listBuyer';
import { ListBuyerAddress } from './listBuyerAddress';
import { ListBuyerCreditCard } from './listBuyerCreditCard';
import { ListBuyerProduct } from './listBuyerProduct';
import { ListBuyerSpec } from './listBuyerSpec';
import { ListCatalog } from './listCatalog';
import { ListCatalogAssignment } from './listCatalogAssignment';
import { ListCategory } from './listCategory';
import { ListCategoryAssignment } from './listCategoryAssignment';
import { ListCategoryProductAssignment } from './listCategoryProductAssignment';
import { ListCostCenter } from './listCostCenter';
import { ListCostCenterAssignment } from './listCostCenterAssignment';
import { ListCreditCard } from './listCreditCard';
import { ListCreditCardAssignment } from './listCreditCardAssignment';
import { ListFacet } from './listFacet';
import { ListFacetValue } from './listFacetValue';
import { ListImpersonationConfig } from './listImpersonationConfig';
import { ListIncrementor } from './listIncrementor';
import { ListLineItem } from './listLineItem';
import { ListMessageCCListenerAssignment } from './listMessageCCListenerAssignment';
import { ListMessageSender } from './listMessageSender';
import { ListMessageSenderAssignment } from './listMessageSenderAssignment';
import { ListOrder } from './listOrder';
import { ListOrderApproval } from './listOrderApproval';
import { ListOrderPromotion } from './listOrderPromotion';
import { ListPayment } from './listPayment';
import { ListPriceSchedule } from './listPriceSchedule';
import { ListProduct } from './listProduct';
import { ListProductAssignment } from './listProductAssignment';
import { ListProductCatalogAssignment } from './listProductCatalogAssignment';
import { ListProductFacet } from './listProductFacet';
import { ListPromotion } from './listPromotion';
import { ListPromotionAssignment } from './listPromotionAssignment';
import { ListSecurityProfile } from './listSecurityProfile';
import { ListSecurityProfileAssignment } from './listSecurityProfileAssignment';
import { ListShipment } from './listShipment';
import { ListShipmentItem } from './listShipmentItem';
import { ListSpec } from './listSpec';
import { ListSpecOption } from './listSpecOption';
import { ListSpecProductAssignment } from './listSpecProductAssignment';
import { ListSpendingAccount } from './listSpendingAccount';
import { ListSpendingAccountAssignment } from './listSpendingAccountAssignment';
import { ListSupplier } from './listSupplier';
import { ListUser } from './listUser';
import { ListUserGroup } from './listUserGroup';
import { ListUserGroupAssignment } from './listUserGroupAssignment';
import { ListVariant } from './listVariant';
import { MeBuyer } from './meBuyer';
import { MeSupplier } from './meSupplier';
import { MeUser } from './meUser';
import { MessageCCListenerAssignment } from './messageCCListenerAssignment';
import { MessageSender } from './messageSender';
import { MessageSenderAssignment } from './messageSenderAssignment';
import { Meta } from './meta';
import { MetaWithFacets } from './metaWithFacets';
import { Order } from './order';
import { OrderApproval } from './orderApproval';
import { OrderApprovalInfo } from './orderApprovalInfo';
import { OrderPromotion } from './orderPromotion';
import { PartialAddress } from './partialAddress';
import { PartialApiClient } from './partialApiClient';
import { PartialApprovalRule } from './partialApprovalRule';
import { PartialBuyer } from './partialBuyer';
import { PartialBuyerAddress } from './partialBuyerAddress';
import { PartialBuyerCreditCard } from './partialBuyerCreditCard';
import { PartialCatalog } from './partialCatalog';
import { PartialCategory } from './partialCategory';
import { PartialCostCenter } from './partialCostCenter';
import { PartialCreditCard } from './partialCreditCard';
import { PartialImpersonationConfig } from './partialImpersonationConfig';
import { PartialIncrementor } from './partialIncrementor';
import { PartialInventory } from './partialInventory';
import { PartialLineItem } from './partialLineItem';
import { PartialLineItemProduct } from './partialLineItemProduct';
import { PartialLineItemSpec } from './partialLineItemSpec';
import { PartialLineItemVariant } from './partialLineItemVariant';
import { PartialMeBuyer } from './partialMeBuyer';
import { PartialMeSupplier } from './partialMeSupplier';
import { PartialMeUser } from './partialMeUser';
import { PartialOrder } from './partialOrder';
import { PartialPayment } from './partialPayment';
import { PartialPaymentTransaction } from './partialPaymentTransaction';
import { PartialPriceBreak } from './partialPriceBreak';
import { PartialPriceSchedule } from './partialPriceSchedule';
import { PartialProduct } from './partialProduct';
import { PartialProductFacet } from './partialProductFacet';
import { PartialPromotion } from './partialPromotion';
import { PartialShipment } from './partialShipment';
import { PartialSpec } from './partialSpec';
import { PartialSpecOption } from './partialSpecOption';
import { PartialSpendingAccount } from './partialSpendingAccount';
import { PartialSupplier } from './partialSupplier';
import { PartialUser } from './partialUser';
import { PartialUserGroup } from './partialUserGroup';
import { PartialVariant } from './partialVariant';
import { PartialVariantInventory } from './partialVariantInventory';
import { PasswordReset } from './passwordReset';
import { PasswordResetRequest } from './passwordResetRequest';
import { Payment } from './payment';
import { PaymentTransaction } from './paymentTransaction';
import { PriceBreak } from './priceBreak';
import { PriceSchedule } from './priceSchedule';
import { Product } from './product';
import { ProductAssignment } from './productAssignment';
import { ProductCatalogAssignment } from './productCatalogAssignment';
import { ProductFacet } from './productFacet';
import { Promotion } from './promotion';
import { PromotionAssignment } from './promotionAssignment';
import { SecurityProfile } from './securityProfile';
import { SecurityProfileAssignment } from './securityProfileAssignment';
import { Shipment } from './shipment';
import { ShipmentItem } from './shipmentItem';
import { Spec } from './spec';
import { SpecOption } from './specOption';
import { SpecProductAssignment } from './specProductAssignment';
import { SpendingAccount } from './spendingAccount';
import { SpendingAccountAssignment } from './spendingAccountAssignment';
import { Supplier } from './supplier';
import { TokenPasswordReset } from './tokenPasswordReset';
import { User } from './user';
import { UserGroup } from './userGroup';
import { UserGroupAssignment } from './userGroupAssignment';
import { Variant } from './variant';
import { VariantInventory } from './variantInventory';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AccessToken": AccessToken,
    "Address": Address,
    "AddressAssignment": AddressAssignment,
    "ApiClient": ApiClient,
    "ApiClientAssignment": ApiClientAssignment,
    "ApprovalRule": ApprovalRule,
    "Authentication": Authentication,
    "Buyer": Buyer,
    "BuyerAddress": BuyerAddress,
    "BuyerCreditCard": BuyerCreditCard,
    "BuyerProduct": BuyerProduct,
    "BuyerSpec": BuyerSpec,
    "Catalog": Catalog,
    "CatalogAssignment": CatalogAssignment,
    "Category": Category,
    "CategoryAssignment": CategoryAssignment,
    "CategoryProductAssignment": CategoryProductAssignment,
    "CostCenter": CostCenter,
    "CostCenterAssignment": CostCenterAssignment,
    "CreditCard": CreditCard,
    "CreditCardAssignment": CreditCardAssignment,
    "ImpersonateTokenRequest": ImpersonateTokenRequest,
    "ImpersonationConfig": ImpersonationConfig,
    "Incrementor": Incrementor,
    "Inventory": Inventory,
    "LineItem": LineItem,
    "LineItemProduct": LineItemProduct,
    "LineItemSpec": LineItemSpec,
    "LineItemVariant": LineItemVariant,
    "ListAddress": ListAddress,
    "ListAddressAssignment": ListAddressAssignment,
    "ListApiClient": ListApiClient,
    "ListApiClientAssignment": ListApiClientAssignment,
    "ListApprovalRule": ListApprovalRule,
    "ListBuyer": ListBuyer,
    "ListBuyerAddress": ListBuyerAddress,
    "ListBuyerCreditCard": ListBuyerCreditCard,
    "ListBuyerProduct": ListBuyerProduct,
    "ListBuyerSpec": ListBuyerSpec,
    "ListCatalog": ListCatalog,
    "ListCatalogAssignment": ListCatalogAssignment,
    "ListCategory": ListCategory,
    "ListCategoryAssignment": ListCategoryAssignment,
    "ListCategoryProductAssignment": ListCategoryProductAssignment,
    "ListCostCenter": ListCostCenter,
    "ListCostCenterAssignment": ListCostCenterAssignment,
    "ListCreditCard": ListCreditCard,
    "ListCreditCardAssignment": ListCreditCardAssignment,
    "ListFacet": ListFacet,
    "ListFacetValue": ListFacetValue,
    "ListImpersonationConfig": ListImpersonationConfig,
    "ListIncrementor": ListIncrementor,
    "ListLineItem": ListLineItem,
    "ListMessageCCListenerAssignment": ListMessageCCListenerAssignment,
    "ListMessageSender": ListMessageSender,
    "ListMessageSenderAssignment": ListMessageSenderAssignment,
    "ListOrder": ListOrder,
    "ListOrderApproval": ListOrderApproval,
    "ListOrderPromotion": ListOrderPromotion,
    "ListPayment": ListPayment,
    "ListPriceSchedule": ListPriceSchedule,
    "ListProduct": ListProduct,
    "ListProductAssignment": ListProductAssignment,
    "ListProductCatalogAssignment": ListProductCatalogAssignment,
    "ListProductFacet": ListProductFacet,
    "ListPromotion": ListPromotion,
    "ListPromotionAssignment": ListPromotionAssignment,
    "ListSecurityProfile": ListSecurityProfile,
    "ListSecurityProfileAssignment": ListSecurityProfileAssignment,
    "ListShipment": ListShipment,
    "ListShipmentItem": ListShipmentItem,
    "ListSpec": ListSpec,
    "ListSpecOption": ListSpecOption,
    "ListSpecProductAssignment": ListSpecProductAssignment,
    "ListSpendingAccount": ListSpendingAccount,
    "ListSpendingAccountAssignment": ListSpendingAccountAssignment,
    "ListSupplier": ListSupplier,
    "ListUser": ListUser,
    "ListUserGroup": ListUserGroup,
    "ListUserGroupAssignment": ListUserGroupAssignment,
    "ListVariant": ListVariant,
    "MeBuyer": MeBuyer,
    "MeSupplier": MeSupplier,
    "MeUser": MeUser,
    "MessageCCListenerAssignment": MessageCCListenerAssignment,
    "MessageSender": MessageSender,
    "MessageSenderAssignment": MessageSenderAssignment,
    "Meta": Meta,
    "MetaWithFacets": MetaWithFacets,
    "Order": Order,
    "OrderApproval": OrderApproval,
    "OrderApprovalInfo": OrderApprovalInfo,
    "OrderPromotion": OrderPromotion,
    "PartialAddress": PartialAddress,
    "PartialApiClient": PartialApiClient,
    "PartialApprovalRule": PartialApprovalRule,
    "PartialBuyer": PartialBuyer,
    "PartialBuyerAddress": PartialBuyerAddress,
    "PartialBuyerCreditCard": PartialBuyerCreditCard,
    "PartialCatalog": PartialCatalog,
    "PartialCategory": PartialCategory,
    "PartialCostCenter": PartialCostCenter,
    "PartialCreditCard": PartialCreditCard,
    "PartialImpersonationConfig": PartialImpersonationConfig,
    "PartialIncrementor": PartialIncrementor,
    "PartialInventory": PartialInventory,
    "PartialLineItem": PartialLineItem,
    "PartialLineItemProduct": PartialLineItemProduct,
    "PartialLineItemSpec": PartialLineItemSpec,
    "PartialLineItemVariant": PartialLineItemVariant,
    "PartialMeBuyer": PartialMeBuyer,
    "PartialMeSupplier": PartialMeSupplier,
    "PartialMeUser": PartialMeUser,
    "PartialOrder": PartialOrder,
    "PartialPayment": PartialPayment,
    "PartialPaymentTransaction": PartialPaymentTransaction,
    "PartialPriceBreak": PartialPriceBreak,
    "PartialPriceSchedule": PartialPriceSchedule,
    "PartialProduct": PartialProduct,
    "PartialProductFacet": PartialProductFacet,
    "PartialPromotion": PartialPromotion,
    "PartialShipment": PartialShipment,
    "PartialSpec": PartialSpec,
    "PartialSpecOption": PartialSpecOption,
    "PartialSpendingAccount": PartialSpendingAccount,
    "PartialSupplier": PartialSupplier,
    "PartialUser": PartialUser,
    "PartialUserGroup": PartialUserGroup,
    "PartialVariant": PartialVariant,
    "PartialVariantInventory": PartialVariantInventory,
    "PasswordReset": PasswordReset,
    "PasswordResetRequest": PasswordResetRequest,
    "Payment": Payment,
    "PaymentTransaction": PaymentTransaction,
    "PriceBreak": PriceBreak,
    "PriceSchedule": PriceSchedule,
    "Product": Product,
    "ProductAssignment": ProductAssignment,
    "ProductCatalogAssignment": ProductCatalogAssignment,
    "ProductFacet": ProductFacet,
    "Promotion": Promotion,
    "PromotionAssignment": PromotionAssignment,
    "SecurityProfile": SecurityProfile,
    "SecurityProfileAssignment": SecurityProfileAssignment,
    "Shipment": Shipment,
    "ShipmentItem": ShipmentItem,
    "Spec": Spec,
    "SpecOption": SpecOption,
    "SpecProductAssignment": SpecProductAssignment,
    "SpendingAccount": SpendingAccount,
    "SpendingAccountAssignment": SpendingAccountAssignment,
    "Supplier": Supplier,
    "TokenPasswordReset": TokenPasswordReset,
    "User": User,
    "UserGroup": UserGroup,
    "UserGroupAssignment": UserGroupAssignment,
    "Variant": Variant,
    "VariantInventory": VariantInventory,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}