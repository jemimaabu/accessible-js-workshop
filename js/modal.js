// Modal dialog functionality

let previousActiveElement = null;
const overlayRemoved = localStorage.getItem(OVERLAY_REMOVED_KEY) === 'true';


function showModal() {
  const modal = document.getElementById('confirmModal');
  
  // Store the currently focused element
  previousActiveElement = document.activeElement;
  
  modal.classList.add('show');
  
  // Set ARIA attributes
  modal.setAttribute('aria-hidden', 'false');
  document.body.setAttribute('aria-hidden', 'true');
  
  modal.focus();
  
  // Add keyboard event listeners
  document.addEventListener('keydown', handleModalKeydown);

  const inactiveTime = 2500; // 2.5 seconds

  if (!overlayRemoved) {
    startTimeoutWarning(inactiveTime);
  }
}

function hideModal() {
  const modal = document.getElementById('confirmModal');
  modal.classList.remove('show');
  clearTimeoutWarnings();
  
  // Set ARIA attributes
  modal.setAttribute('aria-hidden', 'true');
  document.body.setAttribute('aria-hidden', 'false');
  
  // Remove keyboard event listeners
  document.removeEventListener('keydown', handleModalKeydown);
  
  // Restore focus to the element that opened the modal
  if (previousActiveElement) {
    previousActiveElement.focus();
    previousActiveElement = null;
  }
}

function confirmAction() {
  const overlay = document.getElementById('accessibilityOverlay');
  overlay.classList.add('hidden');
  
  localStorage.setItem(OVERLAY_REMOVED_KEY, 'true');
  
  const modal = document.getElementById('confirmModal');
  modal.classList.remove('show');
  clearTimeoutWarnings();
  
  // Set ARIA attributes
  modal.setAttribute('aria-hidden', 'true');
  document.body.setAttribute('aria-hidden', 'false');
  
  // Remove keyboard event listeners
  document.removeEventListener('keydown', handleModalKeydown);
  
  // Restore focus to the element that opened the modal
  if (previousActiveElement) {
    previousActiveElement.focus();
    previousActiveElement = null;
  }
}

// Handle keyboard navigation within modal
function handleModalKeydown(event) {
  const modal = document.getElementById('confirmModal');
  
  if (event.key === 'Escape') {
    event.preventDefault();
    hideModal();
    return;
  }
}