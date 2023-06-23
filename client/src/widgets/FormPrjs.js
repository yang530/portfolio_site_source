import {useState} from "react";
import { AjaxClient } from "../jslib/AjaxClient";

const client = new AjaxClient();

function FormPrjs(){

    const [op, setOP] = useState("");
    const [prjID, setID] = useState("");
    const [prjName, setName] = useState("");
    const [prjPath, setPath] = useState("");
    const [ghLink, setGH] = useState("");
    const [prjDescr, setDescr] = useState("");

    function submitForm(event){

        event.preventDefault();

        //make ajax request
        let formData = {
                            op: op.toUpperCase(), 
                            prjID: prjID, 
                            prjName: prjName, 
                            prjPath: prjPath,
                            github: ghLink,
                            prjDescr: prjDescr
                        };
        
        //some test on console
        console.log("form submitted!");
        console.log(formData);
        
        let url = null;

        switch(formData.op){
            case "INSERT":
                url = "http://localhost:5000/addPrj";
                break;
            case "DELETE":
                url = "http://localhost:5000/rmPrj";
                break;
            case "UPDATE":
                url = "http://localhost:5000/editPrj";
                break;
            default:
                console.log("invalid operation!!");
        }

        if(url != null){
            //make a request here
            client.ajaxPost(url, formData, (response)=>{
                console.log(response);
                window.location.reload();
            });
        }

    }

    return(
        <div id="formPrjs_div" className="d-flex flex-column justify-content-center">
            <h1>Manage Projects</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label for="op">Operation: </label>
                    <input type="text" class="form-control" id="op" placeholder="INSERT, DELETE or UPDATE" required
                        value={op}
                        onChange={(event)=>{setOP(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="prjID">Project ID: </label>
                    <input type="text" class="form-control" id="prjID" placeholder="project id, an integer"
                        value={prjID}
                        onChange={(event)=>{setID(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="prjName">Project Name: </label>
                    <input type="text" class="form-control" id="prjName" placeholder="project name goes here"
                        value={prjName}
                        onChange={(event)=>{setName(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="prjPath">Project Path: </label>
                    <input type="text" class="form-control" id="prjPath" placeholder="../path/to/file"
                        value={prjPath}
                        onChange={(event)=>{setPath(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="ghLink">Github Link: </label>
                    <input type="text" class="form-control" id="ghLink" placeholder="https//github/yourprofile/project"
                        value={ghLink}
                        onChange={(event)=>{setGH(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="prjDescr">Content: </label>
                    <textarea class="form-control" id="prjDescr" placeholder="Project Description..."
                        value={prjDescr}
                        onChange={(event)=>{setDescr(event.target.value)}}
                    ></textarea>
                </div>
                <br></br>
                <button type="submit" className="btn btn-outline-light">Submit</button>
            </form>
        </div>
    );

}

export default FormPrjs;