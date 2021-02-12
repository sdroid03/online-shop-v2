import {Carousel} from "./classes/carousel_render.js";
import {model1, model2, model3} from './classes/item_data.js'

const site = new Carousel('#carousel1')
site.render(model1)

const site2 = new Carousel('#carousel2')
site2.render(model2)

const site3 = new Carousel('#carousel3')
site3.render(model3)


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-slider').owlCarousel({
    items: 1,
    loop: true,

    nav: true,
    smartSpeed: 900,
    navText: [
        "<i class='fa fa-chevron-left' />",
        "<i class='fa fa-chevron-right' />"
    ],

    touchDrag: false,
    mouseDrag: false,

    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})

$('.owl-items').owlCarousel({
    loop  : true,
    nav: true,
    smartSpeed: 900,
    navText: [
        "<i class='fa fa-chevron-left' />",
        "<i class='fa fa-chevron-right' />"
    ],

    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
        750: {
            items: 3,
        },
        980: {
            items: 4,
        }
    }
})

$('.owl-brands').owlCarousel({
    loop  : true,
    navText: [
        "<i class='fa fa-chevron-left' />",
        "<i class='fa fa-chevron-right' />"
    ],
    smartSpeed: 900,

    responsive: {
        750: {
            items: 5,
            nav: true,
        },
        980: {
            items: 7,
            nav: true,
        },
        1140: {
            items: 9,
            touchDrag: false,
            mouseDrag: false
        }
    }
})

$('.owl-numbers').owlCarousel({
    loop  : true,
    navText: [
        "<i class='fa fa-chevron-left' />",
        "<i class='fa fa-chevron-right' />"
    ],
    smartSpeed: 900,

    responsive: {
        750: {
            items: 4,
            nav: true,

        },
        980: {
            items: 6,
            touchDrag: false,
            mouseDrag: false
        }
    }
})