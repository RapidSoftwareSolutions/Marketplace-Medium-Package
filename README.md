# Medium Package
* Domain: medium.com
* Credentials: accessToken

## How to get credentials: 
0. Login in your medium account.
1. Go to [Account Settings](#https://medium.com/me/settings)
2. Find `Integration tokens` section and press `Get integration token` botton.

If you want to provide oauth in your app, use [getAccessToken](#getAccessToken) and read more about [Medium Authentication](https://github.com/Medium/medium-api-docs#2-authentication).

## TOC: 
* [getAccessToken](#getAccessToken)
* [revokeAccessToken](#revokeAccessToken)
* [getUser](#getUser)
* [getUser](#getUser)
* [getUserPublications](#getUserPublications)
* [getPublicationContributors](#getPublicationContributors)
* [getPublicationContributors](#getPublicationContributors)
* [createPost](#createPost)
* [createPostUnderPublication](#createPostUnderPublication)
* [uploadImage](#uploadImage)
 
<a name="getAccessToken"/>
## Medium.getAccessToken
In order to publish on behalf of a Medium account, you will need an access token. An access token grants limited access to a user’s account. We offer two ways to acquire an access token: browser-based OAuth authentication, and self-issued access tokens.

| Field       | Type  | Description
|-------------|-------|----------
| code        | String| Required: The authorization code you received in the previous step.
| clientId    | String| Required: Your integration’s clientId
| clientSecret| String| Required: Your integration’s clientSecret
| redirectUri | String| Required: The same redirect_uri you specified when requesting an authorization code.

<a name="revokeAccessToken"/>
## Medium.revokeAccessToken
Each access token is valid for 60 days. When an access token expires, you may request a new token using the refresh token. Refresh tokens do not expire. Both access tokens and refresh tokens may be revoked by the user at any time. You must treat both access tokens and refresh tokens like passwords and store them securely.

| Field       | Type  | Description
|-------------|-------|----------
| refreshToken| String| Required: The authorization code you received in the previous step.
| clientId    | String| Required: Your integration’s clientId
| clientSecret| String| Required: Your integration’s clientSecret

<a name="getUser"/>
## Medium.getUser
Returns details of the user who has granted permission to the application.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: A valid accessToken.

<a name="getUser"/>
## Medium.getUser
Returns details of the user who has granted permission to the application.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: A valid accessToken.

<a name="getUserPublications"/>
## Medium.getUserPublications
Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: A valid accessToken.
| userId     | String     | Required: A valid user id.

<a name="getPublicationContributors"/>
## Medium.getPublicationContributors
Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| Required: A valid accessToken.
| publicationId| String     | Required: A valid publication id.

<a name="getPublicationContributors"/>
## Medium.getPublicationContributors
Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| Required: A valid accessToken.
| publicationId| String     | Required: A valid publication id.

<a name="createPost"/>
## Medium.createPost
Returns a full list of publications that the user is related to in some way: This includes all publications the user is subscribed to, writes to, or edits. This endpoint offers a set of data similar to what you’ll see at https://medium.com/me/publications when logged in.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: A valid accessToken.
| authorId       | String     | Required: A valid authorId.
| title          | String     | Required: The title of the post. Note that this title is used for SEO and when rendering the post as a listing, but will not appear in the actual post—for that, the title must be specified in the content field as well. Titles longer than 100 characters will be ignored. In that case, a title will besynthesized from the first content in the post when it is published..
| contentFormat  | String     | Required: The format of the "content" field. There are two values, "html", and "markdown".
| content        | String     | Required: The body of the post, in a valid, semantic, HTMLfragment, or Markdown. Further markups may be supported in the future. For a full list of accepted HTML tags, see here. If you want your title to appear on the post page, you must also include it as part of the post content.
| tags           | String     | Optional: Tags to classify the post. Only the first three will be used. Tags longer than 25 characters will be ignored.
| canonicalUrl   | String     | Optional: The original home of this content, if it was originally published elsewhere.
| publishStatus  | String     | Optional: The status of the post. Valid values are “public”, “draft”, or “unlisted”. The default is “public”.
| license        | String     | Optional: The license of the post. Valid values are “all-rights-reserved”, “cc-40-by”, “cc-40-by-sa”, “cc-40-by-nd”, “cc-40-by-nc”, “cc-40-by-nc-nd”, “cc-40-by-nc-sa”, “cc-40-zero”, “public-domain”. The default is “all-rights-reserved”.
| notifyFollowers| String     | Optional: Whether to notifyFollowers that the user has published.

<a name="createPostUnderPublication"/>
## Medium.createPostUnderPublication
This API allows creating a post and associating it with a publication on Medium. The request also shows this association, considering posts a collection of resources under a publication

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: A valid accessToken.
| publicationId  | String     | Required: A valid publicationId.
| title          | String     | Required: The title of the post. Note that this title is used for SEO and when rendering the post as a listing, but will not appear in the actual post—for that, the title must be specified in the content field as well. Titles longer than 100 characters will be ignored. In that case, a title will besynthesized from the first content in the post when it is published..
| contentFormat  | String     | Required: The format of the "content" field. There are two values, "html", and "markdown".
| content        | String     | Required: The body of the post, in a valid, semantic, HTMLfragment, or Markdown. Further markups may be supported in the future. For a full list of accepted HTML tags, see here. If you want your title to appear on the post page, you must also include it as part of the post content.
| tags           | String     | Optional: Tags to classify the post. Only the first three will be used. Tags longer than 25 characters will be ignored.
| canonicalUrl   | String     | Optional: The original home of this content, if it was originally published elsewhere.
| publishStatus  | String     | Optional: The status of the post. Valid values are “public”, “draft”, or “unlisted”. The default is “public”.
| license        | String     | Optional: The license of the post. Valid values are “all-rights-reserved”, “cc-40-by”, “cc-40-by-sa”, “cc-40-by-nd”, “cc-40-by-nc”, “cc-40-by-nc-nd”, “cc-40-by-nc-sa”, “cc-40-zero”, “public-domain”. The default is “all-rights-reserved”.
| notifyFollowers| String     | Optional: Whether to notifyFollowers that the user has published.

<a name="uploadImage"/>
## Medium.uploadImage
Most integrations will not need to use this resource. Medium will automatically side-load any images specified by the src attribute on an <img> tag in post content when creating a post. However, if you are building a desktop integration and have local image files that you wish to send, you may use the images endpoint.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: A valid accessToken.
| image      | String     | Required: Image to upload.

