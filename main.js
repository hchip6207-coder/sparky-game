const sparky = document.createElement("img");
  sparky.src = "https://media.tenor.com/NYzVC0OHCbwAAAAj/pug-dog-dancing.gif";
  sparky.width = 25;
  sparky.height = 50;
  sparky.id = "sparky";
  sparky.style.bottom = 200;
  sparky.style.left = 0;
var x = sparky.style.left;
var y = sparky.style.bottom;
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    x = x + 1;
  } else if (event.key === "ArrowLeft") {
    x = x - 1;
  }
});

const STYLE = document.createElement("STYLE");
  STYLE.innerHTML = `
  #sparky {
  position: fixed;
  }
  `;

document.body.appendChild(sparky);
document.head.appendChild(STYLE);
