let promise=new Promise(function(resolve,reject){
    var name="Rajesh";
    
    if(name=="Rajesh")
    {
        return new Promise(resolve)
    }
    else{
return new Promise(reject) 
}
}).then((result)=>{console.log("Valid User")})
.catch((error)=>console.log("Invalid User"));