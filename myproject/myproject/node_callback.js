var util=require('util');
async function func()
{
    return "Hai Welcome to Node Js"
}
callbackfunc=util.callbackify(func);
callbackfunc((err,ret)=>{
    if(err)throw err;
    console.log(ret);
})