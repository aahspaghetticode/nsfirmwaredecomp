window.onload = fixpstyle;

function fixpstyle() {
    var targetClass = document.getElementsByClassName("rect");

    if (targetClass[0]) {
        targetClass[0].style.margin = "30px 0 50px";

        var targetTag = targetClass[0].getElementsByTagName("p");
        for (var i = 0; i < targetTag.length; i++) {
            targetTag[i].style.fontSize = "18px";
            targetTag[i].style.lineHeight = "130%";
        }

        var targetTag2 = targetClass[0].getElementsByTagName("h2");
        for (var i = 0; i < targetTag2.length; i++) {
            var targetTag3 = targetTag2[i].getElementsByTagName("span");
            for (var j = 0; j < targetTag3.length; j++) {
                targetTag3[j].style.position = "relative";
                targetTag3[j].style.top = "0px";
                targetTag3[j].style.fontSize = "22px";
            }
        }

        for (var i = 0; i < targetTag2.length; i++) {
            targetTag2[i].style.fontSize = "26px";
        }

        var targetbox = document.getElementsByClassName("box");
        for (var i = 0; i < targetbox.length; i++) {
            targetbox[i].style.margin = "20px auto 60px";
        }

        var targetwarning = document.getElementsByClassName("warning");
        if (targetwarning[2]) {
            targetwarning[2].firstElementChild.style.display = "block";
            targetwarning[2].firstElementChild.style.padding = "8px 0";
        }
    }
}
