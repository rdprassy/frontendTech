import{Lion} from './SubClass'
class Monkey extends Lion{
    public eat()
    {
        super.eat();
        console.log("Eats Bananas....");
    }
}
let m=new Monkey();
m.eat();