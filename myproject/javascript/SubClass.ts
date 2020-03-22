import{Animal} from './SuperClass';
export class Lion extends Animal
{
    run()
    {
        console.log("Runs fast");
    }
}
let l=new Lion();
l.eat();
l.run();
console.log("Lion has "+l.legs+" legs");