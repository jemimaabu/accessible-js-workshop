// Modal dialog functionality

function showModal() {
  const modal = document.getElementById('confirmModal');
  modal.showModal();

  const inactiveTime = 2500; // 2.5 seconds
  startTimeoutWarning(inactiveTime);
}

function hideModal() {
  const modal = document.getElementById('confirmModal');
  modal.close();
  clearTimeoutWarnings();
}

function confirmAction() {
  const overlay = document.getElementById('accessibilityOverlay');
  overlay.classList.add('hidden');
  
  localStorage.setItem(OVERLAY_REMOVED_KEY, 'true');
  
  const modal = document.getElementById('confirmModal');
  modal.close();
  clearTimeoutWarnings();
  
  announceToScreenReader('Overlay removed! The visual interface is now available.');
}

function cancelModal() {
  hideModal();
}
