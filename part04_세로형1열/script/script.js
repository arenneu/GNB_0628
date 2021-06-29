/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(250);
    });

    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(500);
    });
});
