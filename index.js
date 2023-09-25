// import inquirer from "inquirer"
// let calculator = await inquirer.prompt([{
// type:"number",
// name:"no1",
// message:"enter first no1"
// },
// {
// type:"number",
// name:"no2",
// message:"enter second no 2",
// },
// {
// type:"list",
// name:"operator",
// message:"Select the operator",
// choices:["add","subtract","multiply","divison"]
// }])
// let result:number;
// switch(calculator.operator){
//     case "add":
//         result= calculator.no1 + calculator.no2;
//         console.log(result);
//         break;
//         case "Subtract":
//             result=calculator.no1 - calculator.no2;
//             console.log(result);
//             break;
//             case "multiplicatiom":
//                 result=calculator.no1 * calculator.no2;
//                 console.log(result);
//                 break;
//                 case "divsion":
//                     result=calculator.no1 / calculator.no2;
//                     console.log(result);
//             break;
//         }
import inquirer from "inquirer";
async function calculator() {
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "no1",
            message: "Enter the first number:",
        },
        {
            type: "number",
            name: "no2",
            message: "Enter the second number:",
        },
        {
            type: "list",
            name: "operator",
            message: "Select the operator:",
            choices: ["add", "subtract", "multiply", "divide"], // Fixed typo in choices
        },
    ]);
    const { no1, no2, operator } = userInput;
    let result;
    switch (operator) {
        case "add":
            result = add(no1, no2);
            break;
        case "subtract":
            result = subtract(no1, no2);
            break;
        case "multiply":
            result = multiply(no1, no2);
            break;
        case "divide":
            result = divide(no1, no2);
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(`Result: ${result}`);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        process.exit(1);
    }
    return a / b;
}
calculator();
