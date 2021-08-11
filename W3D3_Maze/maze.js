$(function () {
    var started;
    var lost = false;
    $(".boundary").on("mouseover", failed);
    $("#end").on("mouseover", function () {
        if (started && !lost) {
            $("#status").text("You Win! :]");
        } else if (started) {
            $("#status").text("Sorry, You Lost. :[");
        }
        started = false;
    });
    $("#start").on("click", function () {
        reset();
        if (!started) {
            started = true;
        }
    });
    $("#maze").on("mouseleave", function () {
        if (started) {
            $(".boundary").not(".example").addClass("youlose");
            $("#status").text("You Lose!");
        }
    });
    function failed() {
        if (started) {
            lost = true;
            $(".boundary").not(".example").addClass("youlose");
        }
    }
    function reset() {
        started = false;
        lost = false;
        $(".boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin.");
    }
}); 
https://sakai.cs.miu.edu/dav/group-user/488e440c-e8e1-4aa2-afbf-ff22c1b4514f/612712
https://sakai.cs.miu.edu/dav/488e440c-e8e1-4aa2-afbf-ff22c1b4514f