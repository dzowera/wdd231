const url = 'https://dzowera.github.io/wdd231/chamber/data/members.json';


async function getMembers(){
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);

  renderHTML(data.members)
  listView(data.members)

}

getMembers();

const renderHTML = (members =>{
  let html = '';
  members.forEach(member => {
    html += `
      <section>
        <div class="business-name">
          <h2>${member.name}</h2>
          <p>${member.industry}</p>
        </div>
        <div class="business-info">
          <div>
            <img src="images/icons/${member.image}.svg" alt="${member.name} logo">
          </div>
          <div>
            <p><strong>Email</strong>: ${member.email} </p>
            <p><strong>Phone</strong>: ${member.phone} </p>
            <p><strong>URL</strong>: ${member.website} </p>
          </div>
          
        </div>
      </section>
    `;
  });

  document.querySelector('.business-section').innerHTML = html;
  // console.log(html);
});

// const listView = (members) => {
//   document.querySelectorAll('.views').forEach(view => {
//     view.addEventListener('click', () => {
//       // add a class to the  business seection
//       document.querySelector('.business-section').classList.toggle('js-list-container')
//       let html = ''; // Reset on each click
//       members.forEach(member => {
//         html += `
//           <section class="js-list-view">
//              <div>${member.name}</div>
//              <div>${member.address}</div>
//              <div>${member.phone}</div>
//              <div>${member.website} </div>
//           </section>
         
//         `;
//       });
//       document.querySelector('.business-section').innerHTML = html;
//     });
//   });
// };

