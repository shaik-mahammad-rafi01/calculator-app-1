console.log("This is a Calculator application\n");


function addition(n1:number , n2:number):number{
    return n1 + n2 ;
}

function subtraction(n1:number , n2:number):number{
    return n1 - n2 ;
}

const sum = addition(10,20);
console.log("Addition of 10 and 20 is ",sum);

const sub :number=subtraction(45,20);
console.log("Subtraction : 45 - 20 : ",sub);

