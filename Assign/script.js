let changecolor=document.getElementById("color");
let changeName=document.getElementById("randomname");
let colors=['aqua','yellow','red','green','orange','blue','black','purple','brown']
let names=[{id:1,name:"Pippo"},{id:2,name:"Nithish"},{id:3,name:"Hari"},{id:4,name:"Vedanth"},{id:5,name:"Ganesh"},{id:6,name:"Jayanth"},{id:7,name:"Prudhvi"},{id:8,name:"Raja"}]


//console.log(typeof names)
changecolor.addEventListener("click",function(){
    let randomColor=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomColor];
})

changeName.addEventListener("click",function(){
    let randomName=Math.floor(Math.random()*names.length);
    alert("Id-"+names[randomName].id+"Name-"+names[randomName].name)
})

