// Simple dark mode toggle (optional)
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    document.body.appendChild(darkModeToggle);
});
