//Configuration variables 
//dotenv to protect the api key
const dotenv = require('dotenv');
dotenv.config();
let projectData = {}
let articleUrl = ''
var path = require('path')

//Setup the api url and it's key and parameters
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const API_KEY = 2177cf475d7808496c81ce1c84a3fe47

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//create an instance for the server app
const app = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const cors = require('cors')

//setup the application api
app.use(cors());
app.use(bodyParser.json());
//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/analyze', async (req , res) => {
articleUrl = req.body.url;
console.log("articleUrl" , articleUrl)
const meaningcloudUrl = `${baseUrl}?key=${API_KEY}&lang=en&mode=general&url=${articleUrl}`;
console.log("meaningcloudapi" ,meaningcloudUrl)
const response = await fetch(meaningcloudUrl);

try {
const apiData = await response.json();
projectData = {
    score_tag : apiData.score_tag,
    subjectivity: apiData.subjectivity,
    confidence: apiData.confidence,
    agreement: apiData.agreement,
    irony: apiData.irony
},
console.log(projectData)
res.send(projectData)

} catch(error) {
console.log(error.message)
}
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


//console.log(`Your API key is ${process.env.API_KEY}`);

module.exports = {
    app,
}
