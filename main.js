document.querySelector('.nbtn').onclick = function() {
    document.querySelector('.nbtn').setAttribute('style','display:none;')
    document.querySelector('.dbtn').setAttribute('style','display:none;')
    document.querySelector('.abc').classList.remove('hideme');
}