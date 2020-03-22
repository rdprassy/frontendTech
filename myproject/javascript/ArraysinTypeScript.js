function func(fruits) {
    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    //     for(var index in fruits){
    //         console.log(fruits[index])
    //     }
}
var f = ["apple", "mango", "orange"];
func(f);
//popping an element 
f.pop();
for (var i = 0; i < f.length; i++) {
    console.log(f[i]);
}
// pushing an element in array
f.push("Banana");
for (var i = 0; i < f.length; i++) {
    console.log(f[i]);
}
// sorting
f.sort();
for (var i = 0; i < f.length; i++) {
    console.log(f[i]);
}
var f2 = ['Apple', 'Reflect'];
f = f.concat(f2);
console.log(f);
console.log(f.indexOf('Banana'));
console.log(f.lastIndexOf('Banana'));
var ex = [22, 'there'];
console.log(ex);
