console.log("I am a main");
setTimeout(()=>console.log("I am set timeout"),1000);
function fun()
{
    console.log("I am a fun");
}
for(i=0;i<10;i++)
{
setTimeout(fun,2000);
}
console.log("End of  main");