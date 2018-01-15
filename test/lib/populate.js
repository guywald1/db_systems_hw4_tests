const conn = new Mongo();
const db = conn.getDB("ooh-la-tech");

load("test/lib/mockData.js");

// populate db
for (let recipe of RECIPES) {
  db.recipes.insert(recipe);
}
for (let cost of COSTS) {
  db.costs.insert(cost);
}
