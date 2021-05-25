var linkButton = document.querySelector('.underlined-link');
var menu = document.getElementById("navigation");

function highlightMenu() {
    'use strict';

    try {
        linkButton.addEventListener('click', function () {
            menu.style.background = 'rgba(214, 164, 88, .7)';
        });
    } catch (e) {
        throw new Error(e);
    }
}

window.addEventListener('load', function () {
    highlightMenu();
});
