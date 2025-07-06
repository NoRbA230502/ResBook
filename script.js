// Rozwijanie dodatkowych restauracji
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-restaurants');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const cards = document.querySelectorAll('.restaurant-card');
            let hidden = 0;
            cards.forEach((card, i) => {
                // Pokaż ukryte restauracje (od 7. w górę)
                if (i > 5) card.style.display = 'flex';
                if (i > 8) hidden++;
            });
            if (hidden === 0) {
                showMoreBtn.style.display = 'none';
            } else {
                showMoreBtn.textContent = 'Rozwiń więcej';
            }
        });
        // Domyślnie ukryj dodatkowe restauracje
        const cards = document.querySelectorAll('.restaurant-card');
        cards.forEach((card, i) => {
            if (i > 5) card.style.display = 'none';
        });
    }
});
// Filtrowanie restauracji
const filterBtns = document.querySelectorAll('.filter-btn');
const restaurantCards = document.querySelectorAll('.restaurant-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const type = btn.getAttribute('data-type');
        restaurantCards.forEach(card => {
            if (type === 'all' || card.getAttribute('data-type') === type) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal szczegółów restauracji
const modal = document.getElementById('restaurant-modal');
const modalDetails = document.getElementById('modal-details');
const closeModalBtn = document.querySelector('.close-modal');
const detailsBtns = document.querySelectorAll('.details-btn');

const restaurantDetails = {
    zielona: {
        name: 'Restauracja Zielona',
        city: 'Warszawa',
        type: 'Wegetariańska',
        rating: '4.8 ★',
        desc: 'Nowoczesna kuchnia roślinna, świeże składniki, przyjazna atmosfera.',
        hours: '12:00 - 22:00',
        address: 'ul. Zielona 5, Warszawa'
    },
    morza: {
        name: 'Smak Morza',
        city: 'Gdańsk',
        type: 'Ryby i owoce morza',
        rating: '4.6 ★',
        desc: 'Wyśmienite dania z ryb i owoców morza, widok na Motławę.',
        hours: '13:00 - 23:00',
        address: 'ul. Nadmorska 2, Gdańsk'
    },
    wloska: {
        name: 'Włoska Uczta',
        city: 'Kraków',
        type: 'Włoska',
        rating: '4.9 ★',
        desc: 'Prawdziwa włoska pizza i makarony, rodzinny klimat.',
        hours: '11:00 - 22:30',
        address: 'ul. Włoska 10, Kraków'
    },
    steak: {
        name: 'Steak House',
        city: 'Poznań',
        type: 'Steki i grill',
        rating: '4.7 ★',
        desc: 'Najlepsze steki w mieście, szeroki wybór win.',
        hours: '14:00 - 23:00',
        address: 'ul. Grillowa 7, Poznań'
    },
    fusion: {
        name: 'Fusion Bistro',
        city: 'Wrocław',
        type: 'Fusion',
        rating: '4.5 ★',
        desc: 'Kreatywne połączenia smaków z całego świata.',
        hours: '12:00 - 22:00',
        address: 'ul. Nowa 3, Wrocław'
    },
    lew: {
        name: 'Pod Złotym Lwem',
        city: 'Lublin',
        type: 'Polska tradycyjna',
        rating: '4.7 ★',
        desc: 'Tradycyjna polska kuchnia w eleganckim wydaniu.',
        hours: '12:00 - 22:00',
        address: 'ul. Stara 1, Lublin'
    }
};

detailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-restaurant');
        const r = restaurantDetails[key];
        if (r) {
            modalDetails.innerHTML = `
                <h3>${r.name}</h3>
                <p><strong>Miasto:</strong> ${r.city}</p>
                <p><strong>Typ kuchni:</strong> ${r.type}</p>
                <p><strong>Ocena:</strong> ${r.rating}</p>
                <p><strong>Opis:</strong> ${r.desc}</p>
                <p><strong>Godziny otwarcia:</strong> ${r.hours}</p>
                <p><strong>Adres:</strong> ${r.address}</p>
            `;
            modal.style.display = 'flex';
        }
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Funkcja wyszukiwania restauracji jest w przygotowaniu.');
});

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Dziękujemy za zapis do newslettera!');
            newsletterForm.reset();
        }
    });
}
