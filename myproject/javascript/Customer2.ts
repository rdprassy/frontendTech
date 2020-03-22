import {HDFCBank} from './HDFCBank';
export class Customer2 extends HDFCBank
{

    constructor(){
        super()
        console.log("As a proud customer of HDFC bank");
    }
    
}

let cust2 = new Customer2();
cust2.interestRate(25);