const ex = require("express");
const rs = require("./recipes-JSON");
const cors = require("cors");

const app = ex();
const r = rs.recipes;
app.use(cors());
app.use(ex.json());

// GET ALL RECIPES
app.get("/api/recipes", (req, res) => {
  res.send(r);
});

// GET RECIPES BY CUISINE
app.get("/api/recipes/:cuisine", (req, res) => {
  let recipes = [];
  for (let i = 0; i < r.length; i++) {
    if (r[i].cuisine == req.params.cuisine) {
      recipes.push(r[i]);
    }
  }
  res.send(cuisine);
});

app.listen(3005);
console.log("Starting server...");
