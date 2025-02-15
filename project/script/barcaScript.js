// Header / Options / Hamburger menu / Dark mode
document.querySelector('.options-btn').addEventListener('click', function (e) {
    e.stopPropagation();
    const dropdown = document.querySelector('.options-dropdown');
    dropdown.classList.toggle('open');
});

document.addEventListener('click', function () {
    const dropdown = document.querySelector('.options-dropdown');
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
    }
});

const button = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);
    button.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
} else {
    body.classList.add('light-mode');
}

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    
    button.textContent = isDarkMode ? '☀️' : '🌙';
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});

// Scroll Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.scroll-text');
    
    if (!textElement) {
        console.error("El elemento '.scroll-text' no se encontró en el DOM.");
        return;
    }

    const text = textElement.dataset.text;
    const textArray = text.split('');

    textElement.innerHTML = textArray
    .map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`)
    .join('');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("El elemento es visible, comenzando la animación...");
                const letters = textElement.querySelectorAll('span');
                letters.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('visible');
                    }, index * 50);
                });
                observer.unobserve(entry.target);
            } else {
                console.log("El elemento aún no es visible.");
            }
        });
    }, {
        threshold: 0.5,
    });

    observer.observe(textElement);
});

// Next match countdown timer
const countDownDate = new Date("Feb 17, 2025 12:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        if (document.getElementById("countdown-timer")) {
            document.getElementById("countdown-timer").innerHTML = "EXPIRED";
        }
    }
}, 1000);

const syncButton = document.getElementById("sync-button");
if (syncButton) {
    syncButton.addEventListener("click", function () {
        alert("Schedules synced to your calendar!");
    });
}

// Scroll matches
function scrollMatches(direction) {
    const matchesContainer = document.querySelector('.matches');
    if (matchesContainer) {
        const scrollAmount = 300;
        matchesContainer.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Hero section
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (slides.length > 0) {
        slides[0].classList.add('active'); 
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    }
});

// History page
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const contentItems = document.querySelectorAll('.content-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => {
                i.classList.remove('active');
                const arrow = i.querySelector('.arrowi');
                if (arrow) arrow.textContent = '▶';
            });

            item.classList.add('active');
            const arrow = item.querySelector('.arrowi');
            if (arrow) arrow.textContent = '▼';

            const id = item.getAttribute('data-id');

            contentItems.forEach(content => {
                if (content.id === id) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// Team section
function scrollTeam(button, direction) {
    const container = button.closest('.team').querySelector('.illustration-container');
    if (container) {
        const scrollAmount = 500; 
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// About us 
document.addEventListener("DOMContentLoaded", () => {
    const textOptions = document.querySelectorAll(".text-container div");
    const descriptions = document.querySelectorAll(".description-item");

    textOptions.forEach((textOption) => {
        textOption.addEventListener("click", () => {
            const id = textOption.getAttribute("data-id");

            textOptions.forEach((text) => text.classList.remove("active"));
            descriptions.forEach((desc) => desc.classList.remove("active"));

            textOption.classList.add("active");
            const matchingDescription = document.querySelector(`.description-item[data-id="${id}"]`);
            if (matchingDescription) {
                matchingDescription.classList.add("active");
            }
        });
    });
});
