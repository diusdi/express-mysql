const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("halooo");
});
app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
