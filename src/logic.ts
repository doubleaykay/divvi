/*
Main logic for Divvi.

Contains functions to get and process user input, compute a bill,
and store results.

Written by Anoush Khan and Dan Strauss, March 2023
Adapted from Even Split code written by Anoush Khan and Dan Strauss, 2022
*/

const { dinero, add, multiply, toDecimal } = require('dinero.js');
const { USD } = require('@dinero.js/currencies');

// enum for payment type for a given person
enum PayType {
    Cash = "Cash",
    Exact = "Exact",
}

// data structure for a person
type Person = {
    pre_tax_amt: number;
    pay_type: PayType;
    contribution: number | undefined;
}

// enum for tip calculation method for a given bill
enum TipType {
    PreTaxPct = "PreTaxPct",
    PostTaxPct = "PostTaxPct",
    TipDollars = "TipDollars",
    TotalDollars = "TotalDollars",
}

// data structure for the bill
// timestamp format: 'Sun Mar 19 2023 12:04:00 GMT-0400 (Eastern Daylight Time)'
// tip_val should be a float even if tip_type is TipDollars or TotalDollars to ensure consistency in the frontend code
// if tip_type is TipDollars or TotalDollars then tip_computed_amt will be computed when needed
type Bill = {
    id: string;
    timestamp: string;
    people: {
        [key: string]: Person
    };
    tax: number;
    tip_type: TipType;
    tip_val: number;
    tip_computed_amt: number;
    pre_tax_total: number | undefined;
    total: number | undefined
}

function getFrontendData(): Bill {
    /* grab data from frontend and store it in the standard internal
    data format */

    // PLACEHOLDER FOR CODE TO GRAB DATA FROM FRONTEND
    // RETURN DEMO BILL IN THE MEANTIME

    // there should be a constraint on the tip field based on the tip type:
    // if pre or post tax percent, can only enter whole numbers
    // if tip dollars or total dollars, then can only enter currency

    let dco_dinner: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Grace": {
                pre_tax_amt: dinero({ amount: 2200, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Sachin": {
                pre_tax_amt: dinero({ amount: 1500, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Anoush": {
                pre_tax_amt: dinero({ amount: 1900, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Guadalupe": {
                pre_tax_amt: dinero({ amount: 600, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Sophia": {
                pre_tax_amt: dinero({ amount: 700, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            }
        },
        tax: dinero({ amount: 588, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_val: 20.00,
        tip_computed_amt: undefined,
        pre_tax_total: undefined,
        total: undefined
    }

    let dumpling_dinner: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: dinero({ amount: 2343, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Seth": {
                pre_tax_amt: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            }
        },
        tax: dinero({ amount: 483, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_val: 20,
        tip_computed_amt: undefined,
        pre_tax_total: undefined,
        total: undefined
    }

    let squad_at_99: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: dinero({ amount: 2343, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Dan": {
                pre_tax_amt: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Charlie": {
                pre_tax_amt: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Cash,
                contribution: undefined
            }
        },
        tax: dinero({ amount: 483, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_val: 20,
        tip_computed_amt: undefined,
        pre_tax_total: undefined,
        total: undefined
    }

    return dco_dinner
}

function computeBill(thisBill: Bill): Bill {
    /* proposed strategy to compute a bill */

    // 1: compute pre_tax_total using each person's pre_tax_amt

    // 2: compute tip amount using method flag stored in thisBill

    // 3: compute thisBill's total amount

    // 4: determine each person's contribution percentage

    // 5: determine each person's tentative amount

    // 6: adjust each person's amount based on their payment preference


    /* alternative proposed strategy to compute a bill */

    // 1: compute pre_tax_total using each person's pre_tax_amt
    thisBill.pre_tax_total = Object.values(thisBill.people).reduce((accumulator, currentValue): number => {
        return add(accumulator, currentValue.pre_tax_amt)
    }, dinero({ amount: 0, currency: USD }))

    // 2: compute tip amount using method flag stored in thisBill
    // use Bill.tip_type, Bill.tip_val, and Bill.pre_tax_total to compute Bill.total
    switch(thisBill.tip_type) {
        case TipType.PreTaxPct: {
            // multiply pre tax total by the tip decimal amount to determine the computed tip amount
            thisBill.tip_computed_amt = multiply(thisBill.pre_tax_total, {amount: thisBill.tip_val, scale: 2})
            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount
            thisBill.total = [thisBill.pre_tax_total, thisBill.tax, thisBill.tip_computed_amt].reduce(add)
            break;
        }
        case TipType.PostTaxPct: {
            // add the pre tax total and tax amount then multiply by tip decimal amount to determine computed tip amount
            thisBill.tip_computed_amt = multiply(add(thisBill.pre_tax_total, thisBill.tax), {amount: thisBill.tip_val, scale: 2})
            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount
            thisBill.total = [thisBill.pre_tax_total, thisBill.tax, thisBill.tip_computed_amt].reduce(add)
            break;
        }
        case TipType.TipDollars: {
            // statements;
            throw new Error("Tip Dollars tip logic has not been implemented yet.");
            break;
        }
        case TipType.TotalDollars: {
            // statements;
            throw new Error("Total Dollars tip logic has not been implemented yet.");
            break;
        }
        default: {
            throw new Error("Tip type stored in bill does not match enum val");
        }
    }

    // 3: compute thisBill's total amount

    // 4: determine each person's ideal contribution percentage

    // 5: determine rounded contribution for each cash person

    // 6: Recompute remaining balance and each exact person's contribution percentage to that balance

    // 7: determine each exact person's amount

    console.log(toDecimal(thisBill.total))

    return thisBill
}

function saveDataToSession() {
    /* save data to sessionStorage, where it is valid until
    the session refreshes */

}

function retrieveDataFromSession() {
    /* retrieve data from sessionStorage */

}

function saveDataToLocal() {
    /* save data to localStorage, where it is valid until
    browser cache is cleared */

}

function retrieveDataFromLocal() {
    /* retrieve data from localStorage */

}

function displayResults() {
    /* standard way to display bill results */

}

function main() {
    /* main logic, triggered when "compute" button pressed */

    computeBill(getFrontendData());

    saveDataToSession();
    retrieveDataFromSession();
    displayResults();
}

function saveCurrentBill() {
    /* logic to save current bill, triggered when "save bill" button pressed */

    retrieveDataFromSession();
    saveDataToLocal();
}

function testing() {
    console.log('Hello!!!!')
}

console.log(computeBill(getFrontendData()))