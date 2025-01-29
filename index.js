function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}

updateUTCTime();