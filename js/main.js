$().ready(function() {

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
        $('.active_text_sticker').addClass('active')
    }).blur(function() {
        $('.active_text_sticker').removeClass('active')
    });
    $('.name_album').focus(function() {
        $('.active_name_album').addClass('active')
    }).blur(function() {
        $('.active_name_album').removeClass('active')
    });

    $('.personalization_checkbox').click(function(){
        const $card_container = $(this).closest('.card');
        if ($(this).is(':checked')){
            $card_container.addClass('personalization_active');
        } else {
            $card_container.removeClass('personalization_active');
            $card_container.find('.personalization_active_container').hide()
        }
    });   
    $( '.show_personalization_container' ).click(function() {
        $(this)
        .toggleClass('active')
        .closest('.card')
        .find('.personalization_active_container')
        .slideToggle()
    });

    $('.right_side_panel').stickySidebar({
        innerWrapperSelector: '.fix_wrap',
        resizeSensor: true,
        topSpacing: 180,
        bottomSpacing: 30
    });
    $('.name_album').on('inview', function(event, isInView) {
        if (isInView) {
            $('.fix_download').slideToggle()
        } else {
            $('.fix_download').slideToggle()
        }
    });

    $("#form").validate({
        messages: {
            text_sticker: "Це поле є обов'язковим для заповнення",
            name_album: "Це поле є обов'язковим для заповнення"
          }
    });
    $.validator.addClassRules({
        text_sticker: {
            required: true,
            minlength: 3,
            maxlength: 20
        },
        name_album: {
            required: true,
            minlength: 3,
            maxlength: 30
        }
    });

})