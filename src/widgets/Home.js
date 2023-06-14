import {useEffect, useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "./Navbar.js";
import "./Navbar.css";
import Title from "./Title.js";
import "./Title.css";
import AboutMe from "./AboutMe.js";
import "./AboutMe.css";
import PrjCard from "./PrjCard.js";
import "./PrjCard.css";
import Contact from "./Contact.js";
import "./MyButton.css";
import Popup from "./Popup.js";
import "./Popup.css";
import Footer from "./Footer.js";
import {AjaxClient} from "../jslib/AjaxClient.js";

function Home() {

  const [feat_prj, setFeatPrj] = useState(null);
  const [yang_info, setYangInfo] = useState(null);

  useEffect(()=>{
    //load feature object
    loadJsonFile("local_data/feat_prj.json", setFeatPrj);
    //load Yang's info
    loadJsonFile("local_data/yang_info.json", setYangInfo);
  }, []);

  return (
    <div>
      <Navbar />
      <Title/>
      <AboutMe inputData={yang_info}/>
      <PrjCard inputData={feat_prj} />
      <Contact/>
      <Footer/>
    </div>
  );
  
  //function to load content of a JSON file, and put json file in a REACT state variable
  //need a url in string
  //and a function for callback, set 
  function loadJsonFile(url, setData){
  
    let client = new AjaxClient();
    client.ajaxGet(url, (data)=>{
      // console.log("--------raw data-------");
      // console.log(data);
      let objData = JSON.parse(data);
      // console.log("--------data loaded-------");
      // console.log(objData);
      setData(objData);
    });
  
  }

}


export default Home;