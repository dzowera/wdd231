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

const container = document.querySelector('.places-container'); // Use a wrapper for all cards
container.innerHTML = html;