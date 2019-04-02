// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('unable to connect to mongodb server')
  }
  console.log('connected to MongoDB sever')
//    db.collection ('Todos').findOneAndUpdate({
//        _id: new ObjectID('5ca1deb4a0b3402bb0c8d8fc')
//    }, {
//        $set: {
//            completed: true
//        }
//    }).then ((result) => {
//        console.log(result);
//    })

db.collection ('Users').findOneAndUpdate({
    _id: new ObjectID('5ca1d199ec28da29c800b2dc') 
}, {
    $set: {
        name: 'ashok'
    },
    $inc: {
        age:1
    }
    
}, {
    returnOriginal: 'false'
}).then((result) => {
console.log(result);
});

})
//object relation management