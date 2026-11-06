// Script simples para controle do menu mobile (caso queira expandir)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--bg-card)';
            navLinks.style.padding = '1rem 2rem';
            navLinks.style.borderBottom = '1px solid var(--border-color)';
        }
    });
}

// Registo automático do Service Worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('Service Worker registado com sucesso:', reg.scope))
            .catch((err) => console.log('Falha ao registar o Service Worker:', err));
    });
}