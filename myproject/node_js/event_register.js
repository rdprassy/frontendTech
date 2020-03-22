var event=require('events');
var eve=new event.EventEmitter();
myevent=function(){
    console.log("Event is emitting")
}
//Register the event
eve.on('messagelog',myevent);
//emit the event
eve.emit('messagelog');