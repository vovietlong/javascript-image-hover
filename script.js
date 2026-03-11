// script.js

function upDate(previewPic) {
    // debugging to ensure the event is firing
    console.log('upDate called with', previewPic);

    // log alt and src for troubleshooting
    console.log('alt:', previewPic.alt, 'src:', previewPic.src);

    // change the text of the div with id "image"
    var imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;

    // change the background of the div to the image source
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log('undo called');
    var imageDiv = document.getElementById('image');

    // reset the text and background to original values
    imageDiv.textContent = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')"; // empty url resets
}

function addTabFocus() {
    console.log('onload triggered');
    var images = document.querySelectorAll('.thumbnails img');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}