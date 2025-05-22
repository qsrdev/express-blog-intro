import express from "express";
import chalk from "chalk";

//facendo così creiamo l'applicazione web tramite express
const app = express();
const port = 3000;

//la cartella public sarà pubblica quindi posso accederci per le immagini
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio Blog sul retrogaming");
});

//Invoco la funzione di ascolto
app.listen(port, () => {
  console.log(chalk.bgGreen("Server sul retrogame in ascolto"));
});
