$(function(){
    //햄버거버튼
    $("#nav-icon2").click(function(){
		$(this).toggleClass("open");
	});
    
    $("#nav-icon2").click(function(){
        $("header>div#menu").toggleClass("menuOn");
    })

    //about 토글
    $(".leftWrap dl dt span").click(function(){
        $(this).parent().parent().find("dd").slideToggle("normal");
        $(this).toggleClass("rotate");
    })

    //work 토글
    $(".rightWrap .work dt span").on("click", function(){
        $(this).parent().parent().find("dd").slideToggle("normal");
        $(this).toggleClass("rotate");
    })

    //nav 클릭시 애니메이션
    $("nav ul li").click(function(){
        $("nav ul li").removeClass();
        $(this).addClass("active");
    })

    //스크롤시 애니메이션
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct < 690){
            $("nav ul li").removeClass();
            $("nav ul li").eq(0).addClass("active");
        }else if(sct > 691 && sct < 1699){
            $("nav ul li").removeClass();
            $("nav ul li").eq(1).addClass("active");
        }else if(sct > 1700 && sct < 4399){
            $("nav ul li").removeClass();
            $("nav ul li").eq(2).addClass("active");
        }else if(sct > 4400){
            $("nav ul li").removeClass();
            $("nav ul li").eq(3).addClass("active");
        }
    })

    //스크롤 opacity
    $(window).scroll( function(){
        $(".hide").each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
})