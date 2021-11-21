let heroImage = document.querySelector("h1");  //h1 is just for testing, it will be changed later to "hero".

function changeColor(){
    heroImage.style.backgroundColor = "red";
}

heroImage.onclick = changeColor;

