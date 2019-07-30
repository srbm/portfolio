'use strict';
function openModal() {
    const modalHTML = [
        `<div class="examples__modal">
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
        </div>`,
        `<div class="examples__modal">
        <h2>Cloud Cap Ventures<span>X</span></span></h2>
        <figure>
            <img src="images/ccv-ss1.png" alt="screenshot of cloud cap ventures body content section">
        </figure>
        <h5>WordPress, Sass, Events</h5>
        <a class="link-button" href="http://cloudcapventures.com">See it live</a>
        <figure>
            <img src="images/ccv-ss2.png" alt="screenshot of cloud cap ventures body content section">
        </figure>
        <p>I built this site from scratch on my own using WordPress and a few plugins to help make a fully functional page. Users can sign up and reserve a spot for a trip and pay using a paypal gateway.</p>
        </div>`,
        `<div class="examples__modal">
        <h2>Portland Adventures Weather<span>X</span></span></h2>
        <figure>
            <img src="images/paw-ss.png" alt="screenshot of portland adventure weather full page app.">
        </figure>
        <h5>React, JavaScript, APIs, Sass</h5>
        <a class="link-button" href="http://srbm.github.io/pdx-adventure-weather">See it live</a>
        <a class="link-button" href="http://github.com/srbm/pdx-adventure-weather">See the repo</a>
        <p>I wanted to create a place for Portlanders to see what the weather is like in places outisde of town where they might going adventuring. This is a single page app the gives current temperature and a radar map of the area you click on. I used React and API functionality to pull this together.</p>
        </div>`,
    ];
    let width = parseInt(window.innerWidth)
    $('.examples__card').on('click', e => {
        const target = e.currentTarget;
        let i = projectPicker(target, modalHTML);
        if (width < 996) {
            if ( $(target).next().html() ) {
                $(target).next().slideUp('50ms').empty();
                $(target).next().append(modalHTML[i]).slideDown('200ms');
            } else {
                $(target).next().append(modalHTML[i]).slideDown('200ms');
            }
        } else {
            if ( $('#big-screen-modal1').html() ) {
                $('#big-screen-modal1').slideUp('50ms').empty();
                $('#big-screen-modal1').append(modalHTML[i]).slideDown('200ms').scrollIntoView();
            } else {
                $('#big-screen-modal1').append(modalHTML[i]).slideDown('200ms').scrollIntoView();
            }
        }
    });
}
function projectPicker(target, arr) {
    console.log('picking');
    if ( $(target).next().is('#longhorn-modal')) {
        console.log('longhorn');
        return 0;
    } else if ( $(target).next().is('#cloud-cap-modal') ) {
        console.log('cloud cap');
        return 1;
    } else {
        console.log('weather');
        return 2;
    }
}
function closeModal() {
    $('.modal-cont').on('click', e => {
        console.log('close click');
        $(e.currentTarget).slideUp('100ms').empty().animate({
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