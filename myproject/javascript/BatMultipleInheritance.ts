import { Bird } from "./interfaceDeclaration";
import{Animal} from './AnimalInterface';
class Bat implements Animal,Bird{
eat()
{
console.log("Eats Insects")
}
fly()
{
console.log("Flies fast")
}
run()
{
console.log("Runs slowly....")
}
}
let b=new Bat();
b.eat();
b.fly();
b.run();