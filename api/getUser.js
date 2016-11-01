const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken
    } = req.body.args;


    if(!accessToken) throw new Error('accessToken is required.');

    let options = {
        url:    'https://api.medium.com/v1/me',
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