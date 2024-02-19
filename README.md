# my-movies

Movie search application created via OMDb API. Deployed with Heroku.

website link: <a href="https://my-movies-headdawnlight.herokuapp.com" target="_blank">https://my-movies-headdawnlight.herokuapp.com</a>

### Update note dated 19.02.2024

The app was inactive for a long time because Heroku ended its free deploy support. The app was deployed via Render.com, another free deploy service.

## [click live link](https://render-my-movies.onrender.com/)

## Introduction

You can search for any movie whose full name you know with this app. For now, you can only see their posters (except those that do not have a poster in the database).
This version has search bar and poster display. Movie list creation, update and deletion features will be added in the next version. In addition, movie information will be detailed.

![2022-09-20_15-56-30](https://user-images.githubusercontent.com/82842186/191263914-923e2cdd-d250-439f-bd47-318f377e5023.png)
![2022-09-20_15-56-56](https://user-images.githubusercontent.com/82842186/191263958-5eff880f-3db8-4aa0-b414-656087f68dd7.png)

### Technology and tools I used while developing this program:

- Microsoft Visual Studio Code

- HTML, CSS, JavaScript

- React.js
  - React.js is a JavaScript library for creating user interfaces.
  - React hooks and context api are used in this project.
- Node.js

  - Node.js (Node) is an open source development platform for executing JavaScript code server-side.

- Express.js

  - Fast, unopinionated, minimalist web framework for node.
  - The application uses a Rest API built via express.js as a server.

- Axios
  - Promise based HTTP client for the browser and node.js
  - AbortController used to cancel axios requests.
  - Debounce time adjusted for axios requests.
- Mocha
  - Simple, flexible, fun JavaScript test framework for Node.js & The Browser
- Chai
  - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- Nock
  - HTTP server mocking and expectations library for Node.js
- Redis
  - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.
  - node-redis is a modern, high performance Redis client for Node.js.
  - In this project, the data fetching speed was increased at least 10 times thanks to redis.
- DotEnv
  - DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.
  - In this project, OMDb api key and heroku redis url are stored with .env variables.
- Git
  - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
- GitHub
  - GitHub is an internet hosting service for software development and version control using Git.
- Docker
  - Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
  - Docker is a software framework for building, running, and managing containers on servers and the cloud.
  - This project is dockerized on local but heroku dockerize is not yet complete.
- Heroku
  - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
  - This project was deployed using heroku redis server.

## Installation

### Update note dated 19.02.2024

The project file structure has been updated for the new deploy service. Installation has been simplified, but dockerization has been suspended for now.

##

### New Folder Structure Installation For Render Deployment

**1. Clone the repository**

```sh
$ git clone https://github.com/headdawnLight/my-movies.git
```

**2. Change directory and install npm packages to get the server and the client up**

it is necessary to create a .env file in the server folder and set the omdb api key and redis url environment variables.

```sh
$ cd my-movies
$ echo -e "OMDB_API_KEY='API_KEY'\nREDIS_URL='URL'" > .env
$ npm install
$ npm run build
$ npm start
```

After the process is completed, server will be listened to and client will be up to at localhost:5000

##

### Old Folder Structure Installation For Heroku Deployment

**1. Clone the repository**

```sh
$ git clone https://github.com/headdawnLight/my-movies.git
```

**2. Change directory and install npm packages to get the server up**

it is necessary to create a .env file in the server folder and set the omdb api key and redis url environment variables.

```sh
$ cd server
$ echo -e "OMDB_API_KEY='API_KEY'\nREDIS_URL='URL'" > .env
$ npm install
$ node server.js
```

After the process is completed, server will be listened to at localhost:5000

**3. Change directory and install npm packages to get the client up**

```sh
$ cd ..
$ cd client
$ npm install
$ npm start
```

After the process is completed, client will be up to at localhost:3000

**4. Dockerize the app**

To dockerize the application, change "proxy": "http://localhost:5000" to "proxy": "http://server:5000" in the client/package.json file.

```sh
$ docker compose up --build
```

## License

MIT License

Copyright (c) 2022 Sertan Işık

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
