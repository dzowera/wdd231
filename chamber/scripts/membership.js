const membershipLevels = [
  {
    id: "np",
    name: "NP Membership",
    description: "For non-profit organizations. No fee.",
    fee: 0
  },
  {
    id: "bronze",
    name: "Bronze Membership",
    description: "Basic membership level.",
    fee: 50
  },
  {
    id: "silver",
    name: "Silver Membership",
    description: "Intermediate membership level.",
    fee: 100
  },
  {
    id: "gold",
    name: "Gold Membership",
    description: "Premium membership level.",
    fee: 200
  }
];


const myDialog = document.querySelector('#my-dialog');
const container = document.querySelector('#membership-cards');

membershipLevels.forEach(level => {
  const card = document.createElement('div');
  card.classList.add('card'); // Optional: for styling

  const heading = document.createElement('h3');
  heading.textContent = level.name;

  const button = document.createElement('button');
  button.textContent = 'Learn More';
  button.dataset.level = level.id;

  button.addEventListener('click', () => {
    showDetails(level);
  });

  card.appendChild(heading);
  card.appendChild(button);
  container.appendChild(card);
});

function showDetails(data) {
  myDialog.showModal(); // Use showModal() for better UX
  const para = document.querySelector('#content');
  para.innerHTML = `
    <strong>${data.name}</strong><br>
    ${data.description}<br>
    <em>Fee: $${data.fee}</em>
  `;
}

const closeButton = document.querySelector('#close');
closeButton.addEventListener('click', () => {
  myDialog.close();
});







