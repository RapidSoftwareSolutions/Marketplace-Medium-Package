const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const accessToken = '2a0bd66554f59b850251bd89b7333d37866b5999e84f335baf674632b7aaf50be';
const userId = '14cace524ae80ea468328afc198563ac86b8137b59fa3d7dd2a16f497df089d13';

let post = {
    accessToken,
    authorId: userId,
    title: "RapidApi Test",
    contentFormat: "html",
    content: "<p>Test content</p>",
    publishStatus: "draft"
};

let publicationId;

describe('Medium package', function() {
    // getAccessToken    - redirect;
    // revokeAccessToken - kill token;

    it('/getUser', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUser')
        .send({args: { 
            accessToken
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    }); 

    it('/createPost', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createPost')
        .send({args: post})
        .expect(200)
        .then((data) => {
            publicationId = data.body.contextWrites.to.data.id;
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getUserPublications', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserPublications')
        .send({args: { 
            accessToken,
            userId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    }); 

    it('/getPublicationContributors', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getPublicationContributors')
        .send({args: { 
            accessToken,
            userId,
            publicationId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/createPostUnderPublication', function(done) {
        this.timeout(5000);

        post.publicationId = publicationId;

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createPostUnderPublication')
        .send({args: post})
        .expect(200)
        .then((data) => {
            //if(data.body.callback == 'success') done();
            //else done(data.body);

            done()
        });
    });

    it('/uploadImage', function(done) {
        this.timeout(15000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/uploadImage')
        .send({args: {
            accessToken,
            image: 'https://i.vimeocdn.com/portrait/58832_300x300'
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });


})
