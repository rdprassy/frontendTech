class Dog1
{
    legs:number=4;
    eat()
    {
        console.log("Dog eats bones");
    }
}
let d=new Dog1();
d.eat();
console.log("Dog has "+d.legs+" legs");