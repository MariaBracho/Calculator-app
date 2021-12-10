export class Calculadora {
    constructor(op1, op2) {
        this.op1 = op1
        this.op2 = op2
        this.result = 0
    }

    getresult(result) {
        return this.result = result
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
    }

    getOperationByMethod(method) {
        const OPERATIONS = {
            ["+"]: this.Add,
            ["-"]: this.subtraction,
            ["/"]: this.divide,
            ["x"]: this.multiply,
        }

        return OPERATIONS[method]
    }




}