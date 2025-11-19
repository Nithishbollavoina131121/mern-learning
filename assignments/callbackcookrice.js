/*function cookRice(callback){
    console.log("Cooking rice")
    setTimeout(()=>{
        console.log("Rice cooked")
        callback()
    },2000);
}
function eatRice(){
    console.log("Eating rice")
   
}
cookRice(eatRice)*/

function cookRice(callbacksss){
    console.log("cooking rice")
    setTimeout(()=>{
        console.log("rice cooked")
        callbacksss();
    },2000);
}
function eatRice(){
    console.log("eating rice")
}
cookRice(eatRice)














