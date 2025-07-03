// Menu and dropdown functionality

function toggleDropdown(event) {
  const dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('active');
}

// TODO: Add keyboard navigation for dropdown
// TODO: Add ARIA attributes for accessibility
// TODO: Add proper focus management
// TODO: Add escape key handler to close dropdown
