'use strict';
global.PACKAGE_NAME = "Medium";

global.ValidationError = function(fields) {
    this.text   = 'Please, check and fill in required fields';
    this.fields = fields || [];
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

const express       = require('express');
const request       = require('request');
const bodyParser    = require('body-parser');
const lib           = require('./lib/functions.js');
const _             = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();
const API           = lib.init();

const opn           = require('opn');

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

for(let route in API) {
    app.post(`/api/${PACKAGE_NAME}/${route}`, _(function* (req, res) {
        let r  = {
            callback     : "",
            contextWrites: {}
        };

        let to = req.body.args.to || 'to';
        let response;

        try {
            response            = yield API[route](req, res);
            r.callback          = 'success';
            r.contextWrites[to] = JSON.parse(response);
        } catch(e) {
            r.callback          = 'error';
            r.contextWrites[to] =  typeof e == 'object' ? e.message ? e.message : e : e;
        }

        res.status(200).send(r);
    }));
}

app.listen(PORT);
module.exports = app;