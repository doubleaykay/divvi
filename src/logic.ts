/*
Main logic for Divvi.

Contains functions to get and process user input, compute a bill,
and store results.

Written by Anoush Khan and Dan Strauss, March 2023
Adapted from Even Split code written by Anoush Khan and Dan Strauss, 2022
*/

// data structure for a person
type Person = {
    pre_tax_amt: number;
    pay_type: PayType;
    contribution: number | undefined;
}

// enum for payment type for a given person
enum PayType {
    Cash = "Cash",
    Exact = "Exact",
}

// data structure for the bill
// timestamp format: 'Sun Mar 19 2023 12:04:00 GMT-0400 (Eastern Daylight Time)'
type Bill = {
    id: string;
    timestamp: string;
    people: {
        [key: string]: Person
    };
    tax: number;
    tip_type: TipType;
    tip_val: number;
    pre_tax_total: number | undefined;
    total: number | undefined
}

// enum for tip calculation method for a given bill
enum TipType {
    PreTaxPct = "PreTaxPct",
    PostTaxPct = "PostTaxPct",
    TipDollars = "TipDollars",
    TotalDollars = "TotalDollars",
}

function getFrontendData(): Bill {
    /* grab data from frontend and store it in the standard internal
    data format */

    // PLACEHOLDER FOR CODE TO GRAB DATA FROM FRONTEND
    // RETURN DEMO BILL IN THE MEANTIME

    let dco_dinner: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Grace": {
                pre_tax_amt: 22,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Sachin": {
                pre_tax_amt: 15,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Anoush": {
                pre_tax_amt: 19,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Guadalupe": {
                pre_tax_amt: 6,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Sophia": {
                pre_tax_amt: 7,
                pay_type: PayType.Exact,
                contribution: undefined
            }
        },
        tax: 5.88,
        tip_type: TipType.PreTaxPct,
        tip_val: 20,
        pre_tax_total: undefined,
        total: undefined
    }

    let dumpling_dinner: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: 23.43,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Seth": {
                pre_tax_amt: 45.62,
                pay_type: PayType.Exact,
                contribution: undefined
            }
        },
        tax: 4.83,
        tip_type: TipType.PreTaxPct,
        tip_val: 20,
        pre_tax_total: undefined,
        total: undefined
    }

    let squad_at_99: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: 23.43,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Dan": {
                pre_tax_amt: 45.62,
                pay_type: PayType.Exact,
                contribution: undefined
            },
            "Charlie": {
                pre_tax_amt: 45.62,
                pay_type: PayType.Cash,
                contribution: undefined
            }
        },
        tax: 4.83,
        tip_type: TipType.PreTaxPct,
        tip_val: 20,
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

    // 2: compute tip amount using method flag stored in thisBill

    // 3: compute thisBill's total amount

    // 4: determine each person's ideal contribution percentage

    // 5: determine rounded contribution for each cash person

    // 6: Recompute remaining balance and each exact person's contribution percentage to that balance

    // 7: determine each exact person's amount

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

console.log(getFrontendData())