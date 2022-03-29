
function showAndHideHiddenMenu() {
    let Message = document.getElementById('Message');
    let MessageIcon = document.getElementById('MessageIcon');
    let Presence = document.getElementById('Presence');
    let PresenceIcon = document.getElementById('PresenceIcon');
    let Home = document.getElementById('Home');
    let HomeIcon = document.getElementById('HomeIcon');

    let menu = document.getElementById('collapsedMenu');

    if (menu.style.visibility == 'visible') {
        menu.style.visibility = 'hidden';
        Message.classList.remove('active');
        MessageIcon.src = 'img/MessageIcon.png';
    }
    else {
        menu.style.visibility = 'visible';
        Presence.classList.remove('active');
        PresenceIcon.src = 'img/PresenceIcon.png';
        Home.classList.remove('active');
        HomeIcon.src = 'img/HomeIcon.png';
        Message.classList.add('active');
        MessageIcon.src = 'img/MessageIcon_filled.png';
    }
}

function changePresence() {
    let check = document.getElementById('presence');
    let text = document.getElementById('presenceText');

    if (check.getAttribute('checked') == 'true') {
        //checked.
        text.innerHTML = 'Afwezig';
        check.setAttribute('checked', false);
        // document.getElementById('availability').setAttribute('disabled', true);
    } else {
        //not checked.
        text.innerHTML = 'Aanwezig';
        check.setAttribute('checked', true);
        // document.getElementById('availability').setAttribute('disabled', false);
    }
}

function changeAvailability() {
    let check = document.getElementById('availability');
    let text = document.getElementById('availabilityText')

    if (check.getAttribute('checked') == 'true') {
        //checked.
        text.innerHTML = 'Onbeschikbaar';
        check.setAttribute('checked', false);
    } else {
        //not checked.
        text.innerHTML = 'Beschikbaar';
        check.setAttribute('checked', true);
    }
}