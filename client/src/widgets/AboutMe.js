import { openURL } from "../jslib/openURL.js";

let disContents = null;

function AboutMe(props){

    loadContents();

    return(
        <div id="aboutMe_div" className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-row justify-content-evenly">
                <img id="img_headshot" className="rounded my-1 mx-1" width={200} height={200} src={require("../assets/headshot.jpg")}></img>
                <div id="basic_info" className="my-1 mx-1">
                    <div className="my-1 mx-1">
                        <h1>About Me</h1>
                        <p>Name: Yangjia (Yang) Deng</p>
                        <p>Location: {disContents.location}</p>
                    </div>
                    <div className="d-flex flex-row">
                        <button onClick={()=>{openURL(disContents.resume)}} className="btn btn-lg my-1 mx-1">📄 Resume</button>
                        <button onClick={()=>openURL(disContents.linkedin)} className="btn btn-lg my-1 mx-1 d-flex flex-row justify-content-evenly">
                            <img className="mx-1" src={require("../assets/icons/linkedin.svg").default} alt="" />
                            Linkedin
                        </button>
                        <button onClick={()=>{openURL(disContents.github)}} className="btn btn-lg my-1 mx-1 d-flex flex-row justify-content-evenly">
                            <img className="mx-1" src={require("../assets/icons/github.svg").default} alt="" />
                            Github
                        </button>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="paragraphs my-1 mx-1">
                {disContents.per_stmt}
            </div>
        </div>
    );

    function loadContents(){

        if(props.inputData != null){

            disContents = props.inputData;

        }
        else{
            //console.log("input data is null!");
            disContents = {
                location: "DEFAULT",
                email: "yjdeng13@yahoo.com",
                resume: "resume/YDeng_resume.html",
                linkedin: "https://www.linkedin.com/in/yangjia-deng-9b488656/",
                github: "/Error",
                per_stmt: [
                    "This is paragraph ONE.",
                    "\n",
                    "This is paragraph TWO."
                ]
            };
        }

    }

}

export default AboutMe;