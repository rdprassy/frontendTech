let promise=new Promise(function(resolve,reject){
    var name="Rajesh";
    
    if(name=="Rajesh")
    {
        resolve({msg:'Valid'})
    }
    else{
reject({msg:'Invalid'})
}
}).then(function(res){
    console.log(res);
}).catch(function(res){
    console.log(res);
})  