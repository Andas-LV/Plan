const imgSrc = document.querySelector('.img')

function showList (index) {
    let getHide = getIndex(index);    
    console.log(getHide);
    for (let i = 0; i < 1; i++) {
        if(getHide.style.display == 'block') {
            getHide.style.display = 'none';
        } else { 
            getHide.style.display = 'block';
        }
    }
}

function getIndex(index){
    let getHide = document.querySelectorAll('.submenu')[index]; 
    return getHide;   
}

let switchMode = document.getElementById("switchMode")

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "light-mode.css"){
        theme.href = "main.css";
        imgSrc.src = "./icons/light mode icon.png";
    } else {
        theme.href = "light-mode.css";
        imgSrc.src ="./icons/dark mode icon 1.png";
    }
}




