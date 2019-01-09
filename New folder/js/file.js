var scrollButton = $("#scroll-top");

$(window).scroll(function () {
   "use strict";
    if($(this).scrollTop() >= 600) {
        scrollButton.show();
    } else{
        scrollButton.hide();
    }
});
scrollButton.click(function () {
   $("html,body").animate({scrollTop: 0}, 600); 
});