const sparky = document.createElement("img");
  sparky.src = "https://media.tenor.com/NYzVC0OHCbwAAAAj/pug-dog-dancing.gif";
  sparky.width = 500;
  sparky.height = 500;
  sparky.id = "sparky";
  sparky.style.bottom = 1050 + "px";
  sparky.style.left = 0 + "px";
  sparky.style.position = "fixed";
var x = 0;
var y = 0;
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    x = x + 50;
    sparky.style.left = x + "px";
  } else if (event.key === "ArrowLeft") {
    x = x - 50;
    sparky.style.left = x + "px";
  } else if (event.key === "ArrowUp") {
    y = y + 50;
    sparky.style.bottom = y + "px";
  } else if (event.key === "ArrowDown") {
    y = y - 50;
    sparky.style.bottom = y + "px";
  }
});

const STYLE = document.createElement("STYLE");
  STYLE.innerHTML = `
  body {
  background-image: url('https://gifdb.com/images/high/dancing-pug-dog-with-music-disc-jfg9p16pxr0gohfu.gif');
  }
  `;

document.body.appendChild(sparky);
document.head.appendChild(STYLE);
