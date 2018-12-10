let navbar = document.querySelector("#navbar");
let hamburgerbutton = document.querySelector("#hamburgerbutton");
let exitbutton = document.querySelector("#closeNavbarButton");

function showNav(){
  navbar.style.display = "block";
  hamburgerbutton.style.display = "none";
  navbar.classList.add("appear-from-top");
  navbar.classList.remove("disappear-to-top");
}

function hideNav(){
  navbar.classList.remove("appear-from-top");
  navbar.classList.add("disappear-to-top");
  setTimeout(function(){
    navbar.style.display = "none";
    hamburgerbutton.style.display = "block";
  }, 500);

}

hamburgerbutton.addEventListener('click', showNav);
exitbutton.addEventListener('click', hideNav);
