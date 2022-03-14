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
    toggleEffect();
}

document.onmouseup = () => {
    toggleEffect();
}

document.ontouchstart = () => {
    toggleEffect();
}

document.ontouchend = () => {
    toggleEffect();
}

const toggleEffect = () => {
    for (let i = 0; i < 2; i++) {
        eyes[i].classList.toggle('effect');
    }
}