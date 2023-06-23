import { openURL } from "../jslib/openURL";
import SlideShow from "./SlideShow.js";

//some default values for contents
let disContents = {
    title: "Featured Project",
    prjName: "Project Name",
    imgFolderPath: "",
    runItNow: "/Error",
    githubLink: "/Error",
    description: [
        "This is paragraph ONE.",
        "\n",
        "This is paragraph TWO."
    ]
}

//props.contents needs to be a parsed JSON object {data1: "something", data2: "something"}
function PrjCard(props){

    loadContents();

    let runButton = null;

    if(disContents.runItNow != ""){
        runButton = <button onClick={()=>{window.location.assign(disContents.runItNow)}} className="btn btn-lg my-1 mx-1">▶️ Run it Now</button>;
    }

    return(
        <div id="pContent_div" className="d-flex flex-column justify-content-center">
            <div id="project_title">
                <h1>{disContents.title}</h1>
            </div>
            <br></br>
            <h1 id="project_Name" style={{color: "aliceblue"}}>{disContents.prjName}</h1>
            <br></br>
            <br></br>
            <SlideShow imgFolder={disContents.imgFolderPath} imgNum={parseInt(disContents.imgNum)} />
            <br></br>
            <div className="position-relative end-0 d-flex flex-row justify-content-center align-items-center">
                {runButton}
                <button onClick={()=>{openURL(disContents.githubLink)}} className="btn btn-lg my-1 mx-1 d-flex flex-row justify-content-evenly">
                    <img className="mx-1" src={require("../assets/icons/github.svg").default} alt="" />
                    Download from Github
                </button>
                <button onClick={()=>openURL("/#/myWorks")} className="btn btn-lg my-1 mx-1">💬 More of My Works...</button>
            </div>
            <br></br>
            <div className="paragraphs">{disContents.description}</div>
        </div>
    );

    function loadContents(){

        if(props.inputData != null){

            disContents = props.inputData;

        }

    }

}

export default PrjCard;