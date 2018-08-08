
window.onload = function() {
    document.querySelectorAll('.button--filter').forEach( el => el.classList.remove('selected') );
    document.querySelector('.all-team').classList.add('selected');
    document.querySelector('.hidden-on-all').classList.add('hidden');
};

document.querySelector('.all-team').addEventListener('click', function( event ){
    document.querySelectorAll('.button--filter').forEach( el => el.classList.remove('selected') );
    document.querySelector('.all-team').classList.add('selected');
    document.querySelectorAll('.silverbird').forEach( el => el.classList.remove('hidden') );
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.remove('hidden') );
    document.querySelector('.hidden-on-all').classList.add('hidden');
});

document.querySelector('.aquagem-team').addEventListener('click', function( event ){
    document.querySelectorAll('.button--filter').forEach( el => el.classList.remove('selected') );
    document.querySelector('.aquagem-team').classList.add('selected');
    document.querySelectorAll('.silverbird').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.remove('hidden') );
});

document.querySelector('.silverbird-team').addEventListener('click', function( event ){
    document.querySelectorAll('.button--filter').forEach( el => el.classList.remove('selected') );
    document.querySelector('.silverbird-team').classList.add('selected');
    document.querySelectorAll('.aqua-gem').forEach( el => el.classList.add('hidden') );
    document.querySelectorAll('.silverbird').forEach( el => el.classList.remove('hidden') );
});