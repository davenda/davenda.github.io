$(function() {
    var timer;
    var opacity;
    $("#start").click(function(){
        let widthVal = $('#width').val();
        let growthVal = $('#growthAmount').val();
        let intervalVal = $('#interval').val();
        let numCircle = $('#numCircle').val();
        for(let i = 0; i < numCircle; i++){
            createCircle(widthVal, i * 100);
        }
        $("#circle").css("margin", "auto");
        eventHandler();
        if(!timer){
            timer = setInterval(makeBigger, intervalVal, growthVal);
        }
    });
    function createCircle(width, pos){
        width += "px";
        $("#circle")
            .append(
                $("<span>", {
                    "css": {
                        "width": width,
                        "height": width,
                        "background-color": `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                        "border-radius": width,
                        "margin": "auto",
                        "text-align": "center",
                        // "margin": "100px",
                        // "vertical-align": "bottom",
                        "position": "absolute",
                        "left": Math.floor(Math.random() * 1080) + "px",
                        // "top": Math.floor(Math.random() * 960) + "px"
                    }
                }
            ).attr('id', 'circ' + pos)
        );   
    }
    function makeBigger(growthVal){
        $("span")
            .css({
                "height": ((idx, old) => parseInt(old) + parseInt(growthVal) + "px"),
                "width": ((idx, old) => parseInt(old) + parseInt(growthVal) + "px"),
                "border-radius": ((idx, old) => parseInt(old) + parseInt(growthVal) + "px")
            }); 
    }
    function eventHandler(){
        let time;
        $("#circle > span").hover(function(){
            if(!opacity) {
                opacity = 1;
            }
            time = setInterval(opaque, 250, this, opacity)
            // $(this).css("opacity", "0.5"); 
        },
        function(){
            $(this).css("opacity", "1");
            clearInterval(time);
        });

        $("#circle > span").click(function(){
            $(this).remove()
        });
    }
    function opaque(param, opacity){
        // console.log(opacity);
        opacity -= 0.5;
        // console.log(opacity);
        $(param).css("opacity", opacity)
    }
});



