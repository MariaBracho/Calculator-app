export class Calculadora {
    constructor(op1, op2) {
        this.op1 = op1
        this.op2 = op2
    }

    Add(op1, op2) {
        return (op1 + op2)
    }
    subtraction(op1, op2) {
        return (op1 - op2)
    }
    divide(op1, op2) {
        return (op1 / op2)
    }
    multiply(op1, op2) {
        return (op1 * op2)
    }

    getvalues(op1, op2) {
        this.op1 = Number(op1)
        this.op2 = Number(op2)

        return [this.op1, this.op2]
    }
    exponent(base, exponent) {
        return Math.pow(base, exponent)
    }
    squareRoot(root) {
        return Math.sqrt(root)
    }
    PI(pi) {
        return Math.PI(pi)
    }

    getOperationByMethod(method) {
        const OPERATIONS = {
            ["+"]: this.Add,
            ["-"]: this.subtraction,
            ["/"]: this.divide,
            ["x"]: this.multiply,
            ["√"]: this.squareRoot,
            ["^"]: this.exponent,
            ["π"]: this.PI
        }

        return OPERATIONS[method]
    }
}