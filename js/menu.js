// Menu and dropdown functionality

function toggleDropdown(event) {
  const dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('active');
}

function initializeDropdownFocusHandlers() {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;
  
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const content = dropdown.querySelector('.dropdown-content');
  
  // Show dropdown on focus
  toggle.addEventListener('focus', function() {
    dropdown.classList.add('active');
  });
  
  // Hide dropdown on blur, but with delay to allow focus to move to menu items
  toggle.addEventListener('blur', function() {
    setTimeout(() => {
      if (!dropdown.contains(document.activeElement)) {
        dropdown.classList.remove('active');
      }
    }, 100);
  });
  
  // Also handle blur on dropdown content items
  content.addEventListener('blur', function(e) {
    setTimeout(() => {
      if (!dropdown.contains(document.activeElement)) {
        dropdown.classList.remove('active');
      }
    }, 100);
  }, true); // Use capture to handle all child elements
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDropdownFocusHandlers);
} else {
  initializeDropdownFocusHandlers();
}
