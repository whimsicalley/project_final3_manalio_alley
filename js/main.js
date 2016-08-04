$(document).ready(function () {
    $(function () {
        // Instantiate MixItUp:
        $('#Container').mixItUp();
    });

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
});
