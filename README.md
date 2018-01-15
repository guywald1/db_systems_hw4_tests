# HW4 Wet Tests

## Usage

Before anything, make sure that you've moved `script.js` to the root directory.

### With Node.js

```bash
$ npm run test
```

### Without Node.js

> Assuming your MongoDB server is running on localhost:27017.
> Otherwise, run instead of the first command, for example:
> ```bash
> # replace <address:port> as needed
> $ mongo <address:port> test/lib/populate.js
> ```

```bash
# populate the DB
$ mongo test/lib/populate.js
# run your script
$ mongo test/script.test.js &&
# drop the collections
$ mongo test/lib/destroy.js
```