/**
 * require time-stamp for getting time
 */
const timestamp = require('time-stamp');

/**
 * write the application error log to the couchbase document
 * @param {*} db instance of the database where the log needs to be stored
 * @param {*} data data text which needs to be pushed to the couchbase error log
 */
var error = (db, data) => {
    db.upsert(`AppLog-error-${timestamp('YYYY-MM-DD-HH:mm:ss.ms')}`, 
    { time: timestamp('HH:mm:ss.ms'), error: data }, function (err, result) {
        if (err) throw err;
    });
}

/**
 * write the application info log to the couchbase document
* @param {*} db instance of the database where the log needs to be stored
 * @param {*} data data text which needs to be pushed to the couchbase info log
 */
var info = (db, data) => {
    db.upsert(`AppLog-info-${timestamp('YYYY-MM-DD-HH:mm:ss.ms')}`, 
    { time: timestamp('HH:mm:ss.ms'), info: data }, function (err, result) {
        if (err) throw err;
    });
}

/**
 * write the application debug log to the couchbase document
 * @param {*} db instance of the database where the log needs to be stored
 * @param {*} data data text which needs to be pushed to the couchbase debug log
 */
var debug = (db, data) => {
    db.upsert(`AppLog-debug-${timestamp('YYYY-MM-DD-HH:mm:ss.ms')}`, 
    { time: timestamp('HH:mm:ss.ms'), debug: data }, function (err, result) {
        if (err) throw err;
    });
}

/**
 * write the application warning log to the couchbase document
 * @param {*} db instance of the database where the log needs to be stored
 * @param {*} data data text which needs to be pushed to the couchbase warn log
 */
var warn = (db, data) => {
    db.upsert(`AppLog-warn-${timestamp('YYYY-MM-DD-HH:mm:ss.ms')}`, 
    { time: timestamp('HH:mm:ss.ms'), warn: data }, function (err, result) {
        if (err) throw err;
    });
}

module.exports = {
    error,
    info,
    debug,
    warn
};