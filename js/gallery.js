var slideImage = ["img/pic.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/10.png"];
let slideName = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11"];
let slideDate = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11"];
let slideLikes = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11"];
var currentImage = 0;
let slideshow = document.getElementById("slideshowImage");
let limit = slideImage.length - 1; 

slideshowImage = (evt) => {
    console.log(evt.target);
    if(evt.target == document.getElementById("forward")) {

        if(currentImage == limit){}          // Checking for last image
        else { 
            currentImage++;
        } // Checking for last image
        slideshow.src = slideImage[currentImage];
        document.getElementById("imgLike").innerHTML = "❤️ " + slideLikes[currentImage];
        document.getElementById("imgDate").innerHTML = slideDate[currentImage];
        document.getElementById("imgTitle").innerHTML = slideName[currentImage];

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



