const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(__dirname + "/public/"));

app.get("/m4a/:est/:id", (req, res) => {
  const file = `${__dirname}/public/hope${req.params.est}_${req.params.id}.m4a`;
  res.download(file); // Set disposition and send it.
});

app.get("/:id", (req, res) => {
  const file = `${__dirname}/public/hope${req.params.id}.mp3`;
  res.download(file); // Set disposition and send it.
});

app.get("/",(req,res)=>res.send("نور امید"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Started at ${port}`));
