const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "oi" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta: " + PORT);
});
