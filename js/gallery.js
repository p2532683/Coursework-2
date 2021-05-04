var slideImage = ["img/1-11.png", "img/1-1.png", "img/1-2.png", "img/1-3.png", "img/1-4.png", "img/1-5.png", "img/1-6.png", "img/1-7.png", "img/1-8.png", "img/1-9.png", "img/1-10.png"];
let slideName = ["Driving Through the night", "Construction", "Trainyard", "Portrait", "City view 1", "City view 2", "City View Portrait","City view 3", "Towers", "Lonely car", "Spooky road"];
let slideDate = ["15.04.2019", "18.11.2019", "16.01.2018", "25.04.2016", "15.04.2019", "18.11.2019", "16.01.2018", "25.04.2016", "15.04.2016", "18.11.2011", "16.01.2015"];
let slideLikes = ["155", "45", "158", "489", "165", "165", "25","135", "623", "62", "11"];
var currentImage = 0;
let slideshow = document.getElementById("slideshowImage");
let limit = slideImage.length - 1; 
setTimeout(()=>{
    document.getElementById("imgLike").innerHTML = "❤️ " + slideLikes[currentImage]; 
    document.getElementById("imgDate").innerHTML = slideDate[currentImage]; 
    document.getElementById("imgTitle").innerHTML = slideName[currentImage];},5);
    slideshow.src = slideImage[currentImage];
slideshowImage = (evt) => {
    console.log(evt.target);
    if(evt.target == document.getElementById("forward")) {

        if(currentImage == limit){}          // Checking for last image
        else { 
            currentImage++;
        } // Checking for last image
        slideshow.src = slideImage[currentImage]; // Changing the src of the img tag
        document.getElementById("imgLike").innerHTML = "❤️ " + slideLikes[currentImage]; // chagning the number of likes
        document.getElementById("imgDate").innerHTML = slideDate[currentImage]; // Changing the date
        document.getElementById("imgTitle").innerHTML = slideName[currentImage]; // changing the name 

        console.log(currentImage);
        console.log(slideshow.src);
    }
    
    else {
        if(currentImage == 0){}                        // Limiting lowest number 
        else{
            currentImage--;    
        }
        slideshow.src = slideImage[currentImage];
        document.getElementById("imgLike").innerHTML = "❤️ " + slideLikes[currentImage];
        document.getElementById("imgDate").innerHTML = slideDate[currentImage];
        document.getElementById("imgTitle").innerHTML = slideName[currentImage];
        console.log(currentImage);
        console.log(slideshow.src);
    }
}
document.getElementById("forward").addEventListener("click", slideshowImage);
document.getElementById("back").addEventListener("click", slideshowImage);
/* Gallery opening  */
let galTarget = document.getElementById("gallery-photos");
let galFS = document.getElementById("image-fs");
let imgSRC = document.getElementById("image-src");
imgFS = (evt) => {
    if(window.screen.width >= 1400) {
        window.scrollTo(0,0);
    }
    if (galFS.style.display == "none") { //checking what condition the fullscreen is
    galFS.style.top = scrollY + "px"; // ensuring the the fullscreen image div is centered in the users window
    galFS.style.display = "block"; //making the fullscreen image appear
    imgSRC.src = evt.target.src; //takes the event targets src and applies it to the fullscreen image
    setTimeout(()=>{galFS.style.opacity = 1;}, 100); //gives a 0.1 seconds to load before animating
    bodys.style.height = "100vh"; // Sets the height of the frame
    bodys.style.overflow = "hidden"; // Stops the user frome being able to scroll
} else { 
     galFS.style.opacity = 0; //fade away
     setTimeout(()=>{galFS.style.display = "none";}, 1000); // hides fullscreen image mode
     bodys.style.overflow = ""; //allows the user to scroll again
     bodys.style.height = "auto"; 

 }
}

document.getElementById("pic1").addEventListener('click', imgFS);
document.getElementById("pic2").addEventListener('click', imgFS);
document.getElementById("pic3").addEventListener('click', imgFS);
document.getElementById("pic4").addEventListener('click', imgFS);
galFS.addEventListener('click', imgFS);