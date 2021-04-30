let tran = document.getElementById("transition").style;
let blue = document.getElementById("blue").style;
let red = document.getElementById("red").style;
let yellow = document.getElementById("yellow").style;
let main = document.getElementById("body").style;
let LSmenu = document.getElementById("LargeScreen").style;

setTimeout(()=>{
    main.opacity = "1";
    LSmenu.opacity = "1";
}, 20); //applying opening fade in to the page


aboutT = () => {
    window.scrollTo(0, 0); //Scroll location to ensure the animation plays correct
    menu.style.display = "none";
    main.transition = "opacity 0.5s"
    main.opacity = "0";
    LSmenu.transition = "opacity 0.5s"
    LSmenu.opacity = "0";
    blue.transform = "translate(100vw, 0vh)";
    red.transform = "translate(100vw, -100vh)";
    yellow.transform = "translate(100vw, -200vh)";
    tran.display = "block";     //initializing the animation
    setTimeout(()=> {
    blue.transition = "transform 0.5s linear";
    red.transition = "transform 0.5s linear";
    yellow.transition = "transform 0.5s linear"}, 1); //applying the transition contitions
    setTimeout(()=> {blue.transform = "translate(-100vw, 0vh)"}, 2);
    setTimeout(()=> {red.transform = "translate(-100vw, -100vh)"}, 200); 
    setTimeout(()=> {yellow.transform = "translate(-100vw, -200vh)"}, 400); //making the animation
    setTimeout(()=> {window.location.href = "/about.html";}, 900); //redirecting the user after animation
}



    galleryT = () => {
      window.scrollTo(0, 0);
      menu.style.display = "none";
      main.transition = "opacity 0.5s"
      main.opacity = "0";
      LSmenu.transition = "opacity 0.5s"
      LSmenu.opacity = "0";
      blue.transform = "translate(-100vw, 0vh)";
      red.transform = "translate(-100vw, -100vh)";
      yellow.transform = "translate(-100vw, -200vh)";
      tran.display = "block";
      setTimeout(()=> {
      blue.transition = "transform 0.5s linear";
      red.transition = "transform 0.5s linear";
      yellow.transition = "transform 0.5s linear"}, 1);
      setTimeout(()=> {blue.transform = "translate(100vw, 0vh)"}, 2);
      setTimeout(()=> {red.transform = "translate(100vw, -100vh)"}, 200); 
      setTimeout(()=> {yellow.transform = "translate(100vw, -200vh)"}, 400);
      setTimeout(()=> {window.location.href = "/Gallery.html";}, 900);
}

    contactT = () => {
        window.scrollTo(0, 0);
        menu.style.display = "none";
        main.transition = "opacity 1s"
        main.opacity = "0";
        LSmenu.transition = "opacity 0.5s"
        LSmenu.opacity = "0";
        blue.transform = "translatey(-100vh)";
        red.transform = "translatey(-200vh)";
        yellow.transform = "translatey(-300vh)";
        tran.display = "block";
        setTimeout(()=> {
        blue.transition = "transform 1s linear";
        red.transition = "transform 1s linear";
        yellow.transition = "transform 1s linear"}, 1);
        setTimeout(()=> {blue.transform = "translatey(100vh)"}, 2);
        setTimeout(()=> {red.transform = "translatey(100vh)"}, 200); 
        setTimeout(()=> {yellow.transform = "translatey(200vh)"}, 400);
        setTimeout(()=> {window.location.href = "/Contacts.html";}, 1100);
}




/*                     Theme         */ 
let bodys = document.body;
let themeSelect = document.getElementsByClassName("themebtn")
let theme = localStorage.getItem("theme");
let font = localStorage.getItem("font")
console.log(localStorage.getItem("theme"));
if(theme == "high_contrast") {
    bodys.classList.replace('color', "high_contrast");
}
highContrast = () =>{
    if(bodys.classList.contains("color")){    //Checking for the current theme of the the body
    bodys.classList.replace("color", "high_contrast");  //Replacing the class on the body
    themeSelect.innerHTML = "Contrast: Color";
    localStorage.setItem('theme', "high_contrast");  //Saving the data to Localstorage for later use
    console.log(localStorage.getItem("theme"));
    } else {
        bodys.classList.replace("high_contrast", "color");
        themeSelect.innerHTML = "Contrast: High";
        localStorage.setItem('theme', "color");
        console.log(localStorage.getItem('theme'));
    }
}
let i = 0;

fontSize = () => {
    console.log("fontSize " + bodys.style.fontSize);
    i++;                // Simple Counter system
    console.log(i);
   if(i == 1){
       bodys.style.fontSize = "150%";
       localStorage.setItem('font', "1");
       document.getElementByClassName("fontbtn").innerHTML = "Font Size: LARGE";
   } 
    if (i == 2) {
       bodys.style.fontSize = "75%";
       localStorage.setItem('font', "2");
       document.getElementByClassName("fontbtn").innerHTML = "Font Size: SMALL";
   } 
   if (i == 3) {
       bodys.style.fontSize = "100%";
       localStorage.setItem('font', "3");
       document.getElementsByClassName("fontbtn").innerHTML = "Font Size: MED";
       i = 0;  // return back to beginning
   } 
   else {
       console.log("font error")
   }
}

if(font) {      // Checking and Loading localStorage
    i = font;
    i--;
    fontSize();
} else {        // If no localStorge is found
    i = 2;
    fontSize();
}
