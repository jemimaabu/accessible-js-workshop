// Timer and timeout warning functionality
let timeoutWarningTimer;
let countdownTimer;
let countdownValue = 5; //seconds

function startTimeoutWarning(inactiveTime) {
  timeoutWarningTimer = setTimeout(() => {
    const warning = document.getElementById('timeoutWarning');
    warning.classList.add('show');
    startCountdown();
  }, inactiveTime);
}

function startCountdown() {
  countdownValue = 5;
  updateCountdown();
  
  countdownTimer = setInterval(() => {
    countdownValue--;
    updateCountdown();
    
    if (countdownValue <= 0) {
      hideTimeoutWarning();
      hideModal();
    }
  }, 1000);
  
  // TODO: Announce countdown updates to screen readers
}

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    countdownElement.textContent = countdownValue;
  }
}

function hideTimeoutWarning() {
  const warning = document.getElementById('timeoutWarning');
  warning.classList.remove('show');
  clearInterval(countdownTimer);
}

function resetTimeout() {
  clearTimeoutWarnings();
  const warning = document.getElementById('timeoutWarning');
  warning.classList.remove('show');
  
  announceToScreenReader('Timeout reset. You can continue using the modal.');
  
  startTimeoutWarning();
}

function clearTimeoutWarnings() {
  clearTimeout(timeoutWarningTimer);
  clearInterval(countdownTimer);
}
