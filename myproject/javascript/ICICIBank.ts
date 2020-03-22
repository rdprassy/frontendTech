import { Loan } from "./Loan";
export class ICICIBank implements Loan{
    interestRate(amount:number):void
    {

        console.log("Interest rate is "+amount+'%'+" from ICICI bank")
        // return amount;
    }
}