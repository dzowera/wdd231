import { lilongweAreas } from "./places.js";

let html = '';
lilongweAreas.forEach(area => {
  html += `
    <div class="place-card">
      <img src="${area.imageUrl}" alt="${area.location}">
      <h2>${area.name}</h2>
      <p class="location">${area.location}</p>
      <p class="desc">${area.description}</p>
    </div>
  `;
});

const container = document.querySelector('.places-container'); 
container.innerHTML = html;


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