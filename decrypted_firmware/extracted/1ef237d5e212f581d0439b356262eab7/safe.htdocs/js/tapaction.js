//h3 single line adjustment

window.onload = tapcolor;

window.window.onpageshow = function() {
    var elements = document.getElementsByClassName("btn-border");
    for (var i = 0; i < elements.length ; ++i) {
        elements[i].style.backgroundColor = "";
    }
};

function tapcolor() {
    var elements = document.getElementsByClassName("btn-border");
    var colorcode = "rgba(54,247,218,0.1)";
    var modifyElement = function (target) {
        target.addEventListener('touchstart', function(e) {
            target.style.backgroundColor = colorcode;
        }, false);
        target.addEventListener('touchend', function(e) {
            target.focus();
            target.style.backgroundColor = '';
        }, false);
        target.addEventListener('click', function(e) {
            target.focus();
        }, false);
    };
    for (var i = 0; i < elements.length ; ++i) {
        modifyElement(elements[i]);
    }
}
