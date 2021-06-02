$('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
$('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); 
$('.quantity_inner .quantity'), function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == '') {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }    
}; 


$( '.more_info' ).click(function() {
    $('.information').toggleClass('active');
    $('.more_info_container').slideToggle(1000);
    if (!$(this).hasClass('clicked')) {
        $(this).addClass('clicked');
        $(this).text('Менше інформації');
    } else {
        $(this).removeClass('clicked');
        $(this).text('Більше інформації');
    }
});


$('.text_sticker').focus(function() {
    $('.active_text_sticker').show(500);
}).blur(function() {
    $('.active_text_sticker').hide(200);
});
$('.name_album').focus(function() {
    $('.active_name_album').show(500);
}).blur(function() {
    $('.active_name_album').hide(200);
});
