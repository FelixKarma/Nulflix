const boutonJourNuit = document.getElementById("boutonJourNuit");
const body = document.body;
let modeNuit = false;

if (localStorage.getItem("mode") == "night") {
    document.body.style.color = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(48, 16, 16";
        boutonJourNuit.innerText = "Mode nuit";
        modeNuit = false;
    } else {
        document.body.style.color = "rgb(48, 16, 16)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        boutonJourNuit.innerText = "Mode jour";
        modeNuit = true;
}

boutonJourNuit.addEventListener("click", function () {
    if (modeNuit) {
        document.body.style.color = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(48, 16, 16";
        boutonJourNuit.innerText = "Mode nuit";
        modeNuit = false;
    } else {
        document.body.style.color = "rgb(48, 16, 16)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        boutonJourNuit.innerText = "Mode jour";
        modeNuit = true;
    }
});

boutonJourNuit.addEventListener("click", () => {
    let mode;
    if (localStorage.getItem("mode") == "night") {
        mode = "day";
    } else {
        mode = "night";
    }
    localStorage.removeItem("mode");
    localStorage.setItem("mode", mode);
});