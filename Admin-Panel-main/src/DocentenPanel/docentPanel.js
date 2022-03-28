
function showAndHideHiddenMenu(){
    var menu =  document.getElementById('collapsedMenu');

    if (menu.style.visibility == 'visible'){
        menu.style.visibility = 'hidden';
    }
    else {
        menu.style.visibility = 'visible';
    }
}