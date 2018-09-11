
if(window.location.pathname === '/silverbird') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wp').forEach( el => el.classList.remove('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/aquagem') {
    document.querySelectorAll('.wp').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.remove('hidden') );
};

if(window.location.pathname === '/warehousingpro') {
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.wp').forEach( el => el.classList.remove('hidden') );
};