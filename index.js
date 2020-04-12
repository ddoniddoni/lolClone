const championName = {
  Aatrox: "Aatrox",
  Ahri: "Ahri",
  Akali: "Akali",
  Alistar: "Alistar",
  Amumu: "Amumu",
  Anivia: "Anivia",
  Annie: "Annie",
  Aphelios: "Aphelios",
  Ashe: "Ashe",
  AurelionSol: "AurelionSol",
  Azir: "Azir",
  Bard: "Bard",
  Blitzcrank: "Blitzcrank",
  Brand: "Brand",
  Braum: "Braum",
  Caitlyn: "Caitlyn",
  Camille: "Camille",
  Cassiopeia: "Cassiopeia",
  Chogath: "Chogath",
  Corki: "Corki",
  Darius: "Darius",
  Diana: "Diana",
  DrMundo: "Dr.Mundo",
  Draven: "Draven",
  Ekko: "Ekko",
  Elise: "Elise",
  Evelynn: "Evelynn",
  Ezreal: "Ezreal",
  Fiddlesticks: "Fiddlesticks",
  Fiora: "Fiora",
  Fizz: "Fizz",
  Galio: "Galio",
  Gangplank: "Gangplank",
  Garen: "https://www.youtube.com/embed/tgbNymZ7vqY",
  Gnar: "Gnar",
  Gragas: "Gragas",
  Graves: "Graves",
  Hecarim: "Hecarim",
  Heimerdinger: "Heimerdinger",
  Illaoi: "Illaoi",
  Irelia: "Irelia",
  Ivern: "Ivern",
  Janna: "Janna",
  JarvanIV: "JarvanIV",
  Jax: "Jax",
  Jayce: "Jayce",
  Jhin: "Jhin",
  Jinx: "Jinx",
  Kaisa: "Kaisa",
  Kalista: "Kalista",
  Karthus: "Karthus",
  Kassadin: "Kassadin",
  Katarina: "Katarina",
  Kayle: "Kayle",
  Kayn: "Kayn",
  Kennen: "Kennen",
  Khazix: "Kha'Zix",
  Kindred: "Kindred",
  Kled: "Kled",
  KogMaw: "Kogmaw",
  Leblanc: "LeBlanc",
  LeeSin: "LeeSin",
  Leona: "Leona",
  Lissandra: "Lissandra",
  Lucian: "Lucian",
  Lulu: "Lulu",
  Lux: "Lux",
  Malphite: "Malphite",
  Malzahar: "Malzahar",
  Maokai: "Maokai",
  MasterYi: "MasterYi",
  MissFortune: "MissFortune",
  Mordekaiser: "Mordekaiser",
  Morgana: "Morgana",
  Nami: "Nami",
  Nasus: "Nasus",
  Nautilus: "Nautilus",
  Neeko: "Neeko",
  Nidalee: "Nidalee",
  Nocturne: "Nocturne",
  Nunu: "Nunu",
  Olaf: "Olaf",
  Orianna: "Orianna",
  Ornn: "Ornn",
  Pantheon: "Pantheon",
  Poppy: "Poppy",
  Pyke: "Pyke",
  Qiyana: "Qiyana",
  Quinn: "Quinn",
  Rakan: "Rakan",
  Rammus: "Rammus",
  RekSai: "Reksai",
  Renekton: "Renekton",
  Rengar: "Rengar",
  Riven: "Riven",
  Rumble: "Rumble",
  Ryze: "Ryze",
  Sejuani: "Sejuani",
  Senna: "Senna",
  Sett: "Sett",
  Shaco: "Shaco",
  Shen: "Shen",
  Shyvana: "Shyvana",
  Singed: "Singed",
  Sion: "Sion",
  Sivir: "Sivir",
  Skarner: "Skarner",
  Sona: "Sona",
  Soraka: "Soraka",
  Swain: "Swain",
  Sylas: "sylas",
  Syndra: "Syndra",
  TahmKench: "TahmKench",
  Taliyah: "Taliyah",
  Talon: "Talon",
  Taric: "Taric",
  Teemo: "GTeemoaren",
  Thresh: "Thresh",
  Tristana: "Tristana",
  Trundle: "Trundle",
  Tryndamere: "Tryndamere",
  TwistedFate: "TwistedFate",
  Twitch: "Twitch",
  Udyr: "Udyr",
  Urgot: "Urgot",
  Varus: "Varus",
  Vayne: "Vayne",
  Veigar: "Veigar",
  Velkoz: "VelKoz",
  Vi: "Vi",
  Viktor: "Viktor",
  Vladimir: "Vladimir",
  Volibear: "Volibear",
  Warwick: "Warwick",
  MonkeyKing: "Wukong",
  Xayah: "Xayah",
  Xerath: "Xerath",
  XinZhao: "XinZhao",
  Yasuo: "Yasuo",
  Yorick: "Yorick",
  Yuumi: "Yuumi",
  Zac: "Zac",
  Zed: "Zed",
  Ziggs: "Ziggs",
  Zilean: "Zilean",
  Zoe: "Zoe",
  Zyra: "Zyra",
};

const media = document.createElement("iframe");
const mediaContainer = document.getElementById("media__container");

const nextPage = document.getElementById("image__container");

const FRONT_IMAGE =
  "https://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/";
const BACK_IMAGE = ".png";
const CHAM_NAME = Object.keys(championName);

const mediaMake = (i) => {
  if (i) {
    mediaContainer.append(media);
    media.setAttribute("width", "420");
    media.setAttribute("height", "315");
    media.setAttribute("allowfullscreen", "allowfullscreen");
    media.setAttribute("src", championName[CHAM_NAME[i]]);
  }
};

const imageMake = () => {
  for (let i = 0; i < CHAM_NAME.length; i++) {
    const chamImage = document.createElement("input");
    nextPage.append(chamImage);
    chamImage.setAttribute("type", "image");
    chamImage.setAttribute("id", "chamImage");
    chamImage.setAttribute("width", "100");
    chamImage.setAttribute("height", "100");
    chamImage.setAttribute("src", FRONT_IMAGE + CHAM_NAME[i] + BACK_IMAGE);
    chamImage.setAttribute("value", `${CHAM_NAME[i]}`);
    chamImage.setAttribute("onclick", `mediaMake(${i})`);
  }
};

imageMake();
mediaMake();
