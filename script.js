const text = "Hai sayang, aku bikin website ini buat kamu ❤️";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

typingEffect();
