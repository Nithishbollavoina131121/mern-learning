function calculate(num1,num2,operation){
    if(operation === "add"){
        return num1 + num2 ;
    }
    else if(operation === "subract"){
        return num1 - num2;
    }
    else if(operation === "multiply"){
        return num1 * num2;
    }
    else{
        return "Invalid Operation"
    }
}

console.log(calculate(10,20,"add"));
console.log(calculate(20,10,"subract"));
console.log(calculate(10,20,"multiply"));
console.log(calculate(10,20,"hcggjhgfkjdhzy"))