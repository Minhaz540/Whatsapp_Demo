$(document).ready(function() {
    $('#dropdown-ex-0').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
        
    });
    $('#dropdown-ex-1').click(function(){
        $('.dropdown-content-0, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-2').click(function(){
        $('.dropdown-content-1, .dropdown-content-0, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-3').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-0, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-4').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-0, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-5').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-0, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-6').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-0, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-7').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-0, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-8').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-0, .dropdown-content-9, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-9').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-0, .dropdown-content-10, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-10').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-0, .dropdown-content-11').css({
            'display': 'none'
        });
    });
    $('#dropdown-ex-11').click(function(){
        $('.dropdown-content-1, .dropdown-content-2, .dropdown-content-3, .dropdown-content-4, .dropdown-content-5, .dropdown-content-6, .dropdown-content-7, .dropdown-content-8, .dropdown-content-9, .dropdown-content-10, .dropdown-content-0').css({
            'display': 'none'
        });
    });
    // --------profile section---------->
    $('.profile-section').click(function(){
        $('.profile-base').css({
            'display':'block'
        });
        $('.base').css({
            'display':'none'
        });
    });
    $('.blue-arrow-3').click(function(){
        $('.profile-base').css({
            'display':'none'
        });
        $('.base').css({
            'display':'block'
        });
    });
    $('.blue-arrow-3').click(function(){
        $('.base').css({
            'display':'block'
        });
        $('.profile-base').css({
            'display':'none'
        });
    });
    // <----------for search-------->
    $('.w-search').click(function(){
        $('.another').css({
            'display':'none'
        });
        $('.another-arrow').css({
            'display':'inline-block'
        });
        
        $('.search-area').css({
            'background':'white',
            'box-shadow': '0px 2px 3px #DDDDDD'
        });
        $('#search-2').css({
            'background':'white',
            'box-shadow': 'none'
        });
        $('.another-arrow i').css({
            'transform': 'rotate(0deg)',
        });
    });
    $('.another-arrow').click(function(){
        $('.another').css({
            'display':'inline-block'
        });
        $('.another-arrow').css({
            'display':'none'
        });
        $('.search-area').css({
            'background':'#f6f6f6',
            'box-shadow': 'none'
        });
        $('#search-2').css({
            'background':'#f6f6f6',
            'box-shadow': 'none'
        });
    });

    // ==========invisible navs=============>
    $('.plus-btn').click(function(){
        $('.base').css({
            'display':'none'
        });
        $('.sub-base').css({
            'display':'block'
        });
    });
    $('.blue-arrow-2').click(function(){
        $('.base').css({
            'display':'block'
        });
        $('.sub-base').css({
            'display':'none'
        });
    });
    // =============status phase==============>
    $('.status-btn').click(function(){
        $('.status-base').css({
            'display':'block'
        });
        $('.status-contact').css({
            'display':'block'
        });
        $('.base').css({
            'display':'none'
        });
    });
    $('.cross-icon').click(function(){
        $('.status-base').css({
            'display':'none'
        });
        $('.status-contact').css({
            'display':'none'
        });
    });
    $('.cross-icon-status').click(function(){
        $('.status-base').css({
            'display':'none'
        });
        $('.status-contact').css({
            'display':'none'
        });
        $('.base').css({
            'display':'block'
        });

    });
    // =============for chat buttons===============>
    $('#sms').click(function(){
        $('.microphone').css({
            'display':'none'
        });
        $('.send').css({
            'display':'block'
        });
    });
    $('.send').click(function(){
        $('.microphone').css({
            'display':'flex'
        });
        $('.send').css({
            'display':'none'
        });
    });
    // ==============main challenge=================>
    $('#abd, #cht, #p101, #sir, #se101, #jahid, #hassan, #shamim, #bmw, #nabil, #swe31, #second-sem').click(function(){
        $('.rest-gridding').css({
            'display':'none'
        });
        $('.chat-part').css({
            'display':'block'
        });
    });
    $('.wp').click(function(){
        $('.floating').css({
            'display':'block'
        });
        $('.floating-o2').css({
            'display':'none'
        });
        $('.chat-nav').css({
            'width':'42%'
        });
        $('.chat-gen').css({
            'width':'41.59%'
        });
        $('#f-clng').addClass("col-md-5 col");
        $('#f-clng').removeClass("col-md-8 col-6");
    });
    $('#contact-x-icon').click(function(){
        $('.floating').css({
            'display':'none'
        });
        $('.rest-gridding').css({
            'display':'none'
        });
        $('.chat-nav, .chat-gen').css({
            'width':'66.5%'
        });
        $('#f-clng').addClass("col-md-8 col-6");
        $('#f-clng').removeClass("col-md-5 col");
    });
    // ==============searching massages==============>
    $('#massage-searching').click(function(){
        $('.floating-o2').css({
            'display':'block'
        });
        $('.floating').css({
            'display':'none'
        });
        $('.chat-nav').css({
            'width':'42%'
        });
        $('.chat-gen').css({
            'width':'41.59%'
        });
        $('#f-clng').addClass("col-md-5 col");
        $('#f-clng').removeClass("col-md-8 col-6");
    });
    $('#search-x-icon').click(function(){
        $('.floating-o2').css({
            'display':'none'
        });
        $('.rest-gridding').css({
            'display':'none'
        });
        $('.chat-nav, .chat-gen').css({
            'width':'66.5%'
        });
        $('#f-clng').addClass("col-md-8 col-6");
        $('#f-clng').removeClass("col-md-5 col"); 
    });

});


