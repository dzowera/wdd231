// as per instruction

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
  
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets)
}

getProphetData();

let html = '';

const displayProphets = (prophets) =>{
  prophets.forEach((prophet) =>{
    
    html += `
      <section class="prophet-card">
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="prophet image" loading="lazy" width="340" height="440">
      </section>
    `;
      
  })
  cards.innerHTML = html;
  console.log(html);
}
