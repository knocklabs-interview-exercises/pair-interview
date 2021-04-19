# Resources

Some common resources you might need:

## Javascript

**Recommended HTTP library**
https://www.npmjs.com/package/axios

**Reading a JSON file**

```js
const fs = require("fs");

const data = fs.readFileSync("jobs.json");
const jobs = JSON.parse(data);
```

## Ruby

**Recommended HTTP library**
https://github.com/jnunemaker/httparty

```ruby
data = File.read('jobs.json')
jobs = JSON.parse(data)
```

## Elixir

**Recommended HTTP library**
https://github.com/edgurgel/httpoison

**Reading a JSON file**

```elixir
"jobs.json"
|> File.read!()
|> Jason.decode!()
```
