'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                infinite: true,
                // speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                // centerMode: true,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            });
        });
    }
};

module.exports = Slider;
