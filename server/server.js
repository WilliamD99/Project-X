const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json())
app.use(express.static("public"))

const weridProjects = require("./routes/weird")

app.use("/weird", weridProjects)

app.listen(5000, () => {
  console.log("Server is running on port: 5000")
})