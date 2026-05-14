/* 
    Freelance Headless CMS Implementation Specialist
    Theme Toggle Persistence Logic - theme-toggle.js
*/

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Dark mode is primary

    // Initial load
    htmlElement.setAttribute('data-theme', currentTheme);
    updateToggleIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const targetTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
        updateToggleIcon(targetTheme);
    });

    function updateToggleIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
        }
    }
});
