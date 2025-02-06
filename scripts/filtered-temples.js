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

// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Tijuana Mexico",
        location: "Tijuana, Baja California, Mexico",
        dedicated: "2015, December, 13",
        area: 30599,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        <em>${temple.location}</em><br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area} sq ft
    `;

    card.appendChild(img);
    card.appendChild(figcaption);
    return card;
}

function displayTemples(filter) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    const filteredTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        switch (filter) {
            case 'old':
                return year < 1900;
            case 'new':
                return year > 2000;
            case 'large':
                return temple.area > 90000;
            case 'small':
                return temple.area < 10000;
            default:
                return true;
        }
    });

    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        gallery.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            displayTemples(filter);
            document.querySelector('main h2').textContent = link.textContent; // Fix the missing value assignment
        });
    });

    displayTemples('all'); // Load all temples initially
});
