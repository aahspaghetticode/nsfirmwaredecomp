window.onload = fixpstyle;

function fixpstyle() {
    var targethtml = document.getElementsByTagName("html");
    for (var i = 0; i < targethtml.length; i++) {
        targethtml[i].style.fontSize = "26px";
    }

    var targetpage = document.getElementsByClassName("page-description");

    targetpage[0].style.margin = "0 auto 60px";


    var targetTag = document.getElementsByTagName("h3");
    for (var i = 0; i < targetTag.length; i++) {
        targetTag[i].style.fontWeight = "normal";
        targetTag[i].style.margin = "0 0 5px";
    }


    var targetp = document.getElementsByTagName("p");
    for (var i = 0; i < targetp.length; i++) {
        targetp[i].style.color = "#3c3c3c";
    }

    var targetul = document.getElementsByTagName("ul");
    for (var i = 0; i < targetul.length; i++) {
        targetul[i].style.color = "#3c3c3c";
    }

    var targettable = document.getElementsByClassName("table-box");
    for (var i = 0; i < targettable.length; i++) {
        targettable[i].style.margin = "30px 0";
        targettable[i].style.minHeight = 0;
    }

    var targetbox = document.getElementsByClassName("box");
    for (var i = 0; i < targetbox.length; i++) {
        targetbox[i].style.marginTop = "42px";
        var ptarget = targetbox[i].firstElementChild;
        if (ptarget.tagName == "P") {
            targetbox[i].style.marginLeft = "30px";
        }
    }

    var targetwarning = document.getElementsByClassName("warning");
    for (var i = 0; i < targetwarning.length; i++) {
        if (targetwarning[i].clientHeight > 70) {
            targetwarning[i].firstElementChild.style.display = "block";
            targetwarning[i].firstElementChild.style.padding = "5px 0 8px";
        }
    }

}
