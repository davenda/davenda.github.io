(function () {
    "use strict";
    let playingAnim;
    let isPlaying = false;
    let currentFrameID = 0;
    let frameSpeed = 250;
    let selectedAnim;
    let selectedSize;
    window.onload = onload;

    function onload() {
        document.getElementById('start').onclick = play;
        document.getElementById('stop').onclick = stop;
        document.getElementById('animation').onchange = selectAnim;
        document.getElementById('fontsize').onchange = selectSize;
        document.getElementById('turbo').onchange = turboMode;
        selectedAnim = document.getElementById('animation').options[document.getElementById('animation').selectedIndex].text;
        selectedSize = document.getElementById('fontsize').options[document.getElementById('fontsize').selectedIndex].text;
    }

    function play() {
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('animation').disabled = true;
        isPlaying = true;
        playAnim();
    };
    function stop() {
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('animation').disabled = false;
        isPlaying = false;
        stopAnim();
    };
    function selectAnim() {
        selectedAnim = document.getElementById('animation').options[document.getElementById('animation').selectedIndex].text;
        currentFrameID = 0;
    };
    function selectSize() {
        let sizes = {
            "Tiny": "7pt",
            "Small": "10pt",
            "Medium": "12pt",
            "Large": "16pt",
            "Extra Large": "24pt",
            "XXL": "32pt"
        };
        selectedSize = document.getElementById('fontsize').options[document.getElementById('fontsize').selectedIndex].text;
        document.getElementById('text-area').style.fontSize = sizes[selectedSize];
    };
    function turboMode() {
        if (document.getElementById('turbo').checked == true)
            frameSpeed = 50;
        else
            frameSpeed = 250;
        if (isPlaying == true) {
            stopAnim();
            playAnim();
        }
    };

    function setFrame() {
        let frames = ANIMATIONS[selectedAnim].split("=====\n");
        document.getElementById('text-area').value = frames[currentFrameID];
        if (currentFrameID == frames.length - 1)
            currentFrameID = 0;
        else
            currentFrameID++;
    }

    function playAnim() {
        playingAnim = setInterval(setFrame, frameSpeed);
    }

    function stopAnim() {
        clearInterval(playingAnim);
    }
})();