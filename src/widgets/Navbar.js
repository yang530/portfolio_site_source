import {AjaxClient} from "../jslib/AjaxClient.js";
import getWEmo from "../jslib/getWEmo.js";

const client = new AjaxClient();

//function to generate a navbar
function Navbar(props) {

    client.ajaxGet("https://ipapi.co/json/", updateWeather);

    return (
      <div id="myNav" className="navbar fixed-top d-flex flex-row justify-content-end">
        <div className="container position-absolute start-0"><p id="wInfo">🌧️Weather Info Goes Here☀️</p></div>
        
        <button onClick={()=>{
          window.location.assign("/mini_game/ChasingSun.html");
          //props.setPState(true);
        }} className="btn btn-outline-light my-1 mx-1"><ion-icon src={require("../assets/icons/happy_face.svg")}></ion-icon>🙃FUN</button>

        <button onClick={s2top} className="btn btn-outline-light my-1 mx-1"><ion-icon src={require("../assets/icons/arrow_up.svg")}></ion-icon>⬆TOP</button>
      </div>
    );
    
    //function to update the weather display on top left
    function updateWeather(geoLoc){

      let objGeo = JSON.parse(geoLoc);
      //console.log(objGeo.city);
      
      let str = `https://api.open-meteo.com/v1/forecast?latitude=${objGeo.latitude}&longitude=${objGeo.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`
    
      client.ajaxGet(str, (weather)=>{
        let objW = JSON.parse(weather);
        let wEmo = getWEmo(objW.current_weather.weathercode);
        let tempNow = objW.current_weather.temperature;
        let tempUnit = objW.daily_units.temperature_2m_max;
        //console.log(objW.current_weather.temperature);
        let finalStr = `${objGeo.city} ${wEmo} ${tempNow}${tempUnit}`;
        console.log(finalStr);
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