const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Setup middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
