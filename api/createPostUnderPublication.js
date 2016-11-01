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
        throw new Error('Required fields: accessToken, publicationId, title, content.');

    if(tags) {
        try {
            tags = JSON.parse(tags);
        } catch(e) {
            throw new Error('Invalid tags JSON data. Use ["tag1", "tag2", ...]');
        }
    }

    let body = lib.clearArgs({
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