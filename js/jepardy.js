function setup() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((b) => {
        b.addEventListener("click", calledIt);
    })
}
function calledIt(e) {
    let ele = e.target;
    let p = ele.parentNode;
    let l = ele.classList;
    console.log(ele, l, p);
    if (l.value == "start") {
        p.classList.remove("z");
        p.classList.add("y");
        p.classList.add("bigger");
    }
    else if (l.value == "middle") {
        p.classList.remove("y");
        p.classList.add("x");
    }
    else if (l.value == "end") {
        p.classList.remove("x");
        p.classList.remove("bigger");
        p.classList.add("w");
    }
    else if (l.value == "wait") {
        p.classList.remove("w");
        p.classList.add("z");
    
    }
}

function playSound (e) {
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!sound) {return};
    sound.currentTime = 0;
    sound.play(); 
}

setup();
window.addEventListener("keydown", playSound);