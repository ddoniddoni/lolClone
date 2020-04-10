const champion = {
  garen: "https://www.youtube.com/embed/tgbNymZ7vqY",
};

const media = document.getElementById("myVideo");
media.setAttribute("width", "420");
media.setAttribute("height", "315");
media.setAttribute("allowfullscreen", "allowfullscreen");
media.setAttribute("src", champion.garen);
