//simulation through lowest amount of moves scenario in addition to user playing game

let counter = document.querySelector('.counter')

let winCounter= document.querySelector('.winCounter')

let reset=0

let box = document.querySelector('.box')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let body = document.querySelector('body')


var node1 = document.createElement("block1"); 
node1.className = 'one block'; 
var node2 = document.createElement("block2"); 
node2.className = 'two block'; 
var node3 = document.createElement("block3"); 
node3.className = 'three block'; 
var node4 = document.createElement("block4"); 
node4.className = 'four block'; 
var node5 = document.createElement("block5"); 
node5.className = 'five block'; 

let blockArray=[node1,node2,node3,node4,node5]


function loadBlocks() {
newBlockTower=[]
     //to start with blocks use code below   
//for (let i=0; i<blockArray.length-2; i++) {
            //startPage=box1.appendChild(blockArray[i])
           // newBlockTower.push(startPage)
        //}
}

window.onload = loadBlocks() 


let easyMode = document.querySelector('.easyMode')

let mediumMode = document.querySelector('.mediumMode')

let hardMode = document.querySelector('.hardMode')

let blockTower =document.querySelectorAll('.block')


        hardMode.addEventListener("click", function() {
            restartButton('hard') });

        mediumMode.addEventListener("click", function() {
            restartButton('medium') });

        easyMode.addEventListener("click", function() {
            restartButton('easy') });


        function restartButton(x) {
            counter.innerHTML=reset
 
            for(let i=0; i<blockArray.length; i++) {

                blockArray[i].remove()
  
            }

            if (x=='hard') {

            for(let j=0; j<blockArray.length; j++) {

                box1.appendChild(blockArray[j]) 
            }
        }

        if (x=='medium') {

            for(let j=0; j<blockArray.length-1; j++) {

                box1.appendChild(blockArray[j]) 
            }
        }

        if (x=='easy') {

            for(let j=0; j<blockArray.length-2; j++) {

                box1.appendChild(blockArray[j]) 
            }
        }

                newBlockTower = document.querySelectorAll('.block')
        }



//         //newBlockTower.eventlistener
// body.addEventListener("click", selectTower);
// function selectTower(evt) {
//     for (let i = 0; i < newBlockTower.length; i++) {
//         evt.preventDefault();
        
//             if (newBlockTower[i].contains(evt.target)) {

//                 if ((newBlockTower[i]==box1.firstElementChild) || (newBlockTower[i]==box2.firstElementChild) || (newBlockTower[i]==box3.firstElementChild)) {

//                 newBlockTower[i].style.border = "5px solid yellow";


//         box1.addEventListener("click", function() {
//             selectBox('selectBox1') });

//         box2.addEventListener("click", function() {
//             selectBox('selectBox2') });

//         box3.addEventListener("click", function() {
//             selectBox('selectBox3') });


//         function selectBox(y) {
//             let woof1=Array.from(box1.children)
//             let woof2=Array.from(box2.children)
//             let woof3=Array.from(box3.children)

//             if (y=='selectBox1') {
//                 woof=woof1
//                 whichBox=box1
//             }

//             if (y=='selectBox2') {
//                 woof=woof2
//                 whichBox=box2
//             }

//              if (y=='selectBox3') {
//                 woof=woof3
//                 whichBox=box3
//             }

//             console.log(whichBox)
//             console.log(woof)

//             if (!woof.includes(newBlockTower[i])) {

//                 woof.unshift(newBlockTower[i]) 

//                 if(((woof.length==0) || (woof.length==1)) || (woof[0].offsetWidth<=woof[1].offsetWidth)) 
//             counter.innerHTML++ }          

//         if((woof.length<=1) || ((woof[0].offsetWidth<=woof[1].offsetWidth) || (woof[1]==false))) {
//             whichBox.prepend(newBlockTower[i])
//             return;

//         }

//     box1.removeEventListener('click', selectBox);
//     box2.removeEventListener('click', selectBox);
//     box3.removeEventListener('click', selectBox);


//     }}

  
//     }
//     else {
//         newBlockTower[i].style.border = "2px solid black";
//     }}
// }



    
//newBlockTower.eventlistener
body.addEventListener("click", selectTower);
function selectTower(evt) {
    for (let i = 0; i < newBlockTower.length; i++) {
        evt.preventDefault();
        
            if (newBlockTower[i].contains(evt.target)) {

                if ((newBlockTower[i]==box1.firstElementChild) || (newBlockTower[i]==box2.firstElementChild) || (newBlockTower[i]==box3.firstElementChild)) {

                newBlockTower[i].style.border = "5px solid yellow";

                box1.addEventListener("click", selectBox1);
                function selectBox1() {
                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);
                    let woof1=Array.from(box1.children)
                    if (!woof1.includes(newBlockTower[i])) {

                            woof1.unshift(newBlockTower[i]) 

                            if(((woof1.length==0) || (woof1.length==1)) || (woof1[0].offsetWidth<=woof1[1].offsetWidth)) 
                        counter.innerHTML++ }          

                    if((woof1.length<=1) || ((woof1[0].offsetWidth<=woof1[1].offsetWidth) || (woof1[1]==false))) {
                        box1.prepend(newBlockTower[i])
                    }

                    

                }
                box2.addEventListener("click", selectBox2);
                function selectBox2() {
                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);
                    
                    let woof2=Array.from(box2.children)
                     if (!woof2.includes(newBlockTower[i])) {

                            woof2.unshift(newBlockTower[i]) 

                            if(((woof2.length==0) || (woof2.length==1)) || (woof2[0].offsetWidth<=woof2[1].offsetWidth)) 
                        counter.innerHTML++ }
                  
                    if((woof2.length<=1) || ((woof2[0].offsetWidth<=woof2[1].offsetWidth) || (woof2[0]==false))) {
                       
                        box2.prepend(newBlockTower[i])
                    }

                }
                

                box3.addEventListener("click", selectBox3);
                function selectBox3() {
                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);
                    let woof3=Array.from(box3.children)
                    if (!woof3.includes(newBlockTower[i])) {

                            woof3.unshift(newBlockTower[i]) 

                            if(((woof3.length==0) || (woof3.length==1)) || (woof3[0].offsetWidth<=woof3[1].offsetWidth)) 
                        counter.innerHTML++ }         

                    if((woof3.length<=1) || (woof3[0].offsetWidth<=woof3[1].offsetWidth)) {
                        box3.prepend(newBlockTower[i])
                    }

                    if ((woof3.length==newBlockTower.length) && (woof3[0].offsetWidth<=woof3[1].offsetWidth)) {
                        setTimeout(function() { alert("We have a winner!"); }, 300); 
                        winCounter.innerHTML++
                         }


                }
            }
        }
            else {
                newBlockTower[i].style.border = "2px solid black";
            }
    }
}