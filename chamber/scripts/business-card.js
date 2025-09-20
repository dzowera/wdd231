const myURL = 'https://dzowera.github.io/wdd231/chamber/data/members.json';

async function getMembers() {
  try {
    const response = await fetch(myURL);
    if(response.ok){
      const data = await response.json();
      console.log(data);
      renderHTML(data.members);
      // listView(data.members)
    }else{
      throw Error (await response.text());
    }
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

const renderHTML = (members) => {
  let html = '';

  members.forEach((member) => {
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
            <p><strong>Email</strong>: ${member.email}</p>
            <p><strong>Phone</strong>: ${member.phone}</p>
            <p><strong>URL</strong>: <a href="${member.website}" target="_blank">${member.website}</a></p>
          </div>
        </div>
      </section>
    `;
  });

  const section = document.querySelector('.business-section');
  if (section) {
    section.innerHTML = html;
  } else {
    console.error("No element with class .business-section found in HTML");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getMembers();
});

// function listView(members){
//   const listViewElem = document.querySelector('.list-view');
//   listViewElem.addEventListener('click', () =>{
//     let html = '';
//     members.forEach((member, index) =>{
//       const classType = index % 2 === 0 ? 'black' : 'white';
//       html += `
//       <div class="list-conainer">
//         <div class="${classType}">
//           <div>
//             ${member.name}
//           </div>
//           <div>
//             ${member.email}
//           </div>
//         </div>
//       </div>
        
//       `;
//     });
//     document.querySelector('.business-section').innerHTML = html;
    
//   });
// }

// listView()
