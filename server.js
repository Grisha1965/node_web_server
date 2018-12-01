const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  //res.send('<h1>Hello Express</h1>');

  res.render("home.hbs", {
    title: "Home Page",
    welcome: "Welcome to Node express server"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send('<h1 style="color:red;">404 PAGE NOT FOUNT</h1>');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
