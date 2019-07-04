'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: true,
                arrows: true,
                infinite: true,
                speed: 300,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
    }

    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: true,
                infinite: true,
                // speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
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
