var balls = document.getElementsByClassName("ball");
var eyes = document.getElementsByClassName("eye");
var mouth = document.getElementById("mouth");
var message = document.getElementById('message');

document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
};

document.onmousedown = () => {
    addEffect();
}

document.onmouseup = () => {
    removeEffect();
}

document.ontouchstart = () => {
    addEffect();
}

document.ontouchend = () => {
    removeEffect();
}

document.onmouseleave = () => {
    addEffect();
    mouth.classList.remove('talking');
    message.style.opacity = 0;
}

document.onmouseenter = () => {
    removeEffect();
    message.style.opacity = 1;
}

const addEffect = () => {
    for (let i = 0; i < 2; i++) {
        eyes[i].classList.add('effect');
    }
    mouth.classList.toggle('talking');
}

const removeEffect = () => {
    for (let i = 0; i < 2; i++) {
        eyes[i].classList.remove('effect');
    }
    mouth.classList.toggle('talking');
}