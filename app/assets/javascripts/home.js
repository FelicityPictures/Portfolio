const navImages = {
  "About" : 'icons/about.png',
  "UX/UI Work" : 'icons/ux.png',
  "Graphic Design" : 'icons/graphic_design.png',
  "CS Projects" : 'icons/cs.png',
  "Resume" : 'icons/resume.png'
};
const idToLink = {
  "nav0" : "about",
  "nav1" : "ux",
  "nav2" : "graphicdesign",
  "nav3" : "cs",
  "nav4" : "resume"
}
function removeNavImage(e){
  const navDiv = document.querySelector('#nav-image');
  navDiv.innerHTML = '';
}

function changeNavImage(e){
  const navDiv = document.querySelector('#nav-image');
  navDiv.innerHTML = "";
  const image = document.createElement('img');
  image.src = navImages[e.target.textContent];
  navDiv.appendChild(image);
  e.target.addEventListener('mouseleave',removeNavImage);
}

function redirect(e){
  window.location.href = "./" + idToLink[e.target.id] + ".html";
}

window.addEventListener('load', () => {
  for(let i=0; i<5; i++){
    let nav = document.querySelector('#nav'+i);
    nav.addEventListener('mouseover',changeNavImage);
  }
});
