// ================= PAGE 1 =================

function showSorry() {

    document.getElementById("home").style.display = "none";

    document.getElementById("sorry").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= PAGE 2 =================

function showMessage() {

    document.getElementById("sorry").style.display = "none";

    document.getElementById("message").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= PAGE 3 =================

function showFinal() {

    document.getElementById("message").style.display = "none";

    document.getElementById("final").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= OPEN GIFT =================

function openGift() {

    const gift = document.getElementById("gift");

    const button = document.getElementById("giftButton");

    const message = document.getElementById("finalMessage");


    // Prevent opening twice

    if (gift.dataset.opened === "true") {
        return;
    }

    gift.dataset.opened = "true";


    // Gift animation

    gift.style.transform =
        "scale(1.3) rotate(10deg)";

    setTimeout(function () {

        gift.style.transform =
            "scale(0) rotate(25deg)";

        gift.style.opacity = "0";

    }, 500);


    // Hide button

    setTimeout(function () {

        button.style.display = "none";

    }, 400);


    // Show final message

    setTimeout(function () {

        message.style.display = "block";

        createSparkles();

    }, 800);

}



// ================= SPARKLES =================

function createSparkles() {

    for (let i = 0; i < 25; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (15 + Math.random() * 25) + "px";

        sparkle.style.zIndex = "100";

        sparkle.style.pointerEvents = "none";

        sparkle.style.animation =
            "sparkleFall 1.5s ease forwards";


        document.body.appendChild(sparkle);


        setTimeout(function () {

            sparkle.remove();

        }, 1500);

    }

}