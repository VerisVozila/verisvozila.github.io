// Prikazivanje dugmeta za skrolovanje
window.onscroll = function() {
    const button = document.getElementById("scrollButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Funkcija za skrolovanje na vrh
document.getElementById("scrollButton").onclick = function() {
    document.body.scrollTop = 0; // Za Safari
    document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE i Opera
};

// Funkcija za trešnju
function addShakeEffect(section) {
    section.classList.add('shake');
    setTimeout(() => {
        section.classList.remove('shake');
    }, 500); // Trajanje animacije
}

// Dodavanje event listener-a na navigacione linkove
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Spreči preuzimanje stranice
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Skroluj do sekcije
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Dodaj efekat trešnje
        addShakeEffect(targetSection);
    });
});
