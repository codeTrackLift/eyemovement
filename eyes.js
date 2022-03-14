var balls = document.getElementsByClassName("ball");
var eyes = document.getElementsByClassName("eye");

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

const addEffect = () => {
    for (let i = 0; i < 2; i++) {
        eyes[i].classList.add('effect');
    }
}

const removeEffect = () => {
    for (let i = 0; i < 2; i++) {
        eyes[i].classList.remove('effect');
    }
}