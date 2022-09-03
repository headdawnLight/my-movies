# my-movies

Movie search application created via OMDb API. Deployed with Heroku.

website link: <a href="https://my-movies-headdawnlight.herokuapp.com" target="_blank">https://my-movies-headdawnlight.herokuapp.com</a>

## Introduction
With this app you can search for any movie whose full name you know. For now, you can only see their posters (except those that do not have a poster in the database).
This version has search bar and poster display. Movie list creation, update and deletion features will be added in the next version. In addition, movie information will be detailed. Frontend is built with React.js. The application uses a Rest API built via the OMDb API as a server. Rest api was created with Node.js and express.js and tested with mocha and chai. With Redis, the data fetching speed has been increased at least 10 times. Sensitive data is stored with dotenv variables. 

Technology and tools I used while developing this program:

- Microsoft Visual Studio Code
- HTML, CSS, JavaScript
- React.js
- Node.js
- Express.js
- Axios
- Mocha
- Chai
- Redis
- dotenv
- Git
- GitHub
- Heroku

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
