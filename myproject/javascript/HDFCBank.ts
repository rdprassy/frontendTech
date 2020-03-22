import { Loan } from "./Loan";
export class HDFCBank implements Loan{
    interestRate(amount:number)
    {
        console.log("Interest rate is "+amount+'%'+" from HDFC bank")
        return amount;
    }
}