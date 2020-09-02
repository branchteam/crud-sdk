
/*
 * retryTest.js
 * Copyright (C) 2020 sylveryte <sylveryte@pm.me>
 *
 * Distributed under terms of the MIT license.
 */

// var crud = require('../dist/engine.js');
const mongo = require('mongoskin');
const db = mongo.db('mongodb://titu:apples@141.125.97.237:27017/pet', { native_parser: true, reconnectTries:Number.MAX_VALUE });
db.bind('PetStore');
/*
 * retryTest.js
 * Copyright (C) 2020 sylveryte <sylveryte@archred>
 *
 * Distributed under terms of the MIT license.
 */

// mc.connect('mongodb://titu:apples@141.125.97.237:27017/pet', (er, d) => {
//   console.log('err', er);
//   console.log('d ', d);
// });

var dbName = 'pet';
var collectionName = 'PetStore';

function store(p) {
  crud.create(
    collectionName,
    {
      petId: 'C001',
      petType: 'Cat',
      petName: p,
      petBreed: 'Persian',
    },
    function (err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data);
    },
  );
}

setTimeout(() => {
  console.log('yo trying');
  startReading();
  // store("miko")
}, 1000);

function startReading() {
  setInterval(() => {
    console.log('hola ', new Date());
    db.PetStore.find({}).toArray((err, d) => {
      if (err) console.error(err);
      console.log(d);
    });
    // crud.readById(collectionName, '5f4f81c5f6cb03457d36a329', {}, (err, d) => {
    //   if (err) console.error(err);
    //   console.log(d);
    // });
  }, 1000);
}

// var MongoClient = require('mongodb').MongoClient,
//   f = require('util').format,
//   assert = require('assert');

// var user = encodeURIComponent('titu');
// var password = encodeURIComponent('apples');
// var authMechanism = 'DEFAULT';

// // Connection URL
// var url = f('mongodb://%s:%s@141.125.97.237:27017/pet?authMechanism=%s',
//   user, password, authMechanism);

// console.log(url)
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   db.close();
// });
