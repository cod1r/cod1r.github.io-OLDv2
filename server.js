const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://cod1r:<password>@info-gg7p0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
 // perform actions on the collection object
 const collection = client.db("people").collection("emails");
 console.log(client.isConnected());
 var obj = {
     "_id":name,
     "email":email,
     "about":about
 }
 collection.insertOne(obj).then(console.log("DONE"));
client.close();
});