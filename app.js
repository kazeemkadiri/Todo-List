const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const items = [];

// Set view engine
app.set("view engine", "ejs");

// Setup middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }));

// Setup the public path
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   const today = new Date().getDay();
//   let day = null;

//   switch (today) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;

//     default:
//       break;
//   }
//   res.render("index", { dayOfWeek: day });
// });

app.get("/", (req, res) => {
  res.render("list", { newItems: items });
});

app.post("/", (req, res) => {
  const { todoItem } = req.body;

  items.push(todoItem);

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
