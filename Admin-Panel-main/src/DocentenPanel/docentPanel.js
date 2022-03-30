
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

function openPopupMenu(category) {
    let popupMenu = document.getElementById('popup' + category);
    let container = document.getElementById('full-screencontainer');

    popupMenu.style.visibility = 'visible';
    container.style.visibility = 'visible';
}

function closePopupMenu() {
    let popupUpload = document.getElementById('popupUpload');
    let popupQuestion = document.getElementById('popupQuestion');
    let popupPreview = document.getElementById('popupPreview');
    let container = document.getElementById('full-screencontainer');

    if (popupUpload) {
        popupUpload.style.visibility = 'hidden';
    }
    popupQuestion.style.visibility = 'hidden';
    popupPreview.style.visibility = 'hidden';
    container.style.visibility = 'hidden';
}

function addTimefield(category, day) {
    let list = setIds(category, day);

    if (list[0] != null) {
        let clone = list[0].cloneNode(true);
        clone.id = list[3] + 1;
        list[0].parentNode.appendChild(clone);
        list[1].style.visibility = 'visible';
    }
}

function removeTimefield(category, day) {
    let list = setIds(category, day);
    let clone = document.getElementById(list[3] + 1);

    if (clone != null) {
        list[0].parentNode.removeChild(clone);
        list[1].style.visibility = 'invisible';
    }
}

function setIds(category, day) {
    let timefield;
    let minus;
    let plus;
    let text;
    switch (day) {
        case 'monday':
            switch (category) {
                case 'available':
                    timefield = document.getElementById('avaMonday');
                    minus = document.getElementById('mAvaMonday');
                    plus = document.getElementById('pAvaMonday');
                    text = 'avaMonday';
                    break;
                case 'unavailable':
                    timefield = document.getElementById('unavaMonday');
                    minus = document.getElementById('mUnavaMonday');
                    plus = document.getElementById('pUnavaMonday');
                    text = 'unavaMonday';
                    break;
                case 'absent':
                    timefield = document.getElementById('preMonday');
                    minus = document.getElementById('mPreMonday');
                    plus = document.getElementById('pPreMonday');
                    text = 'preMonday';
                    break;
                default:
                    console.log('Not a category.');
            }
            break;
        case 'tuesday':
            switch (category) {
                case 'available':
                    timefield = document.getElementById('avaTuesday');
                    minus = document.getElementById('mAvaTuesday');
                    plus = document.getElementById('pAvaTuesday');
                    text = 'avaTuesday';
                    break;
                case 'unavailable':
                    timefield = document.getElementById('unavaTuesday');
                    minus = document.getElementById('mUnavaTuesday');
                    plus = document.getElementById('pUnavaTuesday');
                    text = 'unavaTuesday';
                    break;
                case 'absent':
                    timefield = document.getElementById('preTuesday');
                    minus = document.getElementById('mPreTuesday');
                    plus = document.getElementById('pPreTuesday');
                    text = 'preTuesday';
                    break;
                default:
                    console.log('Not a category.');
            }
            break;
        case 'wednesday':
            switch (category) {
                case 'available':
                    timefield = document.getElementById('avaWednesday');
                    minus = document.getElementById('mAvaWednesday');
                    plus = document.getElementById('pAvaWednesday');
                    text = 'avaWednesday';
                    break;
                case 'unavailable':
                    timefield = document.getElementById('unavaWednesday');
                    minus = document.getElementById('mUnavaWednesday');
                    plus = document.getElementById('pUnavaWednesday');
                    text = 'unavaWednesday';
                    break;
                case 'absent':
                    timefield = document.getElementById('preWednesday');
                    minus = document.getElementById('mPreWednesday');
                    plus = document.getElementById('pPreWednesday');
                    text = 'preWednesday';
                    break;
                default:
                    console.log('Not a category.');
            }
            break;
        case 'thursday':
            switch (category) {
                case 'available':
                    timefield = document.getElementById('avaThursday');
                    minus = document.getElementById('mAvaThursday');
                    plus = document.getElementById('pAvaThursday');
                    text = 'avaThursday';
                    break;
                case 'unavailable':
                    timefield = document.getElementById('unavaThursday');
                    minus = document.getElementById('mUnavaThursday');
                    plus = document.getElementById('pUnavaThursday');
                    text = 'unavaThursday';
                    break;
                case 'absent':
                    timefield = document.getElementById('preThursday');
                    minus = document.getElementById('mPreThursday');
                    plus = document.getElementById('pPreThursday');
                    text = 'preThursday';
                    break;
                default:
                    console.log('Not a category.');
            }
            break;
        case 'friday':
            switch (category) {
                case 'available':
                    timefield = document.getElementById('avaFriday');
                    minus = document.getElementById('mAvaFriday');
                    plus = document.getElementById('pAvaFriday');
                    text = 'avaFriday';
                    break;
                case 'unavailable':
                    timefield = document.getElementById('unavaFriday');
                    minus = document.getElementById('mUnavaFriday');
                    plus = document.getElementById('pUnavaFriday');
                    text = 'unavaFriday';
                    break;
                case 'absent':
                    timefield = document.getElementById('preFriday');
                    minus = document.getElementById('mPreFriday');
                    plus = document.getElementById('pPreFriday');
                    text = 'preFriday';
                    break;
                default:
                    console.log('Not a category.');
            }
            break;
        default:
            timefield = null;
            minus = null;
            plus = null;
            text = null;
    }
    return [timefield, minus, plus, text];
}