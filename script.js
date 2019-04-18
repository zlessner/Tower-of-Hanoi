//simulation through lowest amount of moves scenario in addition to user playing game

//reset button keeping high score

//add blocks

let counter = document.querySelector('.counter')

let winCounter= document.querySelector('.winCounter')

let totalWinCounter= winCounter.innerHTML

let totalWin = localStorage.getItem('winCounter');

let restart = document.querySelector('.restart')

let blockTower = document.querySelectorAll('.block')

let box1 = document.querySelector('.box1')

let box2 = document.querySelector('.box2')

let box3 = document.querySelector('.box3')

let body = document.querySelector('body')

restart.addEventListener("click", restartButton);
function restartButton(evt) {

    evt.preventDefault();
    window.location.reload(false);
    }


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
                        woof1.unshift(blockTower[i])
                        
                    }

                    if((woof1.length<=1) || (woof1[0].offsetWidth<=woof1[1].offsetWidth)) {
                        counter.innerHTML++
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
                        woof2.unshift(blockTower[i]) 
                    }
                  
                    if((woof2.length<=1) || (woof2[0].offsetWidth<=woof2[1].offsetWidth)) {
                        counter.innerHTML++
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
                        woof3.unshift(blockTower[i])  
                    }

                    if((woof3.length<=1) || (woof3[0].offsetWidth<=woof3[1].offsetWidth)) {
                        counter.innerHTML++
                        box3.prepend(blockTower[i])
                    }

                    if (woof3.length==blockTower.length) {
                        setTimeout(function() { alert("We have a winner!"); }, 300); 
                        //winCounter.innerHTML++
                        //localStorage.getItem('totalScore.innerHTML++');
                        totalWin++
                        localStorage.setItem("winCounter", totalWin);
                         }


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

