const membersURL = `https://dzowera.github.io/wdd231/chamber/data/members.json`;

// Fetch members from JSON
async function fetchMembers() {
  try {
    const response = await fetch(membersURL);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing
      filterMembers(data.members); // call filter after data is loaded
   
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

// Filter members with membershipLevel 2 or 3
function filterMembers(members) {
  const selectedMembers = members.filter(
    (member) => member.membershipLevel === 2 || member.membershipLevel === 3
  );
  displayHTML(selectedMembers);
 
}

// Display filtered members in HTML
function displayHTML(members) {
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
            <p><strong>Email</strong>: ${member.email}</p>
            <p><strong>Phone</strong>: ${member.phone}</p>
            <p><strong>URL</strong>: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level</strong>: ${member.membershipLevel}</p>
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
}

// Start the fetch when page loads
document.addEventListener("DOMContentLoaded", fetchMembers);

