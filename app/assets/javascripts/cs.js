const csprojects = [
  // [link, title, description, role]
  ["/computer_science/snapshot", "Snapshot", "Mobile phone oriented variant of the popular game 'Assassin'", "Front-end developer"],
  ["https://github.com/FelicityPictures/Super-Broccoli", "Course Broccoli", "Course dependency tree for Stuyvesant High School students", "Front-end developer"],
  ["https://github.com/FelicityPictures/Messenger", "Notis", "Messaging app for computer course", "Front-end developer"]
]

let mainContent = document.querySelector("#main");
for(let i = 0; i < csprojects.length; i++){
  const [link, title, description, role] = csprojects[i];

  let content = document.createElement("a");
  content.classList.add("main_display_projectBox");
  content.classList.add("main_display_csproject")
  content.href = link;
  if(link.charAt(0) != "/"){
    content.target = "_blank";
  }

  let header = document.createElement("h1");
  header.classList.add("main_display--projectTitle");
  header.textContent = title;
  content.appendChild(header);

  let descript = document.createElement("p");
  descript.classList.add("main_display--projectDescription");
  descript.textContent = description;
  content.appendChild(descript);

  let projrole = document.createElement("p");
  projrole.classList.add("main_display--projectRole");
  projrole.textContent = role;
  content.appendChild(projrole);

  main.appendChild(content);
}
