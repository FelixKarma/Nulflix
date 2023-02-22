let isOut = false;
function fadeout(){
    const square = document.getElementById("iframe_bd");
    const display = document.getElementById("video_bd")

    if (isOut) {
        display.style.display="none"
        square.style.width ="560px";
        square.style.height ="315px";
        isOut=false;
    } else {
        display.style.display="block"
        square.style.width ="560px";
        square.style.height ="315px";
        isOut=true;

    }

}