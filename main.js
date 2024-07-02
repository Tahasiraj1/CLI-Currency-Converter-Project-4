// import inquirer from "inquirer";
// let conversion = {
//     "PKR": {
//         "USD": 0.0036,
//         "CAD": 0.0049,
//         "PKR": 1
//     },
//     "USD": {
//         "CAD": 1.37,
//         "PKR": 278.31,
//         "USD": 1
//     },
//     "CAD": {
//         "USD": 0.73,
//         "PKR": 203.30, 
//         "CAD": 1
//     }
// };
// const answers:{
//     from: "PKR" | "USD" | "CAD",
//     to: "PKR" | "USD" | "CAD",
//     amount: number
// } = await inquirer.prompt([
//     {
//         type: 'list',
//         name: 'from',
//         choices: ["PKR", "USD", "CAD"],
//         message: "Select your currency: "
//     },
//     {
//         type: 'list',
//         name: 'to',
//         choices: ["PKR", "USD", "CAD"],
//         message: "Select your convertion currency: "
//     },
//     {
//         type: 'amount',
//         name: 'number',
//         message: "Enter your amount: "
//     }
// ]);
// const {from, to, amount} = answers;
// if(from && to && amount){
//     let result = conversion[from][to] * amount;
//     console.log(`Your currency from ${from}, is converted to ${to}, and the amount is ${amount}`)
// } else {
//     console.log('Invalid input');
// };
import inquirer from 'inquirer';
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "CAD": 0.0049,
        "PKR": 1
    },
    "USD": {
        "CAD": 1.37,
        "PKR": 278.31,
        "USD": 1
    },
    "CAD": {
        "USD": 0.73,
        "PKR": 203.30,
        "CAD": 1
    }
};
const answers = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        choices: ["PKR", "USD", "CAD"],
        message: 'Select your currency: '
    },
    {
        type: 'list',
        name: 'to',
        choices: ["PKR", "USD", "CAD"],
        message: 'Select your conversion currency: '
    },
    {
        type: 'input',
        name: 'amount',
        message: 'Enter your amount: ',
        validate: function (value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your currency from ${from}, converted to ${to}, is ${result}`);
}
else {
    console.log('Invalid input');
}
