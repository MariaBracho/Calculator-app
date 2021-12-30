export function buttons(id) {
    let result = []

    for (let i = 0; i <= id; i++) {
        result.push(i)
    }

    return result
}

export const signs = [{
        signs: '+',
        id: 10,
        method: "Add"
    },
    {
        signs: "-",
        id: 11,
        method: "subtraction"
    },
    {
        signs: "x",
        id: 12,
        method: "multiply"
    },
    {
        signs: "/",
        id: 13,
        method: "divide"
    },
    {
        signs: ".",
        id: 14,

    }, {
        signs: "=",
        id: 18,

    },
    {
        signs: "(",
        id: 15,
    },
    {
        signs: ")",
        id: 16,
    }
]

export const LIST_OF_OPERATIONS = signs