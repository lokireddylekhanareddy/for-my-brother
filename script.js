// ================= FIRST PAGE =================

function showNext() {

    document.getElementById("home").style.display = "none";

    document.getElementById("second").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= MEMORY PAGE =================

function showMemories() {

    document.getElementById("second").style.display = "none";

    document.getElementById("memories").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= FINAL PAGE =================

function showFinal() {

    document.getElementById("memories").style.display = "none";

    document.getElementById("final").style.display = "flex";

    window.scrollTo(0, 0);
}



// ================= OPEN GIFT =================

function openGift() {

    const gift =
        document.getElementById("giftBox");

    const button =
        document.getElementById("openGiftBtn");

    const message =
        document.getElementById("secretMessage");


    // Stop if gift was already opened

    if (gift.dataset.opened === "true") {
        return;
    }

    gift.dataset.opened = "true";


    // Gift shakes first

    gift.style.animation =
        "giftShake 0.6s ease";


    // Wait for shake

    setTimeout(function () {

        // Gift disappears

        gift.style.transform =
            "scale(0) rotate(20deg)";

        gift.style.opacity = "0";


        // Hide button

        button.style.display = "none";


        // Show secret message

        setTimeout(function () {

            message.style.display = "block";

            createSparkles();

        }, 300);

    }, 600);

}



// ================= READ MORE =================

function readMore() {

    const moreMessage =
        document.getElementById("moreMessage");

    const readMoreBtn =
        document.getElementById("readMoreBtn");


    // Show second message

    moreMessage.style.display = "block";


    // Hide button

    readMoreBtn.style.display = "none";


    // Sparkles again

    createSparkles();

}



// ================= SPARKLES =================

function createSparkles() {

    for (let i = 0; i < 18; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.innerHTML = "✨";


        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (15 + Math.random() * 20) + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex = "100";


        sparkle.style.animation =
            "sparkleFall 1.5s ease forwards";


        document.body.appendChild(sparkle);


        setTimeout(function () {

            sparkle.remove();

        }, 1500);

    }

}