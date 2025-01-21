// Display current year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.querySelector('#currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = String(new Date().getFullYear());
    }

    const lastModifiedElement = document.querySelector('#lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`; // Dynamically set last modified date
    }
});

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.querySelector('#lastModified');
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});