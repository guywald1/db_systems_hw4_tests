const conn = new Mongo();
const db = conn.getDB("ooh-la-tech");

db.recipes.drop();
db.costs.drop();
db.results1.drop();
db.results2.drop();
db.results3.drop();
