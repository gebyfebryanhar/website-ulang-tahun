// ===============================
// PAGE TRANSITION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");

});


// ===============================
// CLICK EFFECT
// ===============================

document.addEventListener("click", function (event) {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "20px";
    heart.style.color = "#c96d8b";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(

        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },

            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],

        {
            duration: 900,
            easing: "ease-out"
        }

    );

    setTimeout(() => {

        heart.remove();

    }, 900);

});


// ===============================
// CONFETTI
// ===============================

const confettiContainer =
    document.getElementById("confetti");

if (confettiContainer) {

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.style.position = "fixed";

        piece.style.width = "8px";

        piece.style.height = "8px";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.borderRadius = "2px";

        piece.style.background =
            `hsl(${Math.random() * 360}, 60%, 75%)`;

        piece.style.animation =
            `fall ${3 + Math.random() * 4}s linear infinite`;

        piece.style.animationDelay =
            Math.random() * 4 + "s";

        confettiContainer.appendChild(piece);

    }

}


// ===============================
// CONFETTI ANIMATION
// ===============================

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    0% {

        transform:
            translateY(-20px)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);