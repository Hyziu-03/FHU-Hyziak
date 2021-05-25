var aboutUs = document.getElementById('special-navigation-item-container');
var whatsNew = document.getElementById('whats-new');
var contact = document.getElementById('contact');
var coronavirus = document.getElementById('coronavirus');
var home = document.querySelector('.header-icon');

aboutUs.addEventListener('click', function() {
    window.location.href = 'o-naszej-firmie';
}); 

whatsNew.addEventListener('click', function() {
    window.location.href = 'co-nowego';
});

contact.addEventListener('click', function() {
    window.location.href = 'kontakt-z-nami';
});

coronavirus.addEventListener('click', function() {
    window.location.href = 'obostrzenia-koronawirus';
});

home.addEventListener('click', function() {
    window.location.href = 'strona-glowna';
});
