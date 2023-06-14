import NavBar from "./Navbar.js";
import "./Navbar.css";
import FormPrjs from "./FormPrjs.js";
import "./MyWorks.css";
import { AjaxClient } from "../jslib/AjaxClient.js";

const client = new AjaxClient();

function MyWorks(){

    //just some placeholder
    let table=[
        {prjName: "project1", prjPath: "../path/to/file", github: "github/yangjia_deng/project1"},
        {prjName: "project2", prjPath: "../path/to/file", github: "github/yangjia_deng/project2"},
        {prjName: "project3", prjPath: "../path/to/file", github: "github/yangjia_deng/project3"},
        {prjName: "project4", prjPath: "../path/to/file", github: "github/yangjia_deng/project4"},
    ];

    //load table from mySQL
    client.ajaxGet("http://localhost:5000/getPrjs", loadTable);

    return(
        <div id="myWorks_div" className="d-flex flex-column justify-content-center align-items-center">
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <h1>My Works</h1>
            <table id="tItems" className="w-75">
                
            </table>
            <br></br>
            <br></br>
            <br></br>
            <FormPrjs />
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
                            <th>Project Name</th>
                            <th>Direct Link</th>
                            <th>Github Link</th>
                            <th>Project ID</th>
                            <th>Button</th>
                       </tr>`;
    
        //prepare elements for rendering
        let loopEnd = table.length;
        for(let i=0; i<loopEnd; i++){
            
            strHTML += `<tr id="prj${table[i].prj_ID}" class="tableRow">
                            <th id="name${table[i].prj_ID}">${table[i].prjName}</th>
                            <th><a id="path${table[i].prj_ID}" href="${table[i].prjPath}">${table[i].prjPath}</a></th>
                            <th><a id="github${table[i].prj_ID}" href="${table[i].github}">${table[i].github}</a></th>
                            <th>${table[i].prj_ID}</th>
                            <th><button id="del${table[i].prj_ID}" class="btn btn-outline-light">🗑️delete</button></th>
                        </tr>`;
    
        }
        tItems.innerHTML = strHTML;

        //attach events to buttons
        for(let i=0; i<loopEnd; i++){

            let button = document.getElementById(`del${table[i].prj_ID}`);
            button.addEventListener("click", (event)=>{
                let prjID = event.target.id.slice(3);
                let prjName = document.getElementById(`name${prjID}`).innerText;

                //fill out the form automatically
                document.getElementById("op").value = "DELETE";
                document.getElementById("prjID").value = prjID;
                document.getElementById("prjName").value = prjName;
                
                
                //scroll into view
                document.getElementById("formPrjs_div").scrollIntoView({behavior: "smooth", block: "start"});
            });

        }

    }

}



export default MyWorks;
