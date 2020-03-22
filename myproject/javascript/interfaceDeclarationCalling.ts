import { Bird } from "./interfaceDeclaration";
class Peacock implements Bird{
    eat()
    {
        console.log("Eats Flowers")
    }
    fly()
    {
        console.log("Flies fast")
    }
}
let p=new Peacock();
p.eat();
p.fly();