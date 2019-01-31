let aboutButton = document.querySelector("#aboutButton");
const projectsButton = document.querySelector("#projectsButton");

aboutButton.addEventListener("click", function(){
  window.location.href = "/about";
});
projectsButton.addEventListener("click", function(){
  window.location.href = "/projects";
});
