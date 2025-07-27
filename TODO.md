```js
// TODO You can put  the following in the package.json file to use git hooks to handle deployment
```

```json
{
  "git": {
    "scripts": {
      "pre-push": "surge --project ./dist --domain js-camp.surge.sh"
    }
  }}
```
