var child=require('child_process');
child.exec('mkdir ABC',function(err,stdout,stderr){if(err){
    console.error(err);
    return;
}
console.log(stdout);
})