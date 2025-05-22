import express from "express";
import fs from "fs";
import chalk from "chalk";

//facendo così creiamo l'applicazione web tramite express
const app = express();
const port = 3000;

//la cartella public sarà pubblica quindi posso accederci per le immagini
app.use(express.static("public"));

//Zona delle rotte
app.get("/", (req, res) => {
  res.send("Server del mio Blog sul retrogaming");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      titolo: "Game Boy Advance: La Rinascita del Gioco Portatile",
      contenuto: "Il Game Boy Advance ha rivoluzionato il gioco portatile nei primi anni 2000. Con titoli iconici come 'Metroid Fusion' e 'The Legend of Zelda: The Minish Cap', ha segnato un'epoca.",
      immagine: "./imgs/gba.jpg",
      tags: ["Game Boy Advance", "Nintendo", "Retrogaming", "Portatile"],
    },
    {
      titolo: "Game Boy SP: Stile e Illuminazione in un'unica console",
      contenuto: "Il Game Boy Advance SP ha introdotto un design a conchiglia e uno schermo retroilluminato, cambiando per sempre l'esperienza di gioco portatile.",
      immagine: "./imgs/gbasp.jpg",
      tags: ["Game Boy SP", "Nintendo", "Retro", "Hardware"],
    },
    {
      titolo: "PlayStation 2: L’Impero dei JRPG e dei Platform",
      contenuto: "La PS2 ha una delle librerie più vaste di sempre, con capolavori come 'Shadow of the Colossus' e 'Final Fantasy X'. Un pilastro del retrogaming moderno.",
      immagine: "./imgs/ps2.jpg",
      tags: ["PlayStation 2", "Sony", "JRPG", "Platform", "Retrogaming"],
    },
    {
      titolo: "Nintendo DS: Due Schermi, Infinite Possibilità",
      contenuto: "Con il touch screen e giochi come 'The World Ends With You' e 'New Super Mario Bros', il DS ha ridefinito il concetto di portatile.",
      immagine: "./imgs/ds.jpg",
      tags: ["Nintendo DS", "Touch", "Innovazione", "Retro", "Nintendo"],
    },
    {
      titolo: "Xbox 360: Il salto nella generazione HD",
      contenuto: "L'Xbox 360 ha segnato l’inizio dell’era HD con titoli come 'Halo 3' e 'Gears of War', ed è ancora molto amato nella scena del retrogaming moderno.",
      immagine: "./imgs/xbox360.jpg",
      tags: ["Xbox 360", "Microsoft", "HD", "FPS", "Retrogaming"],
    },
  ];

  let postCount = 0;
  for (const post of posts) {
    postCount++;
  }

  const postData = {
    post: posts,
    numberPost: `Il numero totale di post è ${postCount}`,
    success: true,
  };

  res.json(postData);
});

app.get("/bacheca2", (req, res) => {
  const dataJson = fs.readFileSync("./data/consoles.json");
  const consoles = JSON.parse(dataJson);

  let postCount = 0;
  //quindi i cicli funzionano anche dentro al json parsato
  for (const post of consoles) {
    postCount++;
  }

  const resData = {
    numberofposts: postCount,
    data: consoles,
    success: true,
  };

  res.json(resData);
});

//Invoco la funzione di ascolto
app.listen(port, () => {
  console.log(chalk.bgGreen("Server sul retrogame in ascolto"));
});
