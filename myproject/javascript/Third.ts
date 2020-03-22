class Bank
{
    amount:number=1000;
    withdraw(amount:number)
    {

        var amt1=amount;
        if(this.amount>=amt1)
           {
           document.getElementById("abc").innerHTML=amt1+" amount withdrawn successfully";
           this.amount-=amt1;
           }
           else{
            document.getElementById("abc").innerHTML="Insufficient amount";
               
           }
    }

    balance()
    {

        document.getElementById("abc").innerHTML="Balance is "+this.amount;

    }
}

let d2=new Bank();