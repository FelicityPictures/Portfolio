let origin = 0;
window.onscroll = function(e){
  if(document.body.getBoundingClientRect().top - origin < -75){
    console.log("hide");
    origin = document.body.getBoundingClientRect().top;

  }else if(document.body.getBoundingClientRect().top - origin > 75){
    console.log("show");
    origin = document.body.getBoundingClientRect().top;
  }
};



// let navbar = document.querySelector("#navbar");
// let hamburgerbutton = document.querySelector("#hamburgerbutton");
// let exitbutton = document.querySelector("#closeNavbarButton");
// let header = document.getElementsByTagName("header")[0];
//
// function showNav(){
//   navbar.style.display = "block";
//   hamburgerbutton.style.display = "none";
//   navbar.classList.add("appear-from-top");
//   navbar.classList.remove("disappear-to-top");
//   header.style.height = "100%";
// }
//
// function hideNav(){
//   navbar.classList.remove("appear-from-top");
//   navbar.classList.add("disappear-to-top");
//   setTimeout(function(){
//     navbar.style.display = "none";
//     hamburgerbutton.style.display = "block";
//   }, 500);
//   header.style.height = "10%";
// }
//
// hamburgerbutton.addEventListener('click', showNav);
// exitbutton.addEventListener('click', hideNav);
