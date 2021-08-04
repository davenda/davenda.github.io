$(document).ready(function () {
    var started;
    $(".boundary").on("mouseover", failed);
    $("#end").on("mouseover", function () {
        if (started) {
            $("#status").text("You Win! :]");
        }
    });
    $("#end").on("mouseleave", function () {
        if (started) {
            reset();
        }
    });
    $("#start").on("click", function () {
        if (!started) {
            started = true;
        } else {
            reset();
        }
    });
    $("#maze").on("mouseleave", failed);
    function failed() {
        if (started) {
            $("#status").text("Sorry, You Lost. :[");
            $(".boundary").not(".example").addClass("youlose");
        }
    }
    function reset() {
        $(".boundary").removeClass("youlose");
        started = null;
        $("#status").text("Click the \"S\" to begin");
    }
});
