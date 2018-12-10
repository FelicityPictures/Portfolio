const uxprojects = [
  // [image path, project title, role]
  // ["/user_experience/CPACS", "ux/CPACS/Logo.png", "Enterprise System Redesign", "UI Designer"],
  // ["/user_experience/CPACS", "graphic_design/Scribble/Logo.png", "Enterprise System Redesign", "UI Designer"],
  // ["/user_experience/CPACS", "ux/CPACS/Logo.png", "Enterprise System Redesign", "UI Designer"],
  // ["/user_experience/CPACS", "ux/CPACS/Logo.png", "Enterprise System Redesign", "UI Designer"],
  ["/user_experience/CPACS", "ux/CPACS/Logo.png", "Enterprise System Redesign", "UI Designer"]
]

for(let i = 0; i < 5; i++){
  const [path, imagePath, title, role] = uxprojects[i];

  let proj = document.createElement("a");
  proj.classList.add("main_display_projectBox");
  proj.href = path;

  let projImg = document.createElement("img");
  projImg.src = imagePath;
  projImg.classList.add("main_display--projectImage");
  proj.appendChild(projImg);

  let projTitle = document.createElement("h1");
  projTitle.textContent = title;
  projTitle.classList.add("main_display--projectTitle");
  proj.appendChild(projTitle);

  let projRole = document.createElement("p");
  projRole.textContent = role;
  projRole.classList.add("main_display--projectRole");
  proj.appendChild(projRole);

  document.querySelector("#main").appendChild(proj);
}
