const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        code,
        clientId,
        clientSecret,
        redirectUri
    } = req.body.args;


    if(!clientId || !clientSecret || !code || !redirectUri) throw new Error('All fields are required.');

    let options = {
        url:    'https://api.medium.com/v1/tokens',
        method: 'POST',
        form: {
            code: code,
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri
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