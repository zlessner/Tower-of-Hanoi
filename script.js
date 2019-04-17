//simulation through lowest amount of moves scenario in addition to user playing game

//create three different arrays with winning array having correct order and pieces

let counter = document.querySelector('.counter')

let tower1 = document.querySelector('.one')

let tower2 = document.querySelector('.two')

let tower3 = document.querySelector(".three")

let tower4 = document.querySelector('.four')

let tower5 = document.querySelector('.five')

let tower21 = document.querySelector('.two-one')

let tower22 = document.querySelector('.two-two')

let tower23 = document.querySelector(".two-three")

let tower24 = document.querySelector('.two-four')

let tower25 = document.querySelector('.two-five')

let tower31 = document.querySelector('.three-one')

let tower32 = document.querySelector('.three-two')

let tower33 = document.querySelector(".three-three")

let tower34 = document.querySelector('.three-four')

let tower35 = document.querySelector('.three-five')

let blockTower = document.querySelectorAll('.block')

let box1 = document.querySelector('.box1')

let box2 = document.querySelector('.box2')

let box3 = document.querySelector('.box3')

let body = document.querySelector('body')

let childrenBox1=Array.from(box1.children)

let childrenBox2=Array.from(box2.children)

let childrenBox3=Array.from(box3.children)

console.log(childrenBox1)
console.log(childrenBox2)
console.log(childrenBox3)


// global variable selected
let selected = false

body.addEventListener("click", selectTower);
function selectTower(evt) {
    for (let i = 0; i < blockTower.length; i++) {
        evt.preventDefault();

        // if false then
        // selected = true
        // highlight the disc
        // if true
        // do the move
        // unhighlight
        // selected = false


            if (blockTower[i].contains(evt.target)) {

                blockTower[i].style.border = "5px solid yellow";


                box1.addEventListener("click", selectBox1);
                function selectBox1(evt) {
                    evt.preventDefault();
                    let woof1=Array.from(box1.children)
                    if (!woof1.includes(blockTower[i])) {
                        woof1.unshift(blockTower[i])
                        counter.innerHTML++
                    }

                    box1.prepend(blockTower[i])

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
                    box2.prepend(blockTower[i])

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
                    box3.prepend(blockTower[i])

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

