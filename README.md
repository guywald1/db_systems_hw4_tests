# HW4 Wet Tests

## Requirements

* MongoDB shell version v3.4.6
* MongoDB server version: 3.4.6

## Usage

### With Node.js

> Make sure that you've moved `script.js` to the root directory, the NPM scripts rely on this.

```bash
$ npm run test
```

### Without Node.js

> Assuming your MongoDB server is running on localhost:27017.
> Otherwise, run instead of the first command, for example:
>
> ```bash
> # replace <address:port> as needed
> $ mongo <address:port> test/lib/populate.js
> ```

```bash
# populate the DB
$ mongo test/lib/populate.js
# populate the DB
$ mongo script.js
# run your script
$ mongo test/script.test.js &&
# drop the collections
$ mongo test/lib/destroy.js
```
