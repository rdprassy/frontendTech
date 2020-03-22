import {ICICIBank} from './ICICIBank';
export class Customer1 extends ICICIBank
{
    constructor(){
        super()
        console.log("As a proud customer of ICICI bank");
    }
   
    
}

let cust1 = new Customer1();
cust1.interestRate(20);