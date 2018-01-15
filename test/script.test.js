var conn = new Mongo();
var db = conn.getDB("ooh-la-tech");

// load mock data
load("test/lib/mockData.js");
// load test utils
load("test/lib/testUtils.js");

// -------------------------- MAIN -------------------------

// execute script
load("script.js");

test("init #1", "all mock data was inserted", expect => {
  assertEqualsCollectionArray("recipes", RECIPES, ["r_name"])(expect);
  assertEqualsCollectionArray("costs", COSTS, ["i_name"])(expect);
});

test("#1", "allRecipesWithMixer #1", expect => {
  assertEqualsCollectionArray("results1", RESULTS1, ["r_name"], query =>
    query.sort({ r_name: 1 })
  )(expect);
});

test("#2", "calcIngredientsUsage #1", expect => {
  assertEqualsCollectionArray("results2", RESULTS2, ["_id", "value"], query =>
    query.sort({ _id: 1 })
  )(expect);
});

test("#3", "calcCosts #1", expect => {
  assertEqualsCollectionArray("results3", RESULTS3, ["r_name", "cost"], query =>
    query.sort({ r_name: 1 })
  )(expect);
});
