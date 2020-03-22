var m=new Map();
var k={id:101};
var k1={a:1};
m.set(k,"Raj");
//m.delete(k);
m.set(k1,"Karthik")
//m.clear();
m.forEach((val,key)=>{
    console.log(JSON.stringify(key)+"   "+val)
})