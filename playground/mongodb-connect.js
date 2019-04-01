// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user={name:'ashok', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB sever');

//  db.collection('Todos').insertOne({
//      text: 'Something to do',
//      completed: false
//  },(err, result) => {
//      if(err){
//          return console.log('Unable to insert todo',err);
//      }

//      console.log(JSON.stringify(result.ops, undefined, 2));
//  })

//   db.close();
// });

// db.collection('Users').insertOne({
//     name: 'ashok',
//     age: 25 ,
//     loaction: 'hyd'
// },(err, result) => {
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }

//     console.log(result.ops[0]._id.getTimestamp());
// });

//  db.close();
 });