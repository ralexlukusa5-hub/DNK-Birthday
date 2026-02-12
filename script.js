function showLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
    letter.style.opacity = 0;
    let op = 0;
    const timer = setInterval(() => {
        if(op >= 1){
            clearInterval(timer);
        }
        letter.style.opacity = op;
        op += 0.05;
    }, 30);
}

// Génération de cœurs animés
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
