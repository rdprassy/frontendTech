var stdin=process.stdin;
stdin.setEncoding('utf-8');
console.log("Enter a word");
process.stdin.on('data',function(input){
    if(input.toString().trim()=="exit")
    {
        console.log("Completed");
        process.exit();
    }
    else{
        console.log('User input is '+input);
    }
})