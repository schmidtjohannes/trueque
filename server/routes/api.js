const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/producer', (req, res) => {
  connection((db) => {
    db.collection('producers')
      .insertOne(req.body, function (error, response) {
        if(error) {
          sendError(err, res);
        } else {
          return res.json(response.ops[0])
        }
      });
//      .insertOne(req.body)
//      .then((producer) => {
//                response.data = producer;
//                res.json(response);
//      })
//      .catch((err) => {
//        sendError(err, res);
//      });
  });
});

module.exports = router;
