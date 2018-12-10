let currentProject = 0;
let currentProgression = 0;

const scribble = [
  // [path, comment. alt]
  ["graphic_design/Scribble/Logo.png", "Design-a-thon", "Design-a-thon"],
  ["graphic_design/Scribble/iteration1.png", "First attempt at logo", "First attempt at logo"],
  ["graphic_design/Scribble/iteration2.svg", "Second attempt at logo", "Second attempt at logo"],
  ["graphic_design/Scribble/poster.png", "Advertising poster", "Advertising poster"],
  ["graphic_design/Scribble/merch.jpg", "Branded merchandise", "Branded merchandise"],
]

const sous = [
  ["graphic_design/Sous/Logo.svg", "Sous: Cooking appliation", "Logo for Sous"],
  ["graphic_design/Sous/first_iteration.svg", "First attempt", "first attempt at logo"],
  ["graphic_design/Sous/second_iteration.svg", "Second attempt", "second attempt at logo"],
  ["graphic_design/Sous/third_iteration.svg", "Iteration on second attempt", "iteration on attempts"],
  ["graphic_design/Sous/fourth_iteration.svg", "Another iteration", "another iteration"],
  ["graphic_design/Sous/Logo.svg", "Final Logo", "final logo for Sous"],
]

const projects = [
  scribble, sous
]

function validateArrows(){
  let upbutton = document.querySelector("#uparrow");
  if(currentProgression <= 0){
    upbutton.classList.add("invalid");
  }else{
    upbutton.classList.remove("invalid");
  }

  let downbutton = document.querySelector("#downarrow");
  if(currentProgression >= projects[currentProject].length - 1){
    downbutton.classList.add("invalid");
  }else{
    downbutton.classList.remove("invalid");
  }
}

function createContent(x, y){
  const [source, comment, alt_text] = projects[x][y];
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("main_carousel--content");

  let contentImg = document.createElement("img");
  contentImg.src = source;
  contentImg.alt = alt_text
  contentDiv.appendChild(contentImg);
  let contentP = document.createElement("p");
  contentP.textContent = comment;
  contentDiv.appendChild(contentP);

  return contentDiv;
}

let main = document.querySelector("#main");

function appendNewContent(x,y,animationClass){
  let content = createContent(x,y);
  content.classList.add(animationClass);
  main.removeChild(main.lastChild);
  main.appendChild(content);
  validateArrows();
  content.addEventListener('pointerdown', startSwipe);
  content.addEventListener('pointermove', swiping);
  content.addEventListener('pointerup', stopSwipe);

  content.addEventListener('touchstart', startSwipe);
  content.addEventListener('touchmove', swiping);
  content.addEventListener('touchend', stopSwipe);
}

function leftArrowClicked(){
  currentProject--;
  currentProgression = 0;
  if(currentProject < 0){
    currentProject = projects.length-1;
  }
  appendNewContent(currentProject,currentProgression,"from-right");
}

function rightArrowClicked(){
  currentProject++;
  currentProgression = 0;
  if(currentProject > projects.length-1){
    currentProject = 0;
  }
  appendNewContent(currentProject,currentProgression,"from-left");
}

function downArrowClicked(){
  currentProgression++;
  if(currentProgression < projects[currentProject].length){
    appendNewContent(currentProject,currentProgression, "from-top");
  }else{
    currentProgression = projects[currentProject].length-1;
  }
}

function upArrowClicked(){
  currentProgression--;
  if(currentProgression >= 0){
    appendNewContent(currentProject,currentProgression, "from-bottom");
  }else{
    currentProgression = 0;
  }
}

// ===================SWIPING===================

let originX = null;

function startSwipe(event) {
    event.preventDefault();
    event.stopPropagation();
    originX = event.clientX;

    event.target.setPointerCapture(event.pointerId);
}

function swiping(event) {
    if (originX) {
      let delta = event.clientX - originX;
      const element = event.currentTarget;
      element.style.transform = 'translateX(' + delta + 'px)';
    }
}
function stopSwipe(event) {
    if (!originX) {
        return;
    }

    const currentX = event.clientX;

    const delta = currentX - originX;

    originX = null;
    if (Math.abs(delta) < 100) {
        event.currentTarget.style.transform = '';
        return;
    }

    let nextIndex = currentProject;
    if (delta < 0) {
        leftArrowClicked();
    } else {
        rightArrowClicked();
    }
}
window.addEventListener('load', () => {
  // Load content
  let content = createContent(currentProject,currentProgression);
  main.appendChild(content);
  validateArrows();

  // Add swipe event listeners
  content.addEventListener('pointerdown', startSwipe);
  content.addEventListener('pointermove', swiping);
  content.addEventListener('pointerup', stopSwipe);

  // Add on screen button event listeners
  document.querySelector("#leftarrow").addEventListener('click', leftArrowClicked);
  document.querySelector("#rightarrow").addEventListener('click', rightArrowClicked);
  document.querySelector("#uparrow").addEventListener('click', upArrowClicked);
  document.querySelector("#downarrow").addEventListener('click', downArrowClicked);

  // Add keyboard button event listeners
  window.onkeyup = function(e) {
    var key = e.keyCode;
    if(key == 37){
      leftArrowClicked();
    }else if(key == 38){
      upArrowClicked();
    }else if(key == 39){
      rightArrowClicked();
    }else if(key == 40){
      downArrowClicked();
    }
  }

});
