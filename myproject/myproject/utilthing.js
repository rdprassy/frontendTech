var util=require('util');
async function func()
{
    return "Hai Welcome to Node Js"
}
callbackfunc=util.deprecate(()=>{
    console.log("This is a deprecated method");
})