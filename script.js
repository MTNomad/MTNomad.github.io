$(document).ready(function() {
    $("#animateBtn").click(function() {
        $(bigheading).animate({ 
            fontSize: "3em", 
         }, 1500 );
         $(bigheading).animate({ 
            fontSize: "40px", 
         }, 1500 );
         setTimeout(
            function() 
            {
                $(bigheading).css('color', 'blue');
            }, 3000);
        $(selfie).css({"border-color": "#b4b4b4", 
        "border-weight":"5px", 
        "border-style":"solid"});
    });
});
