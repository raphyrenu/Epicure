const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');
const body = document.body;

// Check the user's preferred color scheme
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
body.classList.toggle('dark-mode', isDarkMode);

// Toggle between dark and light mode
function toggleTheme() {
  body.classList.toggle('dark-mode');
  darkModeIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline';
  lightModeIcon.style.display = body.classList.contains('dark-mode') ? 'inline' : 'none';
}

darkModeIcon.addEventListener('click', toggleTheme);
lightModeIcon.addEventListener('click', toggleTheme);
