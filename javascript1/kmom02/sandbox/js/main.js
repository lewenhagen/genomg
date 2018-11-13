(function () {
    "use strict";

    var box = document.getElementsByClassName("box")[0];
    var content = document.getElementsByClassName("content")[0];

    document.addEventListener("keydown", function(event) {
        var key = event.key;
        var left = box.offsetLeft;
        var top = box.offsetTop;
        var step = 10;
        var contentHeight = content.clientHeigth;
        var contentWidth = content.clientWidth;
        var boxHeight = box.offsetHeight;
        var boxWidth = box.offsetWidth;


        switch (key) {
            case "ArrowUp":
                event.preventDefault();
                if (top - step >= 0) {
                    box.style.top = (top - step) + "px";
                }
                break;
            case "ArrowDown":
                event.preventDefault();
                if (top + boxHeight + step <= contentHeight) {
                    box.style.top = (top + step) + "px";
                }
                break;
            case "ArrowLeft":
                if (left - step >= 0) {
                    box.style.left = (left - step) + "px";
                }
                break;
            case "ArrowRight":
                if (left + boxWidth + step <= contentWidth) {
                    box.style.left = (left + step) + "px";
                }
                break;
        }
        console.log("Du tryckte på: ", key);
    });

    window.console.log("Sandbox is ready!");
})();
