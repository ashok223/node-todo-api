// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB sever');

//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//       console.log(result);
//   });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// })

// db.collection('Users').deleteMany({name:'ashok'});

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5ca1c4fbc83cdd0af0ec0b58")
}).then((results) => {
 console.log(JSON.stringify(results, undefined, 2));
})




 });

  