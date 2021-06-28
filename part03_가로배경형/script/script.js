/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().slideDown(500);
         $("div#gnbBG").stop().slideDown(500);
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(200);
        $("div#gnbBG").stop().slideUp(200);
    });

});
