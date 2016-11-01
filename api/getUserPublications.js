const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken,
        userId
    } = req.body.args;


    if(!accessToken || !userId) throw new Error('accessToken and userId is required.');

    let options = {
        url:    `https://api.medium.com/v1/users/${userId}/publications`,
        method: 'GET',
        auth: {
            bearer: accessToken
        }
    };

    const defered = Q.defer();

    request(options, (err, response, reslut) => {
        if(!err && (response.statusCode == 200 || response.statusCode == 201)) 
            defered.resolve(reslut);
        else 
            defered.reject(err || reslut);
    });

    return defered.promise;
}