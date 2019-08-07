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
    const projectName = $(target).data('modal-name');
    console.log($('.hidden-modal-content div'));
    let modal = null;
    $('.hidden-modal-content div').each(
        () => {
            console.log($(this));
            if ( $(this).data('modal-name') === projectName ) {
                modal = $(this).clone();
            }
        });
    return modal;
    
    // if ( $(target).next().is('#longhorn-modal')) {
    //     console.log('longhorn');
    //     return $('#examples__modal--longhorn').clone();
    // } else if ( $(target).next().is('#cloud-cap-modal') ) {
    //     console.log('cloud cap');
    //     return $('#examples__modal--cloud').clone();
    // } else {
    //     console.log('weather');
    //     return $('#examples__modal--weather').clone();
    // }
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