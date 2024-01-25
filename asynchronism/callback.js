function greeting(name, callback1) {
    setTimeout(function(){
        console.log('Hello '+ name);
        callback1()
    }, 1000);
}

function goodbye(name, callback2) {
    setTimeout(function(){
        console.log('Good Bye '+name);
        callback2();
    }, 1000);
}

console.log('process starting');

greeting('Luis', function(){
    goodbye('Luis', function(){
        console.log('process ended');
    })
});

