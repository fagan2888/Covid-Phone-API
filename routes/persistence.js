const Cloudant = require('@cloudant/cloudant');
const cloudant = Cloudant({
    // eslint-disable-line
    url: ""
    });
const db = cloudant.db.use('anticovids');
const fs = require('fs');

module.exports.insert = (objeto, id) =>
    new Promise((resolve, reject) => {
        db.insert(objeto, id)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
