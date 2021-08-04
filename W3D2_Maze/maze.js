$(document).ready(function(){
    var started;
    $(".boundary").on("mouseover", failed);
    $("#end").on("mouseover", function(evt){
        if(started){
            $("#status").text("You Win! :]");
        }
    });
    $("#end").on("mouseleave", function(evt){
        if(started){
            reset();
        }
    });
    $("#start").on("click", function(evt){
        if(!started){
            started = true;
        }else{
            reset();
        }
    });
    $("#maze").on("mouseleave", failed);
    function failed(evt){
        if(started){
            $("#status").text("Sorry, You Lost. :[");
            $(".boundary").not(".example").addClass("youlose");
        }
    } 
    function reset(){
        $(".boundary").removeClass("youlose");
        started = null;
        $("#status").text("Click the \"S\" to begin");
    }
});
