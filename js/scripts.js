$(document).ready(function(){
    $(".login_open_button").click(function(){
        $('#loginModal').modal('toggle');
    });
    $(".login_close_button").click(function(){
        $('#loginModal').modal('hide');
    });
    $(".reserve_open_button").click(function(){
        $('#reserve').modal('toggle');
    });
    $(".reserve_close_button").click(function(){
        $('#reserve').modal('hide');
    });
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});