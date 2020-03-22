import{Animal} from './SuperClass';
class Lion extends Animal
{

    eat(){

        super.eat();


        console.log("Eats only Non-veg");
    }

    run()
    {
        console.log("Runs fast");
    }
}
let l=new Lion();
l.eat();
l.run();
console.log("Lion has "+l.legs+" legs");