let body = document.getElementById("body");
let menuButton = document.getElementById("menu-toggle");
let menu = document.getElementById("menu");



showMenu = () =>{
    console.log("showMenu() run");
    if(menu.style.display == "none"){ //checking if menu is open
        menu.style.display = "block";
        setTimeout(()=>{menu.style.opacity = "100%"},20);
        body.style.height = "100vh"; //making the page unscrollable
    } else {
        menu.style.opacity = "0%";
        setTimeout(()=>{menu.style.display = "none"}, 1000);
        body.style.height = "";
    }
}

menuButton.addEventListener("click", showMenu);

