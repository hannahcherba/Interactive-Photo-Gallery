/*=================
Note: As per baguetteBox instructions, linked the baguettBox.run('.gallery') function in the html doc. 
==================*/



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


