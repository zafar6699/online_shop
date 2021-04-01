$(document).ready(function(){

    
    if($( window ).width() < 768){
        $("nav.menu-nav").toggleClass("small-menu-nav");
        $("nav.menu-nav").toggleClass("open-nav");
        $("header.header").toggleClass("small-header");
        $("div.view-content").toggleClass("small-view-content");
    }

    $(".bt-dropdown").click(function(e){
        let attr = $(this).attr("data-target");
        $("#"+attr).slideToggle(0);
        e.stopPropagation()
    });

    $("header div.profile-dropdown button").click(function(){
        $(this).toggleClass("__active");
    });

    $(window).click(function(){
        $(".my-dropdown").slideUp(0);
        $("header div.profile-dropdown button").removeClass("__active");
    })

    
    $(".bt-bars").click(function(){
        $("nav.menu-nav").toggleClass("small-menu-nav");
        $("nav.menu-nav").toggleClass("open-nav");
        $("header.header").toggleClass("small-header");
        $("div.view-content").toggleClass("small-view-content");
    });


    $("nav.open-nav .dropdown-li>a").click(function(){
        $(".dropdown-li>a").not(this).next().slideUp(0)
        $(".dropdown-li>a").not(this).removeClass("link__active");
        $(".dropdown-li>a").not(this).removeClass("a__open");

        $(this).toggleClass("link__active");
        $(this).toggleClass("a__open");
        $(this).next().slideToggle(0)
    })
});

