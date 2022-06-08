


// Get the navbar and initial offset
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

//sticky navbar fuction
window.onscroll = function () {
    if (window.pageYOffset >= logo.offsetTop){
        navbar.classList.add("sticky");
        logo.classList.add("sticky");
        
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("sticky");

    }
};
  