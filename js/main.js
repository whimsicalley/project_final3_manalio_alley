$(document).ready(function () {
    // Initiates MixItUp, the jQuery plugin on the menu page.
    $(function () {
        $('#Container').mixItUp();
    });

    // Initiates Slick, the image slider jQuery plugin on the Index page
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // If you click on the photo of Gusteau on the About page, a photo of Remy will appear below Gusteau's previous sibling, in this case, the h3 tag "History"
    var photo = $('.photo');
    photo.on('click', function () {
        photo.next().html('<img src="img/remy.jpg">');
    });
});
