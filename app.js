import express from "express";

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
  console.log("Server sul retrogame in ascolto");
});
