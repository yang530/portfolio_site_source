
const express = require("express");
const httpReq = require("request");
const path = require("path");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(path.join(__dirname, "/build")));

app.listen(PORT, ()=>{
    console.log(`Server listening port ${PORT}`);
});

app.get("/", function (req,res) {
    res.sendFile(path.join(__dirname, "/build", "/index.html"));
});

app.get("/getWeather/:lat/:lon", (req, res)=>{

    console.log(`received coordinate is: latitude: ${req.params.lat}, longitude: ${req.params.lon}`);
    
    let reqURL = `https://api.open-meteo.com/v1/forecast?latitude=${req.params.lat}&longitude=${req.params.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`
    
    httpReq(reqURL, (error, response, body)=>{
        //if there is error, bounce error back to front end;
        if(error){
            res.send(error);
        }
        
        res.send(body);
    });

});

