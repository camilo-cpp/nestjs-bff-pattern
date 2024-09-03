
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Client {
    id?: Nullable<string>;
    address?: Nullable<string>;
    blocked?: Nullable<string>;
    cellPhone?: Nullable<string>;
    channel?: Nullable<string>;
    clientId?: Nullable<string>;
    country?: Nullable<string>;
    customerGroup?: Nullable<CustomerGroup>;
    customerSchema?: Nullable<number>;
    distrChan?: Nullable<string>;
    division?: Nullable<string>;
    fiscalCode1?: Nullable<string>;
    fiscalCode2?: Nullable<string>;
    frequency?: Nullable<boolean>;
    frequencyDays?: Nullable<string>;
    idPortfolio?: Nullable<string>;
    immediateDelivery?: Nullable<boolean>;
    industryCode?: Nullable<string>;
    industryCode1?: Nullable<string>;
    isEnrollment?: Nullable<boolean>;
    name?: Nullable<string>;
    name2?: Nullable<string>;
    office?: Nullable<string>;
    paymentCondition?: Nullable<string>;
    paymentMethods?: Nullable<Nullable<PaymentMethod>[]>;
    portfolio?: Nullable<Nullable<Portfolio>[]>;
    priceGroup?: Nullable<string>;
    priceList?: Nullable<string>;
    routeId?: Nullable<string>;
    salesOrg?: Nullable<string>;
    supplyCenter?: Nullable<string>;
    updateDate?: Nullable<UpdateDate>;
    vendorGroup?: Nullable<string>;
}

export interface UpdateDate {
    date?: Nullable<string>;
}

export interface CustomerGroup {
    group?: Nullable<string>;
    group1?: Nullable<string>;
    group2?: Nullable<string>;
    group3?: Nullable<string>;
    group4?: Nullable<string>;
    group5?: Nullable<string>;
}

export interface Item {
    sku?: Nullable<string>;
    title?: Nullable<string>;
    categoryId?: Nullable<string>;
    category?: Nullable<string>;
    brand?: Nullable<string>;
    classification?: Nullable<string>;
    unitsPerBox?: Nullable<string>;
    minOrderUnits?: Nullable<number>;
    packageDescription?: Nullable<string>;
    packageUnitDescription?: Nullable<string>;
    quantity_max_redeem?: Nullable<number>;
    redeem_unit?: Nullable<string>;
    order_reason_redeem?: Nullable<string>;
    sku_redeem?: Nullable<boolean>;
    price?: Nullable<Price>;
    points?: Nullable<number>;
}

export interface PaymentMethod {
    clientId?: Nullable<string>;
    typeCredit?: Nullable<string>;
    creditLimit?: Nullable<number>;
    creditUsed?: Nullable<number>;
    amountAvailable?: Nullable<number>;
}

export interface Portfolio {
    _id?: Nullable<string>;
    channel?: Nullable<string>;
    country?: Nullable<string>;
    createdDate?: Nullable<string>;
    customerCode?: Nullable<string>;
    items?: Nullable<Nullable<Item>[]>;
}

export interface Price {
    full_price?: Nullable<number>;
    taxes?: Nullable<Nullable<Tax>[]>;
}

export interface IQuery {
    customer(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

export interface Tax {
    taxType?: Nullable<string>;
    taxId?: Nullable<string>;
    rate?: Nullable<number>;
}

type Nullable<T> = T | null;
