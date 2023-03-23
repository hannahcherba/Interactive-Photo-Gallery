// const search = new Filter('search', 'data-caption');

// baguetteBox.run('.gallery', {
//     captions: true,
//     buttons: 'auto',
//     fullScreen: false,
//     noScrollbars: false,
//     titleTag: true,
//     async: false,
//     preload: 2,
//     // animation: 'fadeIn',
//     afterShow: function() {},
//     afterHide: function() {},
//     onChange: null,

// });

/*-----------------------------
The JS Search
------------------------------*/

//Create an input variable

const input = document.getElementById('search');

//listen for search event

input.addEventListener('keyup', e => {
    let currentValue= e.target.value.toLowerCase();
    let captions= document.querySelectorAll("p");
    captions.forEach(caption => {
        if (caption.textContent.toLowerCase().includes(currentValue)) {
            caption.parentNode.parentNode.style.display = 'block';
        }else {
            caption.parentNode.parentNode.style.display = 'none';
        }
    });

});


