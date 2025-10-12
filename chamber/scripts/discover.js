import { lilongweAreas } from "./places.js";

let html = '';
lilongweAreas.forEach(area => {
  html += `
    <div class="place-card">
      <img src="${area.imageUrl}" alt="${area.location}" loading="lazy">
      <h2>${area.name}</h2>
      <p class="location">${area.location}</p>
      <p class="desc">${area.description}</p>
      <button id="openBtn">Learn More</button>

      <dialog id="myDialog">
        <p>${area.description}</p>
        <button id="closeBtn">Close</button>
      </dialog>

    </div>
  `;
});

const container = document.querySelector('.places-container'); 
container.innerHTML = html;

// dialog
const dialog = document.getElementById('myDialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
      dialog.showModal(); // Opens the dialog
});

closeBtn.addEventListener('click', () => {
      dialog.close(); // Closes the dialog
});


//  local storage
const lastVisit = localStorage.getItem("lastVisit");
const now = new Date();
let message = "";

if (lastVisit) {
  const previous = new Date(lastVisit);
  const diffTime = now - previous;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `Welcome back! You last visited ${diffDays} day${diffDays > 1 ? "s" : ""} ago.`;
  }
} else {
  message = "Welcome! Let us know if you have any questions.";
}

// Save the current visit time
localStorage.setItem("lastVisit", now.toISOString());

// show Message for 2 seconds
let hasShownMessage = false;

setTimeout(() => {
  if (!hasShownMessage) {
    const messageBox = document.querySelector('#message');
    messageBox.innerHTML = message;
    messageBox.style.display = 'block';

    hasShownMessage = true;

    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 2000); // hide after 2 seconds
  }
}, 1000); // show after 1 second
// alert(message);