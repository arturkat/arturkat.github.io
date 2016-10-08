$(document).ready(function(){
    $('.bxslider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '',
        prevText: '',
        mode: 'fade',
        speed: 1100,
        auto: true,
        pause: 6000,
        pagerCustom: '#game_chooser'
    });

    /* Ajax text description */
    $.ajax({
        url: "games_descriptions/rf.txt", // отткель
        dataType: "text",         // формат
        success:function(data){
            $('#rf_promo').text(data);
        }
    });

    $.ajax({
        url: "games_descriptions/cs.txt", // отткель
        dataType: "text",         // формат
        success:function(data){
            $('#cs_promo').text(data);
        }
    });

    $.ajax({
        url: "games_descriptions/diablo.txt", // отткель
        dataType: "text",         // формат
        success:function(data){
            $('#diablo_promo').text(data);
        }
    });

    $.ajax({
        url: "games_descriptions/war3.txt", // отткель
        dataType: "text",         // формат
        success:function(data){
            $('#war3_promo').text(data);
        }
    });

    $.ajax({
        url: "games_descriptions/starcraft.txt", // отткель
        dataType: "text",         // формат
        success:function(data){
            $('#starcraft_promo').text(data);
        }
    });

    /* Click Redirect */
    $('#games_click_chooser').on('click', function(){
        var choosedIndex = 0;
        $('#game_chooser a').each(function(index){
            //console.log(index + " __ " + $(this).hasClass('active'));
            if( $(this).hasClass('active') ){
                choosedIndex = index;
            }
        });

        var neededLi = $($('.bxslider li').get(choosedIndex)).find('.games_site');
        neededLi.get(0).click() ;
    });

    $('#forum_click_chooser').on('click', function(){
        var choosedIndex = 0;
        $('#game_chooser a').each(function(index){
            //console.log(index + " __ " + $(this).hasClass('active'));
            if( $(this).hasClass('active') ){
                choosedIndex = index;
            }
        });

        var neededLi = $($('.bxslider li').get(choosedIndex)).find('.games_forum');
        neededLi.get(0).click() ;
    });

});