const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync
const contentDisposition = require('content-disposition')

module.exports = (req, res) => {
    let {
        accessToken,
        image
    } = req.body.args;


    if(!accessToken || !image) 
        throw new ValidationError(['accessToken', 'image']);

    const defered = Q.defer();

    let options = {
        url:    `https://api.medium.com/v1/images`,
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    };

    let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), image]);

    if(!attach.stderr.toString()) {
        let response = JSON.parse(attach.stdout.toString());
        var fn       = path.resolve('./lib', response.message);

        if(!response.success) {
            throw new Error('Bad file!', res, {to});
            return;
        }
    } else {
        console.log('Error with download.js!', attach.stderr.toString());
        throw new Error('Error. Please, call support.');
    }

    let r = request(options, (err, response, reslut) => {
        if(!err && (response.statusCode == 200 || response.statusCode == 201)) 
            defered.resolve(reslut);
        else 
            defered.reject(err || reslut);

        fs.unlink(fn, () => {});
    });

    let form = r.form();
    form.append('image', fs.createReadStream(fn), {filename: `rapidapi-${Math.random(16).toString(5).substring(2, 11)}.png`});

    return defered.promise;
}