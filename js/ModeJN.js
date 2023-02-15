if (localStorage.getItem("mode") == "night") {
    document.body.style.color = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(48, 16, 16)";
        modeNuit = false;

    } else {
        document.body.style.color = "rgb(48, 16, 16)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        modeNuit = true;
}