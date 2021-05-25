var theBiggestItem;

function findTheBiggest(cih, gmh) {
    theBiggestItem = cih;

    if (gmh > theBiggestItem) {
        theBiggestItem = gmh;
    }
}

function setEqualHeight() {
    'use strict';

    var contactInfo = document.getElementById("site-content-description-paragraph");
    var contactInfoHeight = document.getElementById("site-content-description-paragraph").clientHeight;

    findTheBiggest(contactInfoHeight, googleMapsHeight)

    var googleMaps = document.getElementById("google-maps-container");
    var googleMapsHeight = document.getElementById("google-maps-container").clientHeight;

    contactInfo.style.height = theBiggestItem + "px";
    googleMaps.style.height = theBiggestItem + "px";
}

window.addEventListener('load', function () {
    setEqualHeight();
});
