/**
 * Created by Administrator on 2016/6/19.
 */
$(document).ready(function () {

    var H=$('section').height();
    $('.show-p').addClass("show");
    
    function scrollPage(x) {

        if(x<0.75*H){

            $('nav li').removeClass("li-scroll");
            $('nav li:nth-child(1)').addClass("li-scroll");

        } else if(x>=0.75*H&&x<1.75*H){
            $('nav li').removeClass("li-scroll");
            $('nav li:nth-child(2)').addClass("li-scroll");
        }else if(x>=1.75*H&&x<2.75*H){

            $('nav li').removeClass("li-scroll");
            $('nav li:nth-child(3)').addClass("li-scroll");
        }else if(x>=2.75*H&&x<3.75*H){

            $('nav li').removeClass("li-scroll");
            $('nav li:nth-child(4)').addClass("li-scroll");
        }else{

            $('nav li').removeClass("li-scroll");
            $('nav li:nth-child(5)').addClass("li-scroll");
        }
    }

    function anchorChange(){
        $("ul li a").click(function(){
            var hr = $(this).attr("href");
            var anh = $(hr).offset().top;
            $("html,body").stop().animate({scrollTop:anh},1000,"swing");
        })
    }
    $(window).scroll(function () {

        var x=$(window).scrollTop();
        if(x>=80){
            $('nav').css({
                'background':'rgba(0,191,255,0.8)'
            });
        }else{
            $('nav').css({
                'background':'rgba(0,191,255,1)',
            });
        }
        anchorChange();
        scrollPage(x);


        console.log(x);
    });


});