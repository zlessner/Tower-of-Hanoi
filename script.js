//simulation through lowest amount of moves scenario in addition to user playing game

//create three different arrays with winning array having correct order and pieces

let counter=document.querySelector('.counter')

let tower1=document.querySelector('.one')

let tower2=document.querySelector('.two')

let tower3=document.querySelector(".three")

let tower4=document.querySelector('.four')

let tower5=document.querySelector('.five')

let tower21=document.querySelector('.two-one')

let tower22=document.querySelector('.two-two')

let tower23=document.querySelector(".two-three")

let tower24=document.querySelector('.two-four')

let tower25=document.querySelector('.two-five')

let tower31=document.querySelector('.three-one')

let tower32=document.querySelector('.three-two')

let tower33=document.querySelector(".three-three")

let tower34=document.querySelector('.three-four')

let tower35=document.querySelector('.three-five')

let blockTower=document.querySelectorAll('.block')

let box1=document.querySelector('.box1')

let box2=document.querySelector('.box2')

let box3=document.querySelector('.box3')

let body=document.querySelector('body')

let boxArray=[tower1,tower2,tower3,tower4,tower5]

let boxArray2=[]

let boxArray3=[]


body.addEventListener("click", selectTower);
function selectTower(evt) {
    for (let i=0; i<blockTower.length;i++) {
  evt.preventDefault();

if (blockTower[i]==boxArray[0]) {
if (blockTower[i].contains(evt.target))  {

blockTower[i].style.border = "5px solid yellow";


box1.addEventListener("click", selectBox1);
function selectBox1(evt) {
  evt.preventDefault();
    box1.prepend(blockTower[i])
    counter.innerHTML ++
    box1.removeEventListener('click', selectBox1);
    box2.removeEventListener('click', selectBox2);
    box3.removeEventListener('click', selectBox3);
 }

box2.addEventListener("click", selectBox2);
function selectBox2(evt) {
  evt.preventDefault();
    box2.prepend(blockTower[i])
    //boxArray.shift()
    boxArray2.unshift(blockTower[i])
    counter.innerHTML ++
    console.log(boxArray)
    console.log(boxArray2)
    box1.removeEventListener('click', selectBox1);
    box2.removeEventListener('click', selectBox2);
    box3.removeEventListener('click', selectBox3);
 }

 box3.addEventListener("click", selectBox3);
 function selectBox3(evt) {
   evt.preventDefault();
     box3.prepend(blockTower[i])
     boxArray3.unshift(blockTower[i])
     counter.innerHTML ++
     console.log(boxArray3)
     box1.removeEventListener('click', selectBox1);
     box2.removeEventListener('click', selectBox2);
     box3.removeEventListener('click', selectBox3);
}
}

else {
    blockTower[i].style.border = "2px solid black";
}

}
}
}

