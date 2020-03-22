export class Cat
{
    eat(x:string);
    eat(x:number);
    eat(x:any)
    {
        if(typeof x=='string')
        {
            console.log("Eats "+x);
        }
        else if(typeof x=='number')
        {
            console.log("Eats "+x+" rats per day");
        }
        else{
            console.log("Not matching");
        }
    }
}
let c1=new Cat();
c1.eat("rats");
c1.eat(5);