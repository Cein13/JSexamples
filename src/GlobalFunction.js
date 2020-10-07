let Global = 25;

function fun1(){
    opGlobal = 7;
}
function fun2(){
    let output ="";
    if (typeof Global != "undefined"){
        output += "Global: " + Global;
    }
    if(typeof opGlobal != "undefined"){
        output += "opGlobal: " + opGlobal;
    }
    console.log(output);
}
fun1();
fun2();