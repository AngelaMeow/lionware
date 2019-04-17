var path = window.location.pathname;
var pathelement = path.split('/').pop();

const cards = Array.from(document.querySelectorAll('.card')).filter( el => !el.classList.contains(pathelement) );
cards.forEach(el => el.remove());