"use strict"




function getCalc(a, b){
    if(a===b){

        return 4*a;
    }

    else{
        return 2*(a+b);
    }
}

let val=getCalc(6,5)

console.log(val)