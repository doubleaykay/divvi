// Types file for Dinero core logic

import { Dinero } from 'dinero.js';

// enum for payment type for a given person
export enum PayType {
    Cash = "Cash",
    Exact = "Exact",
}

// type for Pre Tax Pct Tip
export type TipPreTaxPct = {
    value: number
}

// type for Pre Tax Pct Tip
export type TipPostTaxPct = {
    value: number
}

// type for Pre Tax Pct Tip
export type TipDollars = {
    value: Dinero<number>
}

// type for Pre Tax Pct Tip
export type TipTotalDollars = {
    value: Dinero<number>
}

// data structure for a person
export type Person = {
    contribution_pre_tax: Dinero<number>;
    pay_type: PayType;
    contribution_pct_ideal: number;
    contribution_calculated: Dinero<number> | undefined;
}

// enum for tip calculation method for a given bill
export enum TipType {
    PreTaxPct = "PreTaxPct",
    PostTaxPct = "PostTaxPct",
    TipDollars = "TipDollars",
    TotalDollars = "TotalDollars",
}

// data structure for the bill
// timestamp format: 'Sun Mar 19 2023 12:04:00 GMT-0400 (Eastern Daylight Time)'
// if tip_type is TipDollars or TotalDollars then tip_computed_amt will be computed when needed
export type Bill = {
    id: string;
    timestamp: string;
    people: {
        [key: string]: Person
    };
    tax_amt: Dinero<number>;
    tip_type: TipType;
    tip_pct_requested: number | undefined;
    tip_amt_requested: Dinero<number> | undefined;
    tip_amt_computed: Dinero<number> | undefined;
    total_pre_tax: Dinero<number> | undefined;
    total: Dinero<number> | undefined;
}

type BillInputData = {

}

type BillComputedData = {
    
}