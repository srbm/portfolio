'use strict';
function toggleModal() {
    console.log('loaded');
    $('.examples__card--longhorn').on('click', e => {
        $('.examples__modal--longhorn').slideToggle('200ms');
    });
}

$(toggleModal);