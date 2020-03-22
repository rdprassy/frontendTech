var b=Buffer.alloc(233);
for(i=0;i<26;i++)
{
b[i]=i+97;
}
console.log(b.toString('ascii'))
console.log(b.toString('utf-8',0,3));
console.log(b.toString(undefined,0,4));