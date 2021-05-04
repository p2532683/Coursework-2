//                                        Contacts

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

open = (evt) => {
    console.log("RAN OPEN");
    var target = evt.target;
    var parent = target.parentElement; //Selecting the parent Elemement of the event target

    if(parent.nextElementSibling.className == "box-closed"){ //checking if the event target box is closed
        console.log(target);
        console.log(parent);
        console.log(parent.nextElementSibling);
        console.log(target.previousElementSibling);

        parent.nextElementSibling.className = "box-open"; //openign the box
        parent.nextElementSibling.style.height = "auto";
        target.previousElementSibling.style.transform = "rotate(90deg) translatey(10px)"; //rotating the arrow

    } else {
        parent.nextElementSibling.className = "box-closed";
        parent.nextElementSibling.style.height = "0px";
        target.previousElementSibling.style.transform = "rotate(270deg) translatey(-10px)";
    }
    
}

box1.addEventListener("click", open);
box2.addEventListener("click", open);
box3.addEventListener("click", open);