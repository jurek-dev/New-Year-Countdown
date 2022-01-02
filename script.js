function countdown() {
    const today = new Date();

    document.getElementById("fulldate").textContent = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    document.getElementById("fulltime").textContent = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setInterval(countdown, 500);
}