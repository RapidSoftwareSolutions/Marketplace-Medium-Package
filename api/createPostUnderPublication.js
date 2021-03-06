const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken,
        publicationId,
        title,
        contentFormat,
        content,
        tags,
        canonicalUrl,
        publishStatus,
        license,
        notifyFollowers
    } = req.body.args;


    if(!accessToken || !publicationId || !title || !contentFormat || !content) 
        throw new ValidationError(['accessToken', 'publicationId', 'title', 'content']);


    let body = lib.clearArgs({
        //publicationId,
        title,
        contentFormat,
        content,
        tags,
        canonicalUrl,
        publishStatus,
        license,
        notifyFollowers
    });

    let options = {
        url:    `https://api.medium.com/v1/publications/${publicationId}/posts`,
        method: 'POST',
        auth: {
            bearer: accessToken
        },
        form: body
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