import {useEffect, useState} from 'react';
import NavBar from "./Navbar.js";
import "./Navbar.css";
import Footer from "./Footer.js";
import "./MyWorks.css";
import Popup from "./Popup.js";
import "./Popup.css";
import PrjCard from "./PrjCard.js";
import "./PrjCard.css";
import { AjaxClient } from "../jslib/AjaxClient.js";

const client = new AjaxClient();

function MyWorks(){

    const [popup_state, setPopupState] = useState(false);
    const [popup_cont, setPopupCont] = useState(null);

    //just some placeholder
    let table=[
        {
            "title": "Featured Project",
            "prjName": "Test Featured Project",
            "imgFolderPath": "local_imgs/sliderTest/",
            "imgNum": "3",
            "runItNow": "/Error",
            "githubLink": "/Error",
            "description": [
                "This is paragraph ONE.",
                "\n\n",
                "This is paragraph TWO."
            ]
        },
        {
            "title": "Project",
            "prjName": "Project 1",
            "imgFolderPath": "local_imgs/sliderTest/",
            "imgNum": "3",
            "runItNow": "/Error",
            "githubLink": "/Error",
            "description": [
                "This is paragraph ONE.",
                "\n\n",
                "This is paragraph TWO."
            ]
        },
        {
            "title": "Project",
            "prjName": "Project 1",
            "imgFolderPath": "local_imgs/sliderTest/",
            "imgNum": "3",
            "runItNow": "/Error",
            "githubLink": "/Error",
            "description": [
                "This is paragraph ONE.",
                "\n\n",
                "This is paragraph TWO."
            ]
        }
    ];

    //load table from mySQL
    client.ajaxGet("local_data/prjs_list.json", loadTable);

    return(
        <div id="myWorks_div" className="d-flex flex-column justify-content-center align-items-center">
            <NavBar />
            <Popup pState={popup_state} setPState={setPopupState}>
                <PrjCard inputData={popup_cont}/>
            </Popup>
            <br></br>
            <br></br>
            <br></br>
            <h1>My Works</h1>
            <table id="tItems" className="w-75">
                
            </table>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );

    //function to load table of projects form SQL
    function loadTable(response){
        
        table = JSON.parse(response);
        console.log("table updated:", table);
        console.log("table[0]: ", table[0]);
        updatePage();

    }

    //update the page with current table
    function updatePage(){

        let tItems = document.getElementById("tItems");
        let strHTML = `<tr class="tableRow">
                            <th>Project Num</th>
                            <th>Project Name</th>
                            <th>Direct Link</th>
                            <th>Github Link</th>
                            <th>Button</th>
                       </tr>`;
    
        //prepare elements for rendering
        let loopEnd = table.length;
        for(let i=0; i<loopEnd; i++){
            
            strHTML += `<tr id="prj${i}" class="tableRow">
                            <th>${i}</th>
                            <th id="name${i}">${table[i].prjName}</th>
                            <th><a id="path${i}" href="${table[i].runItNow}">${table[i].runItNow}</a></th>
                            <th><a id="github${i}" href="${table[i].githubLink}">${table[i].githubLink}</a></th>
                            <th><button id="dets${i}" class="btn btn-outline-light my-1">💬DETAILS</button></th>
                        </tr>`;
    
        }
        tItems.innerHTML = strHTML;

        //attach events to buttons
        for(let i=0; i<loopEnd; i++){

            //find the button on the document
            let button = document.getElementById(`dets${i}`);
            button.addEventListener("click", (event)=>{
                //what to do when clicked
                //update popup contents
                setPopupCont(table[i]);
                //show popup
                setPopupState(true);
            });

        }

    }

}



export default MyWorks;
