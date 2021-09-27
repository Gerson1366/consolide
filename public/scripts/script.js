$(document).ready(function () {
    $('#carousel-content').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: '<div class="next-carousel"><img src="public/img/carousel/arrow-right.png" /></div>',
        prevArrow: '<div class="previous-carousel"><img src="public/img/carousel/arrow-left.png" /></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    var phoneBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      phoneOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(phoneBehavior.apply({}, arguments), options);
          }
      }

    $('#telefone').mask(phoneBehavior,phoneOptions);
});