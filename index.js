const frontImage = "https://opgg-static.akamaized.net/images/lol/champion/";
const backImage = ".png?image=q_auto,w_140&v=1585730185";

const text = {
  Garen: "Garen",
  Galio: "Galio",
};

const image = document.getElementById("myImage");

image.setAttribute("src", frontImage + text.Garen + backImage);
image.setAttribute("width", "100");
image.setAttribute("height", "100");
