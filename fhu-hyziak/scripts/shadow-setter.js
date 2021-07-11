var navigationHandler = document.getElementsByClassName('navigation');
var navigation = navigationHandler[0];

var headerHandler = document.getElementsByClassName('datetime-header');
var header = headerHandler[0];
var headerHeight = header.clientHeight;

var offset = headerHeight + 12;
navigation.style.marginTop = offset + 'px';

window.addEventListener('scroll', function() {
    if (window.scrollY > 8) {
        header.style.boxShadow = '0 4px 16px #B48236';
    } else {
        header.style.boxShadow = '';
    }
});
