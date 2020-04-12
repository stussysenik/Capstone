// // Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Require Express to run server and routes
// const express = require('express');
// // Start up an instance of app
// const app = express();
// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance
// const cors = require('cors');
// app.use(cors());

// // Initialize the main project folder
// app.use(express.static('website'));

// // Setup Server
// const port = 8080;
// const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) });

// //GET route that returns an object of projectData
// app.get('/all', (req, res) => {
//     res.send(projectData);
// });

// // POST route
// app.post('/add', (req, res) => {
//     projectData['date'] = req.body.date;
//     projectData['temp'] = req.body.temp;
//     projectData['userResponse'] = req.body.userResponse;
//     res.send('POST received');
// });

// //POST route that adds incoming data into the object projectData
// app.post('/content', (req, res) => {
//     projectData['date'] = req.body.date;
//     projectData['temp'] = req.body.temp;
//     projectData['userResponse'] = req.body.userResponse;
//     res.send(projectData);
// });

var path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})