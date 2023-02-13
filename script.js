//color change

let colors=['blue','green','yellow','red','purple']
let btn=document.getElementById('change')
btn.addEventListener('click',function(){
    var random=colors[Math.floor(Math.random()*colors.length)]
    let container=document.getElementById('sub-container')
    container.style.background=random
})

//add squre box

let add=document.getElementById('add')
var squrediv=document.createElement('div')
squrediv.style.cssText="width:100px; height:100px; background:black"
add.addEventListener('click',function(){
    let container=document.getElementById("sub-container")
    container.appendChild(squrediv)
})

//remove child

let removeChild=document.getElementById('remove')
removeChild.addEventListener('click',function(){
    let container=document.getElementById('sub-container')
    container.removeChild(squrediv)
})