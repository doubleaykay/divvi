/*
Main logic for Divvi.

Contains functions to get and process user input, compute a bill,
and store results.

Written by Anoush Khan and Dan Strauss, March 2023
Adapted from Even Split code written by Anoush Khan and Dan Strauss, 2022
*/

import { Dinero, dinero, add, subtract, transformScale, toDecimal, allocate, isZero, isPositive, isNegative, halfUp } from 'dinero.js';
import { USD } from '@dinero.js/currencies';

// enum for payment type for a given person
enum PayType {
    Cash = "Cash",
    Exact = "Exact",
}

// data structure for a person
type Person = {
    contribution_pre_tax: Dinero<number>;
    pay_type: PayType;
    contribution_pct_ideal: number;
    contribution_calculated: Dinero<number> | undefined;
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
// if tip_type is TipDollars or TotalDollars then tip_computed_amt will be computed when needed
type Bill = {
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

function pallocate(amount: Dinero<number>, targets: { [key: string]: number }): { [key: string]: Dinero<number> } {
    // compute total of ratio list
    let ratio_total: number = Object.values(targets).reduce((accumulator: number, currentValue: number): number => {
        return accumulator + currentValue
    }, 0)

    // init result dictionary
    let result: { [key: string]: Dinero<number> } = {}

    // set remainder to amount
    let remainder: Dinero<number> = amount

    // allocate amount to targets and floor
    for (const key in targets) {
        result[key] = allocate(amount, [ratio_total - targets[key], targets[key]])[1] // this will floor (underallocate) and have a positive remainder
        // result[key] = allocate(amount, [targets[key], ratio_total - targets[key]])[0] // this will ceil (overalloacte) and have a negative remainder
        remainder = subtract(remainder, result[key])
    }

    // define one dinero
    let one: Dinero<number> = dinero({ amount: 1, currency: USD })

    // handle the remainder if it exists
    if (isZero(remainder)) {
        // no need to do anything fancy
        return result
    } else if (isPositive(remainder)) {
        // add one starting at the beginning of result
        for (const key in result) {
            if (isZero(remainder)) {
                return result
            } else {
                result[key] = add(result[key], one)
                remainder = subtract(remainder, one)
            }
        }
    } else if (isNegative(remainder)) {
        // remove one starting at the end of result
        Object.keys(result).reverse().forEach((key) => {
            if (isZero(remainder)) {
                return result
            } else {
                result[key] = subtract(result[key], one)
                remainder = add(remainder, one)
            }
        })
        return result
    }
}

function dround(d: Dinero<number>): Dinero<number> {
    // correctly round a Dinero object
    return transformScale(transformScale(d, 0, halfUp), 2)
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
                contribution_pre_tax: dinero({ amount: 2200, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Sachin": {
                contribution_pre_tax: dinero({ amount: 1500, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Anoush": {
                contribution_pre_tax: dinero({ amount: 1900, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Guadalupe": {
                contribution_pre_tax: dinero({ amount: 600, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Sophia": {
                contribution_pre_tax: dinero({ amount: 700, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            }
        },
        tax_amt: dinero({ amount: 588, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_pct_requested: 20,
        tip_amt_requested: undefined,
        tip_amt_computed: undefined,
        total_pre_tax: undefined,
        total: undefined
    }

    let dumpling_dinner: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                contribution_pre_tax: dinero({ amount: 2343, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Seth": {
                contribution_pre_tax: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            }
        },
        tax_amt: dinero({ amount: 483, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_pct_requested: 20,
        tip_amt_requested: undefined,
        tip_amt_computed: undefined,
        total_pre_tax: undefined,
        total: undefined
    }

    let squad_at_99: Bill = {
        id: "null",
        timestamp: Date(),
        people: {
            "Anoush": {
                contribution_pre_tax: dinero({ amount: 2343, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Dan": {
                contribution_pre_tax: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Exact,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            },
            "Charlie": {
                contribution_pre_tax: dinero({ amount: 4562, currency: USD }),
                pay_type: PayType.Cash,
                contribution_pct_ideal: undefined,
                contribution_calculated: undefined
            }
        },
        tax_amt: dinero({ amount: 483, currency: USD }),
        tip_type: TipType.PreTaxPct,
        tip_pct_requested: 20,
        tip_amt_requested: undefined,
        tip_amt_computed: undefined,
        total_pre_tax: undefined,
        total: undefined
    }

    // return dco_dinner
    // return dumpling_dinner
    return squad_at_99
}

function computeBill(thisBill: Bill): Bill {
    // 1: compute pre_tax_total using each person's pre_tax_amt
    thisBill.total_pre_tax = Object.values(thisBill.people).reduce((accumulator: Dinero<number>, currentValue: Person): Dinero<number> => {
        return add(accumulator, currentValue.contribution_pre_tax)
    }, dinero({ amount: 0, currency: USD }))

    // console.log(toDecimal(thisBill.total_pre_tax))

    // 2: compute tip amount using method flag stored in thisBill
    // and 3: compute thisBill's total amount
    // use Bill.tip_type, Bill.tip_pct_requested or Bill.tip_amt_requested, and Bill.pre_tax_total to compute Bill.total
    switch (thisBill.tip_type) {
        case TipType.PreTaxPct: {
            // console.log('tip type pre tax pct')
            // multiply pre tax total by the tip decimal amount to determine the computed tip amount
            thisBill.tip_amt_computed = allocate(thisBill.total_pre_tax, [thisBill.tip_pct_requested, 100 - thisBill.tip_pct_requested])[0]
            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount
            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(add)
            // console.log(toDecimal(thisBill.tip_amt_computed))
            // console.log(toDecimal(thisBill.total))
            break;
        }
        case TipType.PostTaxPct: {
            // console.log('tip type post tax pct')
            // add the pre tax total and tax amount then multiply by tip decimal amount to determine computed tip amount
            thisBill.tip_amt_computed = allocate(add(thisBill.total_pre_tax, thisBill.tax_amt), [thisBill.tip_pct_requested, 100 - thisBill.tip_pct_requested])[0]
            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount
            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(add)
            // console.log(toDecimal(thisBill.tip_amt_computed))
            // console.log(toDecimal(thisBill.total))
            break;
        }
        case TipType.TipDollars: {
            // console.log('tip type tip dollars')
            // since thisBill.tip_amt_requested already represents the amount of the tip, assign it as such
            thisBill.tip_amt_computed = thisBill.tip_amt_requested
            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount
            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(add)
            // console.log(toDecimal(thisBill.tip_amt_computed))
            // console.log(toDecimal(thisBill.total))
            break;
        }
        case TipType.TotalDollars: {
            // console.log('tip type total dollars')
            // since thisBill.tip_amt_requested already represents the total, assign it as such
            thisBill.total = thisBill.tip_amt_requested
            // for completeness, compute tip amount
            let total_post_tax: Dinero<number> = add(thisBill.total_pre_tax, thisBill.tax_amt)
            thisBill.tip_amt_computed = subtract(thisBill.total, total_post_tax)
            // console.log(toDecimal(thisBill.tip_amt_computed))
            // console.log(toDecimal(thisBill.total))
            break;
        }
        default: {
            throw new Error("Tip type stored in bill does not match enum val");
        }
    }

    // 4: determine each person's ideal contribution percentage
    let total_pre_tax_decimal: number = +toDecimal(thisBill.total_pre_tax)

    for (let person in thisBill.people) {
        thisBill.people[person].contribution_pct_ideal = +toDecimal(thisBill.people[person].contribution_pre_tax) / total_pre_tax_decimal;
    }

    // 5: if everyone is paying exact, use the ideal contribution percent to determine each person's contribution
    // otherwise, determine rounded contribution for each cash person, then
    // Recompute remaining balance and each exact person's contribution percentage to that balance, then
    // determine each exact person's amount

    // 5: determine rounded contribution for each cash person


    // allocate thisBill.total across everyone. if there are people paying cash, then additional processing is needed
    let allocation_targets: { [key: string]: number } = {}

    for (const key in thisBill.people) {
        allocation_targets[key] = thisBill.people[key].contribution_pct_ideal
    }

    let allocated = pallocate(thisBill.total, allocation_targets)

    for (const key in allocated) {
        thisBill.people[key].contribution_calculated = allocated[key]
    }

    var keys_cash_people: string[] = Object.keys(thisBill.people).reduce(function (filtered, key) {
        if (thisBill.people[key].pay_type == PayType.Cash) filtered.push(key);
        return filtered;
    }, []);

    var keys_exact_people: string[] = Object.keys(thisBill.people).reduce(function (filtered, key) {
        if (thisBill.people[key].pay_type == PayType.Exact) filtered.push(key);
        return filtered;
    }, []);

    if (keys_cash_people.length) {
        // some people are paying cash, so determine rounded contribution for each cash person, then
        // Recompute remaining balance and each exact person's contribution percentage to that balance, then
        // determine each exact person's amount
        console.log('some people are paying cash')

        // init empty dinero object to track total of rounded people's contribution
        let rounded_total: Dinero<number> = dinero({ amount: 0, currency: USD })

        // round everyone who is paying cash
        keys_cash_people.forEach((key) => {
            thisBill.people[key].contribution_calculated = dround(thisBill.people[key].contribution_calculated)
            rounded_total = add(rounded_total, thisBill.people[key].contribution_calculated)
        })

        // determine remaining total to allocate across exact people
        let remaining_total: Dinero<number> = subtract(thisBill.total, rounded_total)
        let remaining_total_dec: number = +toDecimal(remaining_total)
        let new_allocation_targets: { [key: string]: number } = {}

        // compute new contribution amounts for exact people
        keys_exact_people.forEach((key) => {
            thisBill.people[key].contribution_pct_ideal = +toDecimal(thisBill.people[key].contribution_pre_tax) / remaining_total_dec;
            new_allocation_targets[key] = thisBill.people[key].contribution_pct_ideal
        })

        // allocate remaining amount for exact people over exact people
        let new_allocated = pallocate(remaining_total, new_allocation_targets)

        // assign newly allocated amounts to the relevant people
        for (const key in new_allocated) {
            thisBill.people[key].contribution_calculated = new_allocated[key]
        }
    }

    // temp print results to console
    console.log(toDecimal(thisBill.total))
    for (const key in thisBill.people) {
        console.log(key)
        console.log(toDecimal(thisBill.people[key].contribution_calculated, ({ value, currency }) => `${currency.code} ${value}`))
    }


    // 6: Recompute remaining balance and each exact person's contribution percentage to that balance

    // 7: determine each exact person's amount

    // console.log(toDecimal(thisBill.total))

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