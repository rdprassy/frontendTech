import{Car} from './car';
class Driver extends Car{
 start()
 {
     console.log("Used to start a car");
 }   
 stop()
 {
     console.log("Used to stop a car");
 }   
 increaseSpeed()
 {
     console.log("Used to increase speed");
 }
}
let d=new Driver();
d.start();
d.increaseSpeed();
d.stop();
d.brandName();
d.color();