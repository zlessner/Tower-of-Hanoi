//simulation through lowest amount of moves scenario in addition to user playing game

//reset button keeping high score

//add blocks


let counter = document.querySelector('.counter')

//let winCounter= document.querySelector('.winCounter').innerHTML
let totalWin=0

if(!totalWin) {
    totalWin = 0
}
else {
    totalWin = parseInt(totalWin, 0)
}

let oink = localStorage.getItem('totalWin')

document.querySelector('.winCounter').innerHTML = totalWin

//document.getElementById("test").innerHTML = localStorage.getItem("name1");

//let totalWinCounter= winCounter.innerHTML

// localStorage.setItem('winCounter', totalWinCounter)

//change to 1



// console.log(totalWin)
// console.log(typeof totalWin)
// totalWin++
// console.log(totalWin)

// localStorage.setItem('winCounter', totalWin)


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

function loadBlocks() {
    
        box1.appendChild(node1)
        box1.appendChild(node2)
        box1.appendChild(node3)
        box1.appendChild(node4)
        box1.appendChild(node5)
 
}

window.onload = loadBlocks() 


let easyMode = document.querySelector('.easyMode')

let hardMode = document.querySelector('.hardMode')

let blockTower = document.querySelectorAll('.block')

let bigBlock = document.querySelectorAll('.five')


    //if (numberBlocks.length==blockTower.length) {


        hardMode.addEventListener("click", restartButton);
        function restartButton(evt) {

            evt.preventDefault();
            window.location.reload(false);
        }

        //refresh and then run function
    easyMode.addEventListener("click", removeBlock);
    
    //document.onload = 
    function removeBlock(evt) {
        evt.preventDefault();

        //window.location.reload(false);

        box1.removeChild(box1.lastChild);
        //blockTower.pop();
        //console.log(blockTower)
        //console.log(blockTower.length)
        if(bigBlock.innerHTML != ""){this.disabled = true}
    }
    

  //  }


body.addEventListener("click", selectTower);
function selectTower(evt) {
    for (let i = 0; i < blockTower.length; i++) {
        evt.preventDefault();

            if (blockTower[i].contains(evt.target)) {

                if ((blockTower[i]==box1.firstElementChild) || (blockTower[i]==box2.firstElementChild) || (blockTower[i]==box3.firstElementChild)) {

                blockTower[i].style.border = "5px solid yellow";

                box1.addEventListener("click", selectBox1);
                function selectBox1(evt) {
                    evt.preventDefault();
                    let woof1=Array.from(box1.children)
                    if (!woof1.includes(blockTower[i])) {

                        if((evt.target== evt.currentTarget) && (!woof1.includes(blockTower[i-1])))  { 
                            counter.innerHTML++ 
                        }

                        woof1.unshift(blockTower[i])
                        
                    }

                    if((woof1.length<=1) || (woof1[0].offsetWidth<=woof1[1].offsetWidth)) {
                        box1.prepend(blockTower[i])
                    }

                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);

                }

                box2.addEventListener("click", selectBox2);
                function selectBox2(evt) {
                    evt.preventDefault();
                    
                    let woof2=Array.from(box2.children)
                     if (!woof2.includes(blockTower[i])) {

                        if((evt.target== evt.currentTarget) && (!woof2.includes(blockTower[i-1])))  { 
                        counter.innerHTML++ 
                        } 

                        woof2.unshift(blockTower[i]) 
                    }
                  
                    if((woof2.length<=1) || (woof2[0].offsetWidth<=woof2[1].offsetWidth)) {
                       
                        box2.prepend(blockTower[i])
                    }

                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);
                }

                box3.addEventListener("click", selectBox3);
                function selectBox3(evt) {
                    evt.preventDefault();
                    let woof3=Array.from(box3.children)
                    if (!woof3.includes(blockTower[i])) {

                        if((evt.target== evt.currentTarget) && (!woof3.includes(blockTower[i-1])))  { 
                        counter.innerHTML++ }
                            

                        woof3.unshift(blockTower[i])  
                    }

                    if((woof3.length<=1) || (woof3[0].offsetWidth<=woof3[1].offsetWidth)) {
                        box3.prepend(blockTower[i])
                    }

                    if (woof3.length==blockTower.length) {
                        setTimeout(function() { alert("We have a winner!"); }, 300); 
                        //winCounter.innerHTML++
                        //localStorage.getItem('totalScore.innerHTML++');
                        totalWin++
                        localStorage.setItem("totalWin", totalWin);
                         }

                         console.log(woof3.length)
                         console.log(blockTower.length)
                         console.log(bigBlock)

                    box1.removeEventListener('click', selectBox1);
                    box2.removeEventListener('click', selectBox2);
                    box3.removeEventListener('click', selectBox3);
                }
            }
        }
            else {
                blockTower[i].style.border = "2px solid black";
            }
    }
}

