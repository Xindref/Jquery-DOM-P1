$(function () {
    console.log("Let's get ready to party with jQuery!");

    $('article').find('img').addClass('image-center');

    $('article').find('p').last().remove();

    $('h1').css('font-size', `${Math.floor(Math.random() * 100)}px`);

    $('ol').append('<li>We gave the puppy some bacon :D</li>')

    $('aside').html('<p>Turns out that lists are silly, we are very sorry for that greivance to your eye holders. Hopefully this paragraph pleases thee.</p>');

    $('.form-control').on('change', () => {
        let r = $('.form-control').eq(0).val();
        let b = $('.form-control').eq(1).val();
        let g = $('.form-control').eq(2).val();
        $('body').css('background-color', `rgb(${r},${g},${b})`)
    })

    $('img').on('click', function () {
        $(this).remove();
    })
});