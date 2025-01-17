```javascript
//Correct usage of $inc operator using findAndUpdate
db.collection('counters').findOneAndUpdate( { _id: 'myCounter' }, { $inc: { sequence: -1 } }, { upsert: true } );
```