//simulation through lowest amount of moves scenario in addition to user playing game

//create three different arrays with winning array having correct order and pieces

//reset button

let counter = document.querySelector('.counter')

let blockTower = document.querySelectorAll('.block')

let box1 = document.querySelector('.box1')

let box2 = document.querySelector('.box2')

let box3 = document.querySelector('.box3')

let body = document.querySelector('body')

let childrenBox1=Array.from(box1.children)

let childrenBox2=Array.from(box2.children)

let childrenBox3=Array.from(box3.children)


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
                        counter.innerHTML++
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
                        woof2.unshift(blockTower[i])
                        counter.innerHTML++
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
                        woof3.unshift(blockTower[i])
                        counter.innerHTML++
                    }
                    if((woof3.length<=1) || (woof3[0].offsetWidth<=woof3[1].offsetWidth)) {
                    box3.prepend(blockTower[i])
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

