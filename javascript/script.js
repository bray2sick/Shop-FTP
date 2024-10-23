// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to update product details
function updateProductDetails() {
    const productName = getUrlParameter('name');
    const productPrice = getUrlParameter('price');
    const soldOut = getUrlParameter('soldOut') === 'true';

    const productNameElement = document.getElementById('productName');
    const productPriceElement = document.getElementById('productPrice');
    const addToCartButton = document.getElementById('addToCartButton');

    if (productName && productNameElement) {
        productNameElement.textContent = productName;
    }
    if (productPrice && productPriceElement) {
        productPriceElement.textContent = `$${productPrice}`;
    }
    if (soldOut && addToCartButton) {
        addToCartButton.textContent = 'SOLD OUT';
        addToCartButton.disabled = true;
    }
}

// Call the function to update product details on page load
document.addEventListener('DOMContentLoaded', updateProductDetails);

// Global variable to keep track of the current image index
let currentImageIndex = 0;
const images = ['front', 'back'];

// Function to show image
function showImage(imageType) {
    const fullImage = document.getElementById('fullImage');
    const fullImageLink = document.getElementById('fullImageLink');
    if (imageType === 'front') {
        fullImage.src = '../../../images/front.png';
        fullImageLink.href = '../../../images/front.png';
        currentImageIndex = 0;
    } else if (imageType === 'back') {
        fullImage.src = '../../../images/back.png';
        fullImageLink.href = '../../../images/back.png';
        currentImageIndex = 1;
    }
}

// Magnific Popup
$(document).ready(function() {
    $('.full-image a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        closeBtnInside: false,
        closeOnContentClick: true,
        mainClass: 'mfp-fade'
    });
});

// FlexSlider 
$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: false,
        slideshow: true,
        slideshowSpeed: 3000, // 3 seconds
    });
});

// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});