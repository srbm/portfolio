'use strict';
function openModal() {
    $('.examples__card').on('click', e => {
        let width = parseInt(window.innerWidth)
        const target = e.currentTarget;
        let modalHTML = projectPicker(target);
        if (width < 996) {
            if ( $(target).next().html() ) {
                $(target).next().slideUp('50ms').empty();
                $(target).next().append(modalHTML).slideDown('200ms');
            } else {
                $(target).next().append(modalHTML).slideDown('200ms');
            }
        } else {
            if ( $('#big-screen-modal1').html() ) {
                $('#big-screen-modal1').slideUp('50ms').empty();
                $('#big-screen-modal1').append(modalHTML).slideDown('200ms');
            } else {
                $('#big-screen-modal1').append(modalHTML).slideDown('200ms');
            }
        }
    });
}
function projectPicker(target) {
    console.log('picking');
    if ( $(target).next().is('#longhorn-modal')) {
        console.log('longhorn');
        return $('#examples__modal--longhorn');
    } else if ( $(target).next().is('#cloud-cap-modal') ) {
        console.log('cloud cap');
        return $('#examples__modal--cloud');
    } else {
        console.log('weather');
        return $('#examples__modal--weather');
    }
}
function closeModal() {
    $('.modal-cont').on('click', e => {
        console.log('close click');
        $('#hidden-modal-content').append($('#big-screen-modal1').html());
        $(e.currentTarget).slideUp('100ms').animate({
            scrollTop: $('#examples').offset().top
        }, 1000);
    });
}
function watchFunctions() {
    console.log('watching');
    openModal();
    closeModal();
}
$(watchFunctions);