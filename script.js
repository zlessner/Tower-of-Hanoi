//simulation through lowest amount of moves scenario in addition to user playing game

//create three different arrays with winning array having correct order and pieces

let tower1=document.querySelector('.one')

let tower2=document.querySelector('.two')

let tower3=document.querySelector(".three")

let tower4=document.querySelector('.four')

let tower5=document.querySelector('.five')

let blockTower=document.querySelectorAll('.block')

let box1=document.querySelector('.box1')

let body=document.querySelector('body')

let boxArray=[tower1,tower2,tower3,tower4,tower5]

console.log(boxArray)


for (let i=0; i<blockTower.length;i++) {

body.addEventListener("click", selectTower);
function selectTower(evt) {
  evt.preventDefault();

if (blockTower[i]==boxArray[0]) {
if (blockTower[i].contains(evt.target))  {

blockTower[i].style.border = "5px solid yellow";
 }

else {
    blockTower[i].style.border = "2px solid black";
}

}
}
}

