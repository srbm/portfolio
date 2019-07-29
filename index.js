'use strict';
function openModal() {
    const modalHTML = `
    <div class="examples__modal">
    <h2>LongHorn Steakhouse<span>X</span></span></h2>
    <figure>
        <img src="images/lhsh-ss1.png" alt="screenshot of longhorn steakhouse header section">
    </figure>
    <h5>HTML, CSS, JavaScript, Green Sock, Scroll Magic</h5>
    <a class="link-button" href="http://www.longhornsteakhouse.com/app">See it live</a>
    <figure>
        <img src="images/lhsh-ss2.png" alt="screenshot of longhorn steakhouse header section">
    </figure>
    <p>For this project I completed the development in under 2 days using HTML/CSS and JavaScript with the help of the Green Sock and Scroll Magic libraries.</p>
    </div>`;
    let width = parseInt(window.innerWidth)
    $('.examples__card').on('click', e => {
        const target = e.currentTarget;
        console.log($(target).next());
        if (width < 996) {
            $(target).next().append(modalHTML);
        } else {
            if ( $('#big-screen-modal1').html() ) {
                $('#big-screen-modal1').slideUp('50ms').empty().append(modalHTML).slideDown('200ms');
            } else {
                $('#big-screen-modal1').append(modalHTML).slideDown('200ms');
            }
        }
    });
}
function closeModal() {
    $('#big-screen-modal1').on('click', () => {
        $('#big-screen-modal1').slideUp('100ms').empty().animate({
            scrollTop: $('#examples').offset().top
        }, 2000);
    });
}
function watchFunctions() {
    console.log('watching');
    openModal();
    closeModal();
}
$(watchFunctions);