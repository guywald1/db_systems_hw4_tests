const COSTS = [
  {
    i_name: "chocolate",
    unit_measure: "cubes",
    amount: 20,
    cost: 10.0
  },
  {
    i_name: "flour",
    unit_measure: "gr",
    amount: 500,
    cost: 10.0
  },
  {
    i_name: "milk",
    unit_measure: "ltr",
    amount: 1.5,
    cost: 6
  },
  {
    i_name: "eggs",
    unit_measure: "units",
    amount: 12,
    cost: 12
  },
  {
    i_name: "tomato",
    unit_measure: "kg",
    amount: 1,
    cost: 5.5
  },
  {
    i_name: "cucumber",
    unit_measure: "kg",
    amount: 1,
    cost: 4.5
  },
  {
    i_name: "cream",
    unit_measure: "ml",
    amount: 400,
    cost: 7.5
  },
  {
    i_name: "spaghetti",
    unit_measure: "gr",
    amount: 750,
    cost: 5.5
  }
];

const RECIPES = [
  {
    r_name: "chocolate cake",
    instructions:
      "1. put chocolate, flour and milk and mix with mixer. 2. bake and eat",
    ingredients: [
      {
        i_name: "chocolate",
        unit_measure: "cubes",
        amount: 10
      },
      {
        i_name: "flour",
        unit_measure: "gr",
        amount: 200
      },
      {
        i_name: "milk",
        unit_measure: "ltr",
        amount: 350
      }
    ]
  },
  {
    r_name: "pancakes",
    instructions:
      "1. put eggs, milk and flour in bowl. 2. mix batter with MiXeR(TM). 3. fry and eat",
    ingredients: [
      {
        i_name: "flour",
        unit_measure: "gr",
        amount: 400
      },
      {
        i_name: "milk",
        unit_measure: "ltr",
        amount: 100
      },
      {
        i_name: "eggs",
        unit_measure: "units",
        amount: 3
      }
    ]
  },
  {
    r_name: "cereal",
    instructions:
      "1. put cereal in bowl. 2. pour milk. 3. make sure you performed steps in order, otherwise you're a psycopath",
    ingredients: [
      {
        i_name: "milk",
        unit_measure: "ltr",
        amount: 0.5
      }
    ]
  },
  {
    r_name: "spaghetti rose",
    instructions:
      "1. boil spaghetti. 2. put tomatoes and cream in bowl and mix with MiXeR(TM). 3. make sauce and pour over cooked spaghetti. 4. use napkins, don't be an animal",
    ingredients: [
      {
        i_name: "tomato",
        unit_measure: "kg",
        amount: 0.4
      },
      {
        i_name: "cream",
        unit_measure: "ml",
        amount: 200
      },
      {
        i_name: "spaghetti",
        unit_measure: "gr",
        amount: 300
      }
    ]
  },
  {
    r_name: "salad",
    instructions:
      "1. slice tomatoes and cucumbers. 2. put tomatoes and cucumbers in bowl. 3. mix the bowl. 4. eat and rejoice by the amount of calories you've saved yourself, then cry and eat a pizza",
    ingredients: [
      {
        i_name: "tomato",
        unit_measure: "kg",
        amount: 0.4
      },
      {
        i_name: "cucumber",
        unit_measure: "kg",
        amount: 0.2
      }
    ]
  }
];

// -------------------------- AUX --------------------------

function calcCostsTest(recipeName) {
  const recipe = RECIPES.find(({ r_name }) => r_name === recipeName);
  const total = recipe.ingredients.reduce((acc, ingredient) => {
    const cost = COSTS.find(r => r.i_name === ingredient.i_name);
    return acc + ingredient.amount * cost.cost / cost.amount;
  }, 0);
  return total;
}

function calcResults2() {
  const histo = {};
  for (let recipe of RECIPES) {
    for (let ingredient of recipe.ingredients) {
      const prev = histo[ingredient.i_name] || 0;
      histo[ingredient.i_name] = prev + 1;
    }
  }
  return Object.keys(histo)
    .map(key => ({
      _id: key,
      value: histo[key]
    }))
    .sort((a, b) => a._id > b._id);
}

function calcResults3() {
  const res = RECIPES.map(({ r_name }) => ({
    r_name,
    cost: calcCostsTest(r_name)
  }));
  return res.sort((a, b) => a.r_name > b.r_name);
}

// ------------------------ RESULTS ------------------------

// --------- results1 --------

let RESULTS1 = [
  {
    r_name: "chocolate cake"
  },
  {
    r_name: "pancakes"
  },
  {
    r_name: "spaghetti rose"
  }
];
// sort
RESULTS1 = RESULTS1.sort((a, b) => a.r_name > b.r_name);

// --------- results2 --------

const RESULTS2 = calcResults2();

// --------- results3 --------

let RESULTS3 = calcResults3();

// --------------------------- / ---------------------------
// ------------------------- EXPORT ------------------------
// --------------------------- / ---------------------------

if (module) {
  module.exports = {
    RECIPES,
    COSTS
  };
}
