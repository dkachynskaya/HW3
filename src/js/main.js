$(function () {

    $('.banner-box__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-box__slider-btn banner-box__slider-btnprev"><img src="images/arrow_prev.png" alt=""></button>',
        nextArrow: '<button class="banner-box__slider-btn banner-box__slider-btnnext"><img src="images/arrow_next.png" alt=""></button>',
    });

});

$(function () {
    $('.assortmentMenu-list').slick({
        infinite: false,
        dots: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        prevArrow: '<div class="rm-arr first"></div>',
        nextArrow: '<div class="rm-arr second"></div>'
    });
});
