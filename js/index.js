// Workshop state management and initialization

const OVERLAY_REMOVED_KEY = 'accessibilityOverlayRemoved';

document.addEventListener('DOMContentLoaded', function() {
  const overlayRemoved = localStorage.getItem(OVERLAY_REMOVED_KEY) === 'true';
  
  if (overlayRemoved) {
    const overlay = document.getElementById('accessibilityOverlay');
    if (overlay) {
      overlay.classList.add('hidden');
    }
    
    setTimeout(() => {
      announceToScreenReader('Welcome back! The visual interface is available. You previously completed the accessibility overlay challenge.');
    }, 1000);
  } else {
    setTimeout(() => {
      announceToScreenReader('Workshop page loaded. Use your screen reader to navigate and find the Turn off overlay button.');
    }, 1000);
  }
  
  // TODO: Initialize other accessibility features
  // TODO: Set up keyboard event listeners
  // TODO: Add skip links functionality
  // TODO: Initialize focus management
});

function resetWorkshop() {
  localStorage.removeItem(OVERLAY_REMOVED_KEY);
  const overlay = document.getElementById('accessibilityOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
  }
  announceToScreenReader('Workshop reset. The accessibility overlay has been restored.');
}
