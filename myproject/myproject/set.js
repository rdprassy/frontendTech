var array=[33,44,55,11,44];
var s=new Set(array);
s.add('55');
s.delete(44);
s.forEach(function(val){
    console.log(val)
})
console.log(s.size);   
s.forEach((a)=>{console.log(a)})


var s1=s;
console.log(s1)
console.log(s)
console.log(s.has(55))
console.log(s==s1);

//set is not index based so no for loop
// can add anytype of data, strings, integers and objects