$(document).ready(function(){
    let num = 0
    let cost = 0
    $(".bin-items-number").text("")
    $(".to-buy").click(function(){
        const buyButton = $(this)
        const check = $(buyButton).text()

        const itemsNumber = document.getElementById("bin-items-number")
        const slash = document.getElementById("slash")
        const itemsCost = document.getElementById("bin-items-cost")
        const itemPrice = document.getElementsByClassName("new-price")

        const price = $(itemPrice).text()
        const priceNoSpace = price.replace(/\s/g, '')
        const priceInt = parseInt(priceNoSpace)


        if (check === "В корзину") {
            scroll(0, 0)
        }
        else {
            buyButton.text("В корзину")

            num++
            $(itemsNumber).text(num)
            $('.bin-summary').css({
                'top': '5px'
            });

            $(slash).text('/')

            cost = cost + priceInt
            $(itemsCost).text(cost + ' р.')
        }
    })
});


$(function () {
    const defaultSteps = 'to-work-steps1';
    const defaultSnow = $('.steps-choice .' + defaultSteps);

    $('.steps').not(defaultSnow).hide(0);
    defaultSnow.show(0);

    $('#' + defaultSteps).css({
        'background-color': '#FFFFFF',
        'text-decoration': 'none',
        'color': '#000000'
    });

    $('.toggles button').click(function () {
        const clicked_button = this.id;
        const selected_steps = $('.steps-choice .' + clicked_button);

        $('.steps').not(selected_steps).hide(0);
        selected_steps.show(0);


        const clicked_button_style = $('#' + clicked_button)
        $(clicked_button_style).css({
            'background-color': '#FFFFFF',
            'text-decoration': 'none',
            'color': '#000000'
        });
        $('.toggles button').not(clicked_button_style).css({
            'background-color': '#dbdee6',
            'text-decoration': 'underline 1px dotted #ff5816',
            'color': '#ff5816'
        });
    });
});