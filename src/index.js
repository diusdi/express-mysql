require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/users");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
