// Weather 
const temp = 15;
const windSpeed = 10; 

function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

const windChillElement = document.getElementById("windChill");
if (windChillElement) {
    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

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
