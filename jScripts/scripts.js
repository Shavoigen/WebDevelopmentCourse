function tab_nav() {
    var navA = document.querySelectorAll("header ul li>a");
    var navLi = document.querySelectorAll("header li");
    var navInner = document.querySelectorAll("header li ul li>a");
    var selected_country = document.querySelectorAll("#hard_c_and_semi_hard nav ul li");

    for(var i = 0, len = navA.length; i < len; i++){
        navA[i].addEventListener("focus",function(event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if(innerUl) innerUl.style.display = "block";
        }, true);
    }

    for(var i = 0, len = navInner.length; i < len; i++){
        if(navInner[i].parentElement.nextElementSibling === null){
            navInner[i].addEventListener("blur",function(event) {
                event.target.parentElement.parentElement.style.display = "none"
            },true);
        }
    }
    for(var f = 0, length = navLi.length; f < length; f++){
        navLi[f].addEventListener("focus",function(event) {
            var innerUl2 = event.target.parentElement.querySelector("ul");
            if(innerUl2) innerUl2.style.display = "block";
        }, true);
    }
    for(var g = 0, length = selected_country.length; g < length; g++){
        selected_country[g].addEventListener("focus",function(event) {
            var innerUl2 = event.target.parentElement.querySelector("ul");
            if(innerUl2) innerUl2.style.display = "block";
        }, true);
    }

}


// var intervalId;
$(function(){
    var listId;
    $('.home_icon_size').on('mouseenter', function () {
        listId = $(this).attr('data-icon');
        $('#'+listId).fadeIn(200);
        // intervalId = setInterval(200)
    });
    $('.home_icon_size').on('mouseleave', function () {
        $('#'+listId).fadeOut(200);
    });
    $('.home_icon_size_abs').on('mouseenter', function () {
        listId = $(this).attr('data-icon');
        $('#'+listId).fadeIn(200);
    });
    $('.home_icon_size_abs').on('mouseleave', function () {
        $('#'+listId).fadeOut(200);
    });
    $('.size').on('mouseenter', function () {
        listId = $(this).attr('data-size');
        $('#' + listId).fadeIn(200);
    });
    $('.size').on('mouseleave', function () {
        $('#' + listId).fadeOut(200);
    });

    var figure = $(".video").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }


    /*prevents page from jumping to the top when clicking on <a href="#"> */
    $('a.notActive').click(function(e)
    {
        e.preventDefault();
    });


    $('.att_text_list').on('mouseenter', function(){
        var a = $(this).attr('data-pin');
        listId = $(this).attr('data-pin');
        $('#hide_sentence').fadeOut(50);
        $(this).css({background:'#773e27'});
        $('#'+listId + ' div').css({visibility:'visible', opacity:1});
        $('.pin_drop').not('#' + listId).fadeOut(50);
        if(listId === 'pin10'){
            $('.att_info[data-info=pin10]').fadeIn(100);
        }
        else{
            $('#att_default').fadeIn(100);
        }
    });

    /*relates to "north.html" page map integration (hope it is not too ugly (-:  )*/
    $('.att_text_list').on('mouseleave', function(){
        var a = $(this).attr('data-pin');
        $('#hide_sentence').fadeIn(50);
        $(this).css({background:'#432316'});
        $('#'+listId + ' div').css({visibility:'', opacity:""});
        $('#' + listId).fadeIn(50);

        if(listId === 'pin10'){
            $('.att_info[data-info=pin10]').fadeOut(100);
        }
        else{
            $('#att_default').fadeOut(100);
        }
        $('.pin_drop').not('#' + listId).fadeIn(50);
    });

    $('.pin_drop').on('mouseenter', function(){
        listId = '"' + $(this).attr('id') + '"';
        var a = $(this).attr('id');
        $('#hide_sentence').fadeOut(50);
        if(a === 'pin10'){
            $('.att_info[data-info=pin10]').fadeIn(100);
        }
        else{
            $('#att_default').fadeIn(100);
        }
        $('[data-pin='+ listId +']>a').css({fontWeight:900});
        $('[data-pin='+ listId +']').css({background:'#773e27'});
    });
    $('.pin_drop').on('mouseleave', function(){
        $('#hide_sentence').fadeIn(50);
        var a = $(this).attr('id');
        if(a === 'pin10'){
            $('.att_info[data-info=pin10]').fadeOut(100);
        }
        else{
            $('#att_default').fadeOut(100);
        }
        $('[data-pin='+ listId +']>a').css({fontWeight:'normal'});
        $('[data-pin='+ listId +']').css({background:'#432316'});
    });
});