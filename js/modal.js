// Modal dialog functionality

function showModal() {
  const modal = document.getElementById('confirmModal');
  modal.classList.add('show');

  const inactiveTime = 2500; // 2.5 seconds
  startTimeoutWarning(inactiveTime);
}

function hideModal() {
  const modal = document.getElementById('confirmModal');
  modal.classList.remove('show');
  clearTimeoutWarnings();
}

function confirmAction() {
  const overlay = document.getElementById('accessibilityOverlay');
  overlay.classList.add('hidden');
  
  localStorage.setItem(OVERLAY_REMOVED_KEY, 'true');
  
  const modal = document.getElementById('confirmModal');
  modal.classList.remove('show');
  clearTimeoutWarnings();
  
  announceToScreenReader('Overlay removed! The visual interface is now available.');
}

function cancelModal() {
  hideModal();
}
