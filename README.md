# BTA
## [Changelog](CHANGELOG.md)

## Main Idea
DDD test repo. All data types is strictly desinged and tested, you can find it in `/shared` folder.

Because of that it quite easy to create any wrapper on it. Server side app, middleware etc. It's doesn't matter.

Now it used on backend, but all types has isomorphic nature, so it easily can be used in frontend or any kind of microservice, so there's no need in code duplication.

## Types Structure:
* [Intermediary](_/shared/AbstractIntermediary.ts)
  * name: [Len255Text](_/shared/Len255Text.ts)
  * order: [PositiveInt](_/shared/PositiveInt.ts)
  * type: [IntType](_/shared/IntermediaryType.ts)
  * Because of the Type field, Intermediary can be:
    * [Range Intermediary](_/shared/RangeIntermediary.ts)
      * from: [Decimal6Float](_/shared/Decimal6Float.ts)
      * to: [Decimal6Float](_/shared/Decimal6Float.ts)
      * step: [Decimal6Float](_/shared/Decimal6Float.ts)
    * [Dropdown Intermediary](_/shared/DropdownIntermediary.ts)
      * dropdown: [IntDropdownType\[\]](_/shared/IntDropdownType.ts)

## Up and Run
```javascript
    // run app
    npm install
    npm start
    
    // run tests
    npm test
    
    // run linter
    npm run lint
```

## API
Server run on `localhost:3000` and next API is available:
```text
GET: /intermediary - get list of all intermediaries
GET: /intermediary/:id - get intermediary by id
POST: /intermediary - create new intermediary
PUT: /intermediary/:id - update intermediary
DELETE: /intermediary/:id - delete intermediary
```
Also in repo available [Postman](https://www.postman.com/) Collection [JSON](BTA.postman_collection.json) with all queries
Test data:
```json
{
  "type": "dropdown",
  "name": "bla",
  "order": 1,
  "dropdown": [
    {
      "option": "Promotion 20%",
      "value": 0.2
    },
    {
      "option": "Promotion 50%",
      "value": 0.5
    }
  ]
}

```
```json
{
    "type": "range",
    "name": "bla",
    "order": 1,
    "from": 1,
    "to": 2,
    "step": 0.1
}
```

## Additional Info
No any DB was used, because of the time and because of ability to play with repo without MySQL or MongoDB as a dependency