console.log("work_title.js loaded"); // Loaded Output

const workTitles = [
  "I do Web Dev",
  "I do 3D Modeling",
  "I do Digital Art",
  "I do Game Dev",
  "I do 3D Animation",
  "I do Python Coding"
];

const moreInfoTitles = [
  "Coding in HTML, CSS and JavaScript",
  "3D Modeling with Blender",
  "Digital Art with Krita",
  "Game Development with Godot 4 / Gdscript",
  "3D Animation with Blender",
  "Python Coding with Python 3"
];

const titleElement = document.getElementById("workTitle");
const moreInfoElement = document.getElementById("workTitle2");
let currentTitleIndex = 0;

function updateWorkTitle() {
  titleElement.textContent = workTitles[currentTitleIndex];
  moreInfoElement.textContent = moreInfoTitles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % workTitles.length;
  setTimeout(updateWorkTitle, 2000);
}

updateWorkTitle();

