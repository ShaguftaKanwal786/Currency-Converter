

import inquirer from "inquirer";
import chalk from "chalk"
 console.log(chalk.blue("\nWelcome To Currency Converter Project\n"));
 
const  currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    IND:74.57,
    PKR:277,
};
let answer=await inquirer.prompt([
    {

        name:"from",
        type:"list",
        message:"enter currency which you want to convert from",
        choices:[`USD`,`EUR`,`GBP`,`IND`,`PKR`]
},
{
    name:"to",
    type:"list",
    message:"ener currency in which you want to convert to",
choices:[`USD`,`EUR`,`GBP`,`IND`,`PKR`]

},

{
    neme:"amount",
    type:"number",
    message:"plese enter amount: ",


}
]);

let fromAmount=currency[answer.from]
let toAmount= currency[answer.to]
let Amount=answer.amount
let baseAmount=Amount/fromAmount;
let convertedAmount= baseAmount*toAmount;
console.log(`convertedAmount= ${convertedAmount}`);

