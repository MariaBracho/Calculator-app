export function botones(id) {
    let result = []

    for (let i = 0; i <= id; i++) {
        result.push(i)
    }

    return result
}

export let signos = [{
        signo: '+',
        id: 10,
        metodo: "Add"
    },
    {
        signo: "-",
        id: 11,
        metodo: "subtraction"
    },
    {
        signo: "x",
        id: 12,
        metodo: "multiply"
    },
    {
        signo: "/",
        id: 13,
        metodo: "divide"
    },
    {
        signo: ".",
        id: 14,

    }, {
        signo: "=",
        id: 18,

    }
]