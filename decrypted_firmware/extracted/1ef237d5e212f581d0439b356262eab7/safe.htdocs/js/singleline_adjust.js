//h3 single line adjustment

window.onload=fixsingleline;

function fixsingleline(){
  var targetclass=["ban","instruct"];
  for (var i = 0; i < targetclass.length; i++) {
    var target=document.getElementsByClassName(targetclass[i]);
    for (var j = 0; j < target.length; j++) {
      if(target[j].firstElementChild.clientHeight<38){
          target[j].firstElementChild.style.position = "relative";
          target[j].firstElementChild.style.top = "12px";
          target[j].firstElementChild.style.height = "48px";
      }
    }
  }
}
