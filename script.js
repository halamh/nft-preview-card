document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    // Ryan from Slack explanation: "JS can't run at the start if the things that it is referencing is not available yet."

let heroImage = document.getElementById("hero"); 

function changeColor(){
    heroImage.style.backgroundColor = "hsl(178, 100%, 50%)";
    heroImage.style.opacity = "0.5";
}

function restoreColor(){
    heroImage.style.backgroundImage = "";
    heroImage.style.opacity = "";
}

heroImage.onmouseover = changeColor;
heroImage.onmouseout = restoreColor;

});
