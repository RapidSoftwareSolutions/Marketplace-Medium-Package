module.exports.do = function(req, res){
res.status(200).send({
  "package": "Medium",
  "tagline": "Medium API Package",
  "keywords": ["API", "marketing", "post", "posting", "publication", "social", "writing"],
  "description": "Read, write, and interact with the stories that matter most to you.",
  "image": "https://cdn-images-1.medium.com/max/400/1*QnlI8nTg-t9G3pLrxbX9-w.png",
  "repo": "https://github.com/RapidSoftwareSolutions/",
  "accounts": {
    "domain": "medium.com",
    "credentials": [
      "accessToken"
    ]
  },
  "blocks": [
    {
      "name": "getAccessToken",
      "description": "In order to publish on behalf of a Medium account, you will need an access token. An access token grants limited access to a user’s account. We offer two ways to acquire an access token: browser-based OAuth authentication, and self-issued access tokens.",
      "args": [
        {
          "name": "code",
          "type": "String",
          "info": " The authorization code you received in the previous step.",
          "required": true
        },
        {
          "name": "clientId",
          "type": "String",
          "info": " Your integration’s clientId",
          "required": true
        },
        {
          "name": "clientSecret",
          "type": "String",
          "info": " Your integration’s clientSecret",
          "required": true
        },
        {
          "name": "redirectUri",
          "type": "String",
          "info": " The same redirect_uri you specified when requesting an authorization code.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "revokeAccessToken",
      "description": "Each access token is valid for 60 days. When an access token expires, you may request a new token using the refresh token. Refresh tokens do not expire. Both access tokens and refresh tokens may be revoked by the user at any time. You must treat both access tokens and refresh tokens like passwords and store them securely.",
      "args": [
        {
          "name": "refreshToken",
          "type": "String",
          "info": " The authorization code you received in the previous step.",
          "required": true
        },
        {
          "name": "clientId",
          "type": "String",
          "info": " Your integration’s clientId",
          "required": true
        },
        {
          "name": "clientSecret",
          "type": "String",
          "info": " Your integration’s clientSecret",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getUser",
      "description": "Returns details of the user who has granted permission to the application.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": " A valid accessToken.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getPublicationContributors",
      "description": "Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": " A valid accessToken.",
          "required": true
        },
        {
          "name": "publicationId",
          "type": "String",
          "info": " A valid publication id.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createPost",
      "description": "Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": " A valid accessToken.",
          "required": true
        },
        {
          "name": "authorId",
          "type": "String",
          "info": " A valid authorId.",
          "required": true
        },
        {
          "name": "title",
          "type": "String",
          "info": " The title of the post. Note that this title is used for SEO and when rendering the post as a listing, but will not appear in the actual post—for that, the title must be specified in the content field as well. Titles longer than 100 characters will be ignored. In that case, a title will besynthesized from the first content in the post when it is published..",
          "required": true
        },
        {
          "name": "contentFormat",
          "type": "String",
          "info": " The format of the \"content\" field. There are two values, \"html\", and \"markdown\".",
          "required": true
        },
        {
          "name": "content",
          "type": "String",
          "info": " The body of the post, in a valid, semantic, HTMLfragment, or Markdown. Further markups may be supported in the future. For a full list of accepted HTML tags, see here. If you want your title to appear on the post page, you must also include it as part of the post content.",
          "required": true
        },
        {
          "name": "tags",
          "type": "String",
          "info": "Optional: Tags to classify the post. Only the first three will be used. Tags longer than 25 characters will be ignored.",
          "required": false
        },
        {
          "name": "canonicalUrl",
          "type": "String",
          "info": "Optional: The original home of this content, if it was originally published elsewhere.",
          "required": false
        },
        {
          "name": "publishStatus",
          "type": "String",
          "info": "Optional: The status of the post. Valid values are “public”, “draft”, or “unlisted”. The default is “public”.",
          "required": false
        },
        {
          "name": "license",
          "type": "String",
          "info": "Optional: The license of the post. Valid values are “all-rights-reserved”, “cc-40-by”, “cc-40-by-sa”, “cc-40-by-nd”, “cc-40-by-nc”, “cc-40-by-nc-nd”, “cc-40-by-nc-sa”, “cc-40-zero”, “public-domain”. The default is “all-rights-reserved”.",
          "required": false
        },
        {
          "name": "notifyFollowers",
          "type": "String",
          "info": "Optional: Whether to notifyFollowers that the user has published.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createPostUnderPublication",
      "description": "This API allows creating a post and associating it with a publication on Medium. The request also shows this association, considering posts a collection of resources under a publication",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": " A valid accessToken.",
          "required": true
        },
        {
          "name": "publicationId",
          "type": "String",
          "info": " A valid publicationId.",
          "required": true
        },
        {
          "name": "title",
          "type": "String",
          "info": " The title of the post. Note that this title is used for SEO and when rendering the post as a listing, but will not appear in the actual post—for that, the title must be specified in the content field as well. Titles longer than 100 characters will be ignored. In that case, a title will besynthesized from the first content in the post when it is published..",
          "required": true
        },
        {
          "name": "contentFormat",
          "type": "String",
          "info": " The format of the \"content\" field. There are two values, \"html\", and \"markdown\".",
          "required": true
        },
        {
          "name": "content",
          "type": "String",
          "info": " The body of the post, in a valid, semantic, HTMLfragment, or Markdown. Further markups may be supported in the future. For a full list of accepted HTML tags, see here. If you want your title to appear on the post page, you must also include it as part of the post content.",
          "required": true
        },
        {
          "name": "tags",
          "type": "String",
          "info": "Optional: Tags to classify the post. Only the first three will be used. Tags longer than 25 characters will be ignored.",
          "required": false
        },
        {
          "name": "canonicalUrl",
          "type": "String",
          "info": "Optional: The original home of this content, if it was originally published elsewhere.",
          "required": false
        },
        {
          "name": "publishStatus",
          "type": "String",
          "info": "Optional: The status of the post. Valid values are “public”, “draft”, or “unlisted”. The default is “public”.",
          "required": false
        },
        {
          "name": "license",
          "type": "String",
          "info": "Optional: The license of the post. Valid values are “all-rights-reserved”, “cc-40-by”, “cc-40-by-sa”, “cc-40-by-nd”, “cc-40-by-nc”, “cc-40-by-nc-nd”, “cc-40-by-nc-sa”, “cc-40-zero”, “public-domain”. The default is “all-rights-reserved”.",
          "required": false
        },
        {
          "name": "notifyFollowers",
          "type": "String",
          "info": "Optional: Whether to notifyFollowers that the user has published.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "uploadImage",
      "description": "Most integrations will not need to use this resource. Medium will automatically side-load any images specified by the src attribute on an <img> tag in post content when creating a post. However, if you are building a desktop integration and have local image files that you wish to send, you may use the images endpoint.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": " A valid accessToken.",
          "required": true
        },
        {
          "name": "image",
          "type": "File",
          "info": "Image to upload.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    }
  ]
})
};
