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
    }
    var targetbox = document.getElementsByClassName("box");
    for (var i = 0; i < targetbox.length; i++) {
        targetbox[i].style.margin = "20px auto 60px";
    }

 var targetwarning = document.getElementsByClassName("warning");
  if (targetwarning[2]) {
    targetwarning[2].firstElementChild.style.display="block";
    targetwarning[2].firstElementChild.style.padding="8px 0";
}
}
