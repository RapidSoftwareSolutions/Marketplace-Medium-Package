const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        refreshToken,
        clientId,
        clientSecret,
    } = req.body.args;


    if(!clientId || !clientSecret || !refreshToken) throw new Error('All fields are required.');

    let options = {
        url:    'https://api.medium.com/v1/tokens',
        method: 'POST',
        form: {
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'refresh_token',
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