const profile = document.getElementById("profile");

profile.src = config.profileImage;

document.getElementById("waBtn").href =
    config.whatsappLink;

document.getElementById("tgBtn").href =
    config.telegramLink;

let index = 0;

function changeBackground() {

    document.body.style.backgroundImage =
        `url(${config.backgrounds[index]})`;

    index++;

    if (index >= config.backgrounds.length) {
        index = 0;
    }
}

changeBackground();

setInterval(changeBackground, 3000);
