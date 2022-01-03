function countdown() {
    const today = new Date();

    document.getElementById("fulldate").textContent = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    document.getElementById("fulltime").textContent = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(today.getDate() == 1 && (today.getMonth()+1) == 1) {
        firstJanuary();
    }

    if(today.getDate() == 28 && (today.getMonth()+1) == 2) {
        holidayCarnival();
    }

    if(today.getDate() == 1 && (today.getMonth()+1) == 3) {
        holidayCarnival();
    }

    setInterval(countdown, 500);
}

function firstJanuary() {
    document.getElementById("infoText").textContent = "01 de Janeiro";
    document.getElementById("subinfoText").textContent = "Tenha um feliz ano novo!";
    document.getElementById("imageEvent").src = "img/first-january.png";
}

function holidayCarnival() {
    document.getElementById("infoText").textContent = "28 de Fevereiro";
    document.getElementById("subinfoText").textContent = "Tenha um ótimo carnaval!";
    document.getElementById("imageEvent").src = "img/holiday-carnival.png";
}