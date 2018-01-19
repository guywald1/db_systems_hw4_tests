/*
  Some test utils inspired by the Jest API (see: https://facebook.github.io/jest/).
  Could have been more elegant/efficient but ¯\_(ツ)_/¯ 
*/

const printRed = (...args) => {
  print("\x1b[31m", ...args, "\x1b[0m");
};

const printGreen = (...args) => {
  print("\x1b[32m", ...args, "\x1b[0m");
};

function expectFactory() {
  return (received, customMessage = null) => {
    let flag = true;
    let self = this;
    return {
      not() {
        flag = !flag;
        return this;
      },
      toEqual(expected) {
        if (flag === (received !== expected)) {
          throw new Error(
            `${received} is${
              flag ? " not" : ""
            } equal to expected value of ${expected} ${
              customMessage ? `( ${customMessage} )` : ""
            }`
          );
        }
      }
    };
  };
}

function test(name, desc, cb) {
  try {
    cb(expectFactory());
  } catch (e) {
    printRed(`FAILED IN TEST (${desc})`);
    printRed(`[${name}] ${e.message}`);
  }
}

function assertEqualsCollectionArray(collection, arr, fields, queryParser) {
  return expect => {
    const fieldsForQuery = fields.reduce(
      (acc, curr) => Object.assign({}, acc, { [curr]: 1 }),
      {}
    );
    // fields: ["foo", "bar"] --> fieldsForQuery: { foo: 1, bar: 1 }
    let i = 0;
    let query = db[collection].find({}, fieldsForQuery);
    query = queryParser ? queryParser(query) : query;
    query.forEach(document => {
      expect(
        arr[i],
        "collection probably doesn't contain all relevant documents"
      )
        .not()
        .toEqual(undefined);
      Object.keys(fieldsForQuery).forEach(key => {
        expect(document[key], "document should have property of " + key)
          .not()
          .toEqual(undefined);
        expect(document[key]).toEqual(arr[i][key]);
      });
      i++;
    });
    expect(i, "probably missing some documents in your collection").toEqual(
      arr.length
    );
  };
}
