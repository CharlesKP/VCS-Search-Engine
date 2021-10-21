# VCS Search engine

An API based app that displays the specific user based on whether they have Github/Gitlab/Bitbucket Accounts.

## Install

Save contents do desired location. CD to project folder. In CMD type ```npm install```. After it is done you should have the node_modules folder.

## Run the server `npm start`

CD to the project folder and type ```npm start```.

CD into ```react``` folder and ```npm install``` then ```npm start``` and the react app should start.


# ---------API INFORMATION--------


## GET User Info

### Request

`GET /get-user/:name`

`http://localhost:3001/get-user/:name`



## GitHub Repos

### Request

`GET /user/github/repo/:name`

`http://localhost:3001/user/github/repo/:name`


## GitLab Repos

### Request

`GET /user/gitlab/repo/:name`

`http://localhost:3001/user/gitlab/repo/:name`


## BitBucket Repos

### Request

`GET /user/bitbucket/repo/:name`

`http://localhost:3001/user/bitbucket/repo/:name`




