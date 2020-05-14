$(function ()  {
    $('.single-item').slick({
        dots: true,
        arrows:false
    });
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $slideshow = $('.center').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '160px',
        responsive: [
            {
                breakpoint: 720,
                settings:{
                    centerMode: true,
                    centerPadding: '90px'
                }
            },
            {
                breakpoint: 583,
                settings: {
                    centerMode: true,
                    centerPadding: '10px'
                }
            },
            {
                breakpoint: 422,
                settings: {
                    centerMode: true,
                    centerPadding: '0px'
                }
            }
        ]
        // arrows:false,
        // centerMode: true,
        // centerPadding: '160px',
        // adaptiveHeight: true,
        // adaptiveWidth: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
    $('.slide').click(function() {
        $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide'))+1);
    });
});
