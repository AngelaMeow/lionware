
if(window.location.pathname === '/silverbird') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.runway').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/aquagem') {
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.runway').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/forklift') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.runway').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/wallstreet') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.runway').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/runway') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.forklift').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wallstreet').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.runway').forEach( el => el.classList.remove('hidden') );
};