import {AjaxClient} from "../jslib/AjaxClient.js";
import { openURL } from "../jslib/openURL";
import getWEmo from "../jslib/getWEmo.js";

const client = new AjaxClient();

//function to generate a navbar
function Navbar(props) {

    client.ajaxGet("https://ipapi.co/json/", updateWeather);

    return (
      <div id="myNav" className="navbar fixed-top d-flex flex-row justify-content-end">
        <div className="container position-absolute start-0"><p id="wInfo">🌧️Weather Info Goes Here☀️</p></div>
        
        <button onClick={()=>{
          openURL("https://yang530.github.io/ChasingTheSun/");
        }} className="btn btn-outline-light my-1 mx-1"><ion-icon src={require("../assets/icons/happy_face.svg")}></ion-icon>🙃FUN</button>

        <button onClick={s2top} className="btn btn-outline-light my-1 mx-1"><ion-icon src={require("../assets/icons/arrow_up.svg")}></ion-icon>⬆TOP</button>
      </div>
    );
    
    //function to update the weather display on top left
    function updateWeather(geoLoc){

      let objGeo = JSON.parse(geoLoc);
      
      let strURL = `https://yangwebdev.herokuapp.com/getWeather/${objGeo.latitude}/${objGeo.longitude}`;

      client.ajaxGet(strURL, (weatherStr)=>{

        console.log(weatherStr);
        
        let objWeather = JSON.parse(weatherStr);
        let wEmo = getWEmo(objWeather.current_weather.weathercode);
        let tempNow = objWeather.current_weather.temperature;
        let tempUnit = objWeather.daily_units.temperature_2m_max;
        let finalStr = `${objGeo.city} ${wEmo} ${tempNow}${tempUnit}`;
        document.getElementById("wInfo").innerText = finalStr;

      })
    
    }
}

//scroll to top of the page
function s2top(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

export default Navbar;