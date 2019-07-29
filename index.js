'use strict';
function openModal() {
    let width = parseInt(window.innerWidth)
    $('.examples__card').on('click', e => {
        const target = e.currentTarget;
        console.log($(target).next());
        if (width < 996) {
            $(target).next().append(`
            <h2>LongHorn Steakhouse<span>X</span></span></h2>
            <figure>
                <img src="images/lhsh-ss1.png" alt="screenshot of longhorn steakhouse header section">
            </figure>
            <a class="link-button" href="http://www.longhornsteakhouse.com/app">See it live</a>
            <h5>HTML, CSS, JavaScript, Green Sock, Scroll Magic</h5>
            <figure>
                <img src="images/lhsh-ss2.png" alt="screenshot of longhorn steakhouse header section">
            </figure>
            <p>For this project I completed the development in under 2 days using HTML/CSS and JavaScript with the help of the Green Sock and Scroll Magic libraries.</p>
            `);
        } else {
            $('.big-screen-modal1').append(`
            <h2>LongHorn Steakhouse<span>X</span></span></h2>
            <figure>
                <img src="images/lhsh-ss1.png" alt="screenshot of longhorn steakhouse header section">
            </figure>
            <a class="link-button" href="http://www.longhornsteakhouse.com/app">See it live</a>
            <h5>HTML, CSS, JavaScript, Green Sock, Scroll Magic</h5>
            <figure>
                <img src="images/lhsh-ss2.png" alt="screenshot of longhorn steakhouse header section">
            </figure>
            <p>For this project I completed the development in under 2 days using HTML/CSS and JavaScript with the help of the Green Sock and Scroll Magic libraries.</p>
            `);
            $('.big-screen-modal1').slideToggle('200ms');
        }
        
    });
}
function closeModal() {

    $('#modal-longhorn').on('click', () => {
        $('#modal-longhorn').slideUp('100ms');
    });
}
function watchFunctions() {
    console.log('watching');
    openModal();
    closeModal();
}
$(watchFunctions);