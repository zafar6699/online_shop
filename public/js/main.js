$(document).ready(function(){

    $(".dropdown-li>a").click(function(){
        
        $(".dropdown-li>a").not(this).next().slideUp(200)
        $(".dropdown-li>a").not(this).removeClass("link__active");
        $(".dropdown-li>a").not(this).removeClass("a__open");

        $(this).toggleClass("link__active");
        $(this).toggleClass("a__open");
        $(this).next().slideToggle(200)
    })

});