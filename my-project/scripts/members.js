// members.js
const memberships = [
  {
    level: "Gold",
    description: "Gold members enjoy premium benefits including priority support, exclusive events, and top-tier visibility."
  },
  {
    level: "Silver",
    description: "Silver members receive enhanced access to resources, networking opportunities, and discounted services."
  },
  {
    level: "Bronze",
    description: "Bronze members get basic access to our community, newsletters, and entry-level perks."
  },
  {
    level: "Nonprofit Organization",
    description: "Nonprofit members benefit from tailored support, collaboration opportunities, and reduced fees."
  }
];

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("membershipDialog");
  const dialogText = document.getElementById("dialogText");
  const closeBtn = document.getElementById("closeDialog");

  document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      const member = memberships.find(m => m.level === level);
      dialogText.textContent = member ? member.description : "Details not found.";
      dialog.showModal();
    });
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membershipForm");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Stop the default form submission

      // Collect form data
      const formData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim(),
        suggestions: document.getElementById("suggestions").value.trim(),
        membership: document.getElementById("membership").value
      };

      // Save to localStorage
      localStorage.setItem("submittedData", JSON.stringify(formData));

      // Redirect to thank-you page
      window.location.href = "thankyou.html";
    });
  });
