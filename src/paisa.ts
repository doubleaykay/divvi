/*
Custom currency handling library for Divvi
*/

type Paisa = {
    amount: number;
    attribute: string | undefined;
}

function n2p(n: number, attr?: string): Paisa {
    // convert a number with decimals to a Paisa object
    // optionally, add an attribute
    let attr_to_add: string | undefined;
    if (attr != null) {
        attr_to_add = attr
    } else {
        attr_to_add = undefined
    }

    return {
        amount: n * 100,
        attribute: attr_to_add
    }
}

function add(...args: Paisa[]): Paisa {
    // sum the values of multiple Paisa objects
    // attributes are NOT preserved
    let sum = Object.values(args).reduce((accumulator: number, currentValue: Paisa): number => {
        return accumulator + currentValue.amount
    }, 0)

    return {
        amount: sum,
        attribute: undefined
    }
}

function subtract(minuend: Paisa, subtrahend: Paisa): Paisa {
    // subtract two Paisa objects
    // attributes are NOT preserved
    return {
       amount:  minuend.amount - subtrahend.amount,
       attribute: undefined
    }
}

function multiplyPP(multiplier: Paisa, multiplicand: Paisa): Paisa {
    // multiply two Paisa objects
    // attributes are NOT preserved
    return {
        amount: multiplier.amount * multiplicand.amount,
        attribute: undefined
    }
}

function multiplyPN(multiplier: Paisa, multiplicand: number): Paisa {
    // multiply a Paisa object by a number
    // attributes ARE preserved
    return {
        amount: multiplier.amount * multiplicand,
        attribute: multiplier.attribute
    }
}

function allocatePP(to_allocate: Paisa, recipients: Paisa[]): void {
    // TODO allocation algorithm
}

function p2s(p: Paisa): string {
    // convert a Paisa object to a string with the correct decimal places
    return (p.amount / 100).toString()
}

function p2n(p: Paisa): number {
    // convert a paisa onject to a number with the correct decimal places
    return p.amount / 100
}