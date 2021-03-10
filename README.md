# Project Introduction - Evaluate News By Natural Language Processing API
This is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.
- Introduction to Natural Language Processing
NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.
- We will be using the MeaningCloud Sentiment Analysis API for this project.
# What We Can Benfit And Learn From This Project:
-Setting up Webpack
-Sass styles
-Webpack Loaders and Plugins
-Creating layouts and page design
-Service workers
-Using APIs and creating requests to external URLs.
# Setup the project : 
- CD project directory
$ npm install
- use the API_Key to activate the api
-To Run in Development mode :
$ npm run build-dev
- To Run in production mode :
$ npm run build-prod && npm start.
- Run in Test Mode : 
$ npm run test
# walkthrough : 
- Installed all the require packages .
- Modified the webpack config files to make the both invironments the dev and prod modes .
- made the env file to include the api key inside .
- made the api server to serve the app on port 8081 for production and port 8080 for development and setup fetch invironment for the get and post routes .
- redesigned the index file to match the new api and make it dynamically get the api data to update the UI of the page .
- converted the css style sheet to sass style cheet and minamize it by loaders of the webpack also made new design to the UI .
- made test functions by jest to test the functionallity of the submitHandler function and checkURL function and test it which give a result as all the function passed
* Test Suites: 2 passed, 2 total
* Tests:       4 passed, 4 total .
- made a checkurl function thanks to stackoverflow to check the valid url input by the user.
- setup the service workers to make the page avaiable offline as required . 
