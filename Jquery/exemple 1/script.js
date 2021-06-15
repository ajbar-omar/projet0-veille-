$(document).ready(function(){
    $("body").on({
        mouseenter: function(){
            $(this).css("background-color", "gray");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "red");
        },
       
        dblclick: function(){
            $(this).css("background-color", "yellow");
        }
    });
});