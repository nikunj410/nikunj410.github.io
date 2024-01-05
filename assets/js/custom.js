$(document).ready(function () {


    /* **** scrollIt ***** */
    $(function () {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            onPageChange: null,
            topOffset: -80,
        });
    });
    /* **** End scrollIt ***** */



    /* **** Navigation Toggle Start **** */
    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    /* **** Navigation Toggle End **** */



    /* **** sticky **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("nav-new");
        } else {
            $("header").removeClass("nav-new");
        }
    });
    /* **** sticky **** */



    /* **** AOS **** */
    AOS.init({
        duration: 1000,
    });
    /* **** End AOS **** */



    /* **** Add Remove Class **** */

    $(".toggle-swich").on("click", function () {
        $(".navbar-sidebar").toggleClass("show-sidebar");
        $("body").toggleClass("show-sidebar");
    });

    $(".close-sidebar").on("click", function () {
        $(".navbar-sidebar").removeClass("show-sidebar");
        $("body").removeClass("show-sidebar");
    });
    /* **** End Add Remove Class **** */

    

    /* **** Slider ***** */
    $(".multiple-items").slick({
        arrows: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 447,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    /* ***** End Slider **** */

    
});
