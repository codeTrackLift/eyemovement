var balls = document.getElementsByClassName("ball");

document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
};

document.ontouchmove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
};

document.onmousedown = () => {
    for (let i = 0; i < 2; i++) {
        balls[i].classList.add('effect');
    }
}

document.onmouseup = () => {
    for (let i = 0; i < 2; i++) {
        balls[i].classList.remove('effect');
    }
}

document.ontouchstart = () => {
    for (let i = 0; i < 2; i++) {
        balls[i].classList.add('effect');
    }
}

document.ontouchend = () => {
    for (let i = 0; i < 2; i++) {
        balls[i].classList.remove('effect');
    }
}