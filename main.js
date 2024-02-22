import inquirer from "inquirer";
let runAgain = 1;
for (let i = 0; i < runAgain; i++) {
    let calculatorInput = await inquirer.prompt([
        {
            type: "number",
            name: "Fnumber",
            message: "Enter your first number",
        },
        {
            type: "number",
            name: "Lnumber",
            message: "Enter your second number",
        },
        {
            type: "list",
            name: "operators",
            message: "Enter your operator whih you would like to operate",
            choices: ["Add", "Sub", "Mult", "Div"],
        },
    ]);
    let Fnumber = calculatorInput.Fnumber;
    let Lnumber = calculatorInput.Lnumber;
    let operators = calculatorInput.operators;
    if (operators === "Add") {
        console.log(Fnumber + Lnumber);
    }
    else if (operators === "Sub") {
        console.log(Fnumber - Lnumber);
    }
    else if (operators === "Mult") {
        console.log(Fnumber * Lnumber);
    }
    else if (operators === "Div") {
        console.log(Fnumber / Lnumber);
    }
    let ques = await inquirer.prompt([{
            type: "input",
            name: "run",
            message: "Do you want to operate another operators (y/n)",
        }]);
    if (ques.run === "y") {
        runAgain += 1;
    }
}
