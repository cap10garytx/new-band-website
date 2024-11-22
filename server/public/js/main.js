// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeSplashScreen();
  initializeTimeDisplay();
  initializeStationButtons();
});

// Splash Screen Handler
function initializeSplashScreen() {
  const enterButton = document.querySelector('.enter-button');
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');

  if (enterButton) {
    enterButton.addEventListener('click', () => {
      splashScreen.classList.add('hidden');
      mainContent.classList.remove('hidden');
    });
  }
}

// Time Display Handler
function initializeTimeDisplay() {
  function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    if (timeDisplay) {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      timeDisplay.textContent = timeString;
    }
  }

  setInterval(updateTime, 1000);
  updateTime();
}

// Station Button Handler
function initializeStationButtons() {
  document.querySelectorAll('.station-button').forEach(button => {
    const originalTextX = {};
    const originalTextY = {};

    const text = button.querySelector('text');
    if (text) {
      originalTextX[button.id] = text.getAttribute('x');
      originalTextY[button.id] = text.getAttribute('y');

      button.addEventListener('mouseenter', () => {
        const rect = button.querySelector('rect');
        if (rect) rect.style.fill = '#D4D4D4';
      });

      button.addEventListener('mouseleave', () => {
        const rect = button.querySelector('rect');
        if (rect) rect.style.fill = '#C0C0C0';
        text.setAttribute('x', originalTextX[button.id] || '100');
        text.setAttribute('y', originalTextY[button.id] || '245');
      });

      button.addEventListener('mousedown', () => {
        const rect = button.querySelector('rect');
        if (rect) rect.style.fill = '#A0A0A0';
        const currentX = parseInt(text.getAttribute('x'));
        const currentY = parseInt(text.getAttribute('y'));
        text.setAttribute('x', currentX + 1);
        text.setAttribute('y', currentY + 1);
      });

      button.addEventListener('mouseup', () => {
        const rect = button.querySelector('rect');
        if (rect) rect.style.fill = '#D4D4D4';
        text.setAttribute('x', originalTextX[button.id] || '100');
        text.setAttribute('y', originalTextY[button.id] || '245');
      });
    }
  });
}

// Navigation Handler
function navigateTo(page) {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('active');
    
    setTimeout(() => {
      window.location.href = `/${page}`;
    }, 2500);
  }
}
