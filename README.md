###Simple Express Server

The point of this simple express server is to allow front-end developers the ability to quickly serve test data via HTTP to the front-end.

Often writing mock data on the front-end can take up more time than needed. Also it is important to build your front-end with HTTP requests in mind - meaning it is better to structure your front-end with the HTTP frameworks and architecture you need right from the beginning instead of adding it later and replacing your mock data.

This simple server will allow you to create your HTTP front-end architecture without having to write any "fake" code.

###Installing & Running
To install and run simply follow these steps:

1)  Clone this repo

2)  Open your terminal and run `node server.js`

3)  Your server is now available at `http://localhost:6060/`

4)  You can run a quick test by entering this in your browser: `http://localhost:6060/animals`

5)  Build your test data right in the server.js file. Create new endpoints as needed
