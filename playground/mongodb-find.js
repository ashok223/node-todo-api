// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB sever');
//   db.collection('Todos').find({_id:new ObjectID('5ca1deb4a0b3402bb0c8d8fc')}).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 21));
//   }, (err) => {
//       console.log('Unable to fetch Todo', err);
//   });

//  // db.close();
//  });

// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//     }, (err) => {
//         console.log('Unable to fetch Todo', err);
//     });
  
//    // db.close();
db.collection('Users').find({name:'sam'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
 });

});

  