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