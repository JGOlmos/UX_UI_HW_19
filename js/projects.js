console.log("Your index.js is loaded correctly");

$(".topbottomimage").hover(function(){
        $(this).animate({
            width: "130%"},
            'slow');
        }, function (){
            $(this).animate({
                width: "100%"
            }, 'slow');
        }

)