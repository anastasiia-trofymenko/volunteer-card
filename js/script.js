// data
const volunteersData = [
  {
    id: 1,
    organization: "Wildlife Conservation Society",
    location: "Kenya",
    impact: "Animal Welfare",
    description:
      "Help protect endangered species and restore natural habitats in the heart of East Africa. Join our team in wildlife monitoring and community education.",
  },
  {
    id: 2,
    organization: "Ocean Cleanup Initiative",
    location: "Bali, Indonesia",
    impact: "Environmental Protection",
    description:
      "Join our team removing plastic waste from beaches and educating local communities about sustainability and ocean conservation.",
  },
  {
    id: 3,
    organization: "Education for All Foundation",
    location: "Guatemala",
    impact: "Education & Youth",
    description:
      "Teach English and computer skills to children in underserved communities while experiencing rich Mayan culture and traditions.",
  },
];

// Track liked/saved cards
let likedCards = new Set();

/**
 * Creates HTML for a single volunteer card
 * @param {Object} volunteer - Volunteer opportunity data
 * @returns {string} HTML string for the card
 */
function createCard(volunteer) {
  const isLiked = likedCards.has(volunteer.id);

  return `
        <div class="volunteer-card" data-id="${volunteer.id}">
            <span class="impact-badge">${volunteer.impact}</span>
            <button class="like-button ${
              isLiked ? "liked" : ""
            }" onclick="toggleLike(${volunteer.id})">
                ❤️
            </button>
            <h2 class="organization-name">${volunteer.organization}</h2>
            <p class="location">${volunteer.location}</p>
            <p class="description">${volunteer.description}</p>
            <button class="apply-button" onclick="applyNow('${
              volunteer.organization
            }')">
                Apply Now
            </button>
        </div>
    `;
}

/**
 * Displays all volunteer cards on the page
 */
function displayCards() {
  const container = document.getElementById("cards-container");
  const cardsHTML = volunteersData
    .map((volunteer) => createCard(volunteer))
    .join("");
  container.innerHTML = cardsHTML;
}

// ============================================
// USER INTERACTIONS
// ============================================
/**
 * Handles the "Apply Now" button click
 * @param {string} orgName - Organization name
 */

function applyNow(orgName) {
  // Show modal
  const modal = document.getElementById("modal");
  document.getElementById("modal-org").textContent = orgName;
  document.getElementById("form-success").style.display = "none";
  document.getElementById("apply-form").style.display = "flex";
  modal.classList.remove("hidden");
}

// Close logic
window.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

  // allow clicking on background to close
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.add("hidden");
  });
});

document.getElementById("apply-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Simple success animation
  document.getElementById("apply-form").style.display = "none";
  document.getElementById("form-success").style.display = "block";
  setTimeout(() => {
    modal.classList.add("hidden");
    // Reset for next use
    e.target.reset();
    document.getElementById("form-success").style.display = "none";
    document.getElementById("apply-form").style.display = "flex";
  }, 2000);
});

/**
 * Toggles the like/save state for a card (BONUS feature)
 * @param {number} id - Volunteer opportunity ID
 */
function toggleLike(id) {
  if (likedCards.has(id)) {
    likedCards.delete(id);
    console.log(`Opportunity removed from your favorites!`);
  } else {
    likedCards.add(id);
    console.log(`Opportunity saved to your favorites!`);
  }

  // Re-render cards to update the like button state
  displayCards();
}

/**
 * Initialize the application when the page loads
 */
window.addEventListener("DOMContentLoaded", function () {
  // Simulate loading delay for better UX (optional)
  setTimeout(() => {
    displayCards();
  }, 800);
});

window.toggleLike = toggleLike;
window.applyNow = applyNow;
