process.listeners('abc',function(err,stdout,stderr){
    console.log(stdout)
})
process.on('abc',function(){
    console.log("Under Before Exit")
})
process.emit('abc')
console.log("Process listeners")


//usage of beforeExit will work too but thats a predefined event so if you write a listener it will take care of it.