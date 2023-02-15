if (localStorage.getItem("mode") == "night") {
    document.body.style.color = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        modeNuit = false;

    } else {
        document.body.style.color = "rgb(0, 0, 0)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        modeNuit = true;
}