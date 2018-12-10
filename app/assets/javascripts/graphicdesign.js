let currentProject = 0;
let currentProgression = 0;

const scribble = [
  // [path, comment. alt]
  ["graphic_design/Scribble/Logo.png", "Design-a-thon", "Design-a-thon"],
  ["graphic_design/Scribble/iteration1.png", "First attempt at logo", "First attempt at logo"],
  ["graphic_design/Scribble/iteration2.svg", "Second attempt at logo", "Second attempt at logo"],
  ["graphic_design/Scribble/poster.png", "Advertising poster", "Advertising poster"]
  // ["graphic_design/Scribble/merch.jpg", "Branded merchandise", "Branded merchandise"]
]

const sous = [
  ["graphic_design/Sous/Logo.svg", "Sous: Cooking appliation", "Logo for Sous"],
  ["graphic_design/Sous/first_iteration.svg", "First attempt", "first attempt at logo"],
  ["graphic_design/Sous/second_iteration.svg", "Second attempt", "second attempt at logo"],
  ["graphic_design/Sous/third_iteration.svg", "Iteration on second attempt", "iteration on attempts"],
  ["graphic_design/Sous/fourth_iteration.svg", "Another iteration", "another iteration"],
  ["graphic_design/Sous/Logo.svg", "Final Logo", "final logo for Sous"]
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

  contentDiv.style.touchAction = "none";
  return contentDiv;
}

let main = document.querySelector("#main");

function appendNewContent(x,y,animationClass){
  let content = createContent(x,y);
  main.removeChild(main.lastChild);
  main.appendChild(content);
  validateArrows();
  content.classList.add(animationClass);
  content.addEventListener('pointerdown', startSwipe);
  content.addEventListener('pointermove', swiping);
  content.addEventListener('pointerup', stopSwipe);
}

function leftArrowClicked(animationClass){
  currentProject--;
  currentProgression = 0;
  if(currentProject < 0){
    currentProject = projects.length-1;
  }
  appendNewContent(currentProject,currentProgression, animationClass);
}

function rightArrowClicked(animationClass){
  currentProject++;
  currentProgression = 0;
  if(currentProject > projects.length-1){
    currentProject = 0;
  }
  appendNewContent(currentProject,currentProgression, animationClass);
}

function downArrowClicked(animationClass){
  currentProgression++;
  if(currentProgression < projects[currentProject].length){
    appendNewContent(currentProject,currentProgression, animationClass);
  }else{
    currentProgression = projects[currentProject].length-1;
  }
}

function upArrowClicked(animationClass){
  currentProgression--;
  if(currentProgression >= 0){
    appendNewContent(currentProject,currentProgression, animationClass);
  }else{
    currentProgression = 0;
  }
}

// ===================SWIPING===================
let screenWidth = screen.width;
let screenHeight = screen.height;
let origin = null;
let direction = null;

function startSwipe(event) {
    event.preventDefault();
    event.stopPropagation();

    let x = event.clientX;
    let y = event.clientY;

    if((x > 1*screenWidth/3 && x < 2*screenWidth/3) && (y < 3*screenHeight/7 || y > 4*screenHeight/7)){
      direction = "y";
      console.log("y");
    }else if((x < 1*screenWidth/3 || x > 2*screenWidth/3) && (y > 3*screenHeight/7 && y < 4*screenHeight/7)){
      direction = "x";
      console.log("x");
    }

    if(direction == "x"){
      origin = x;
    }else{
      origin = y;
    }

    event.target.setPointerCapture(event.pointerId);
}

function swiping(event) {
  if (origin && direction) {
    const element = event.currentTarget;
    if(direction == "x"){
      let delta = event.clientX - origin;
      element.style.transform = 'translateX(' + delta + 'px)';
    }else{
      let delta = event.clientY - origin;
      element.style.transform = 'translateY(' + delta + 'px)';
    }
  }
}
function stopSwipe(event) {
  if (!origin || !direction) {
    return;
  }

  let delta = null;

  if(direction == "x"){
    delta = event.clientX - origin;
  }else{
    delta = event.clientY - origin;
  }

  if (Math.abs(delta) < 100) {
    event.currentTarget.style.transform = '';
    return;
  }

  let nextIndex = currentProject;
  if (delta < 0 && direction == "x") {
    leftArrowClicked("from-right");
  } else if (delta > 0 && direction == "x") {
    rightArrowClicked("from-left");
  } else if (delta < 0 && direction == "y") {
    if(currentProgression < projects[currentProject].length-1){
      downArrowClicked("from-bottom");
    }else{
      event.currentTarget.style.transform = 'translateX(0px)';
      event.currentTarget.style.transform = 'translateY(0px)';
    }
  } else if (delta > 0 && direction == "y") {
    if(currentProgression > 0){
      upArrowClicked("from-top");
    }else{
      event.currentTarget.style.transform = 'translateX(0px)';
      event.currentTarget.style.transform = 'translateY(0px)';
    }
  }
  origin = null;
  direction = null;
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
  document.querySelector("#leftarrow").addEventListener('click', function(){
    leftArrowClicked("from-right");
  });
  document.querySelector("#rightarrow").addEventListener('click', function(){
    rightArrowClicked("from-left");
  });
  document.querySelector("#uparrow").addEventListener('click', function(){
    upArrowClicked("from-bottom");
  });
  document.querySelector("#downarrow").addEventListener('click', function(){
    downArrowClicked("from-top");
  });

  // Add keyboard button event listeners
  window.onkeyup = function(e) {
    var key = e.keyCode;
    if(key == 37){
      leftArrowClicked("from-right");
    }else if(key == 38){
      upArrowClicked("from-bottom");
    }else if(key == 39){
      rightArrowClicked("from-left");
    }else if(key == 40){
      downArrowClicked("from-top");
    }
  }

});
