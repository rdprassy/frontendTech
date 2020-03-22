var m=new Map([[1,'apple'],[2,'orange']]);
console.log(m);

var m=new WeakMap();
var k={};
m.set(k,"Raj");
console.log(m.get(k));