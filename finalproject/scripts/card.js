import { malawianFoods } from "./foods.js";

async function renderFoodCards() {
  try {
    let html = '';
    malawianFoods.forEach(food => {
      html += `
        <div class="food-card">
            <img src="${food.image}" alt="Malawian food" loading="lazy">
            <p class="name">${food.name}</p>
            <p class="info">${food.description}</p>
            <button id="more">More</button>
            <dialog>
              <p>${food.scientificInfo}</p>
              <button class="close">Close</button>
            </dialog>
        </div>
      `;
    });

    const foodCard = document.querySelector('.food-container');
    foodCard.innerHTML = html;

    // Attach event listeners
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach(card => {
      const moreBtn = card.querySelector('#more');
      const dialog = card.querySelector('dialog');
      const closeBtn = card.querySelector('.close');

      moreBtn.addEventListener('click', () => {
        dialog.showModal();
      });

      closeBtn.addEventListener('click', () => {
        dialog.close();
      });
    });
  } catch (error) {
    console.error("Error rendering food cards:", error);
    const fallback = document.querySelector('.food-container');
    fallback.innerHTML = `<p>Sorry, we couldn't load the food cards. Please try again later.</p>`;
  }
}

renderFoodCards();