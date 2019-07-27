'use strict';
function openModal() {
    $('.examples__card--longhorn').on('click', () => {
        $('.examples__modal--longhorn').slideDown('200ms');
    });
}
function closeModal() {

    console.log('loaded');
    $('#modal-longhorn').on('click', () => {
        $('#modal-longhorn').slideUp('100ms');
    });
}
function watchFunctions() {
    openModal();
    closeModal();
}
$(watchFunctions);