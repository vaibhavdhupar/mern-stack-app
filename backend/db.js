const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb://127.0.0.1:27017/shop';

let _db;

const initDb = callback => {
    if(_db){
        console.log('Database is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(mongoDbUrl)
    .then(client => {
        _db = client;
        callback(null, _db);
    })
    .catch(err => {
        callback(err);
    });
}


const getDb = () => {
    if(!_db){
        throw Error('Database is not yet initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}