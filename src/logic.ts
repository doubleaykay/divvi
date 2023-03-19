/*
Main logic for Divvi.

Contains functions to get and process user input, compute a bill,
and store results.

Written by Anoush Khan, March 2023
Adapted from Even Split code written by Anoush Khan and Dan Strauss, 2022
*/

// data structure for a person
type Person = {
    pre_tax_amt: number;
    calc_type: string;
    contribution: number | undefined;
}

// data structure for the bill
// timestamp format: 'Sun Mar 19 2023 12:04:00 GMT-0400 (Eastern Daylight Time)'
type Bill = {
    id: string;
    isComplete: boolean;
    timestamp: string;
    people: {
        [key: string]: Person
    };
    tax: number;
    tip_type: string;
    tip_val: number;
    pre_tax_total: number | undefined;
    total: number | undefined
}

function getFrontendData(): Bill {
    /* grab data from frontend and store it in the standard internal
    data format */

    // PLACEHOLDER FOR CODE TO GRAB DATA FROM FRONTEND
    // RETURN DEMO BILL IN THE MEANTIME

    let dco_dinner: Bill = {
        id: "null",
        isComplete: false,
        timestamp: Date(),
        people: {
            "Grace": {
                pre_tax_amt: 22,
                calc_type: "exact",
                contribution: undefined
            },
            "Sachin": {
                pre_tax_amt: 15,
                calc_type: "exact",
                contribution: undefined
            },
            "Anoush": {
                pre_tax_amt: 19,
                calc_type: "exact",
                contribution: undefined
            },
            "Guadalupe": {
                pre_tax_amt: 6,
                calc_type: "exact",
                contribution: undefined
            },
            "Sophia": {
                pre_tax_amt: 7,
                calc_type: "exact",
                contribution: undefined
            }
        },
        tax: 5.88,
        tip_type: "pre_tax_pct",
        tip_val: 20,
        pre_tax_total: undefined,
        total: undefined
    }

    let dumpling_dinner: Bill = {
        id: "null",
        isComplete: false,
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: 23.43,
                calc_type: "exact",
                contribution: undefined
            },
            "Seth": {
                pre_tax_amt: 45.62,
                calc_type: "exact",
                contribution: undefined
            }
        },
        tax: 4.83,
        tip_type: "pre_tax_pct",
        tip_val: 20,
        pre_tax_total: undefined,
        total: undefined
    }

    let squad_at_99: Bill = {
        id: "null",
        isComplete: false,
        timestamp: Date(),
        people: {
            "Anoush": {
                pre_tax_amt: 23.43,
                calc_type: "exact",
                contribution: undefined
            },
            "Dan": {
                pre_tax_amt: 45.62,
                calc_type: "exact",
                contribution: undefined
            },
            "Charlie": {
                pre_tax_amt: 45.62,
                calc_type: "cash",
                contribution: undefined
            }
        },
        tax: 4.83,
        tip_type: "pre_tax_pct",
        tip_val: 20,
        pre_tax_total: undefined,
        total: undefined
    }

    return dco_dinner
}

function computeBill(thisBill: Bill): Bill {
    /* compute a bill */

    // 1: compute pre_tax_total using each person's pre_tax_amt

    // 2: compute tip amount using method flag stored in thisBill

    // 3: compute thisBill's total amount

    // 4: determine each person's contribution percentage

    // 5: determine each person's tentative amount

    // 6: adjust each person's amount based on their payment preference

    // 7: mark bill as complete (i.e. has all information)

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