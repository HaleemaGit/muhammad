var myText = document.getElementById("title").innerHTML,
  wrapText = "";

for (var i = 0; i < myText.length; i++) {
  wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("title").innerHTML = wrapText;

var myLetters = document.getElementsByTagName("em"),
  i = 0;

function applyBounce() {
  setTimeout(function () {
    myLetters[i].className = "bounce-me";
    i++;

    if (i < myLetters.length) {
      applyBounce();
    }
  }, 250);
}

applyBounce();
