function func(fruits:string[])
{
    for(let i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }

//     for(var index in fruits){

//         console.log(fruits[index])

//     }
 }
let f=["apple","mango","orange"];
func(f);

//popping an element 
f.pop();

for(let i=0;i<f.length;i++)
{
    console.log(f[i]);
}


// pushing an element in array
f.push("Banana");

for(let i=0;i<f.length;i++)
{
    console.log(f[i]);
}


// sorting
f.sort();

for(let i=0;i<f.length;i++)
{
    console.log(f[i]);
}

let f2:string[] = ['Apple','Reflect']

f= f.concat(f2);

console.log(f);

console.log(f.indexOf('Banana'));

console.log(f.lastIndexOf('Banana'));

var ex:[number,string] = [22,'there'];

var ex1:[number,string][] = [[22,'there'],[22,'there']];


console.log(ex);

console.log(ex1);
ex1.push([22,'triple'])
