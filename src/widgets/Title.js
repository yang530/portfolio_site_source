import MyButton from "./MyButton.js";

function Title(){

    function scroll2Ele(eleID){

        let tElement = document.getElementById(eleID.toString());

        tElement.scrollIntoView({behavior: "smooth", block: "center"});

    }

    return (
        <div id="title_div" className="position-relative d-flex flex-column justify-content-center align-items-center">
            <div id="bg_layer" className="position-abosolute "></div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 id="title1" className="my-1 mx-1">YANG's</h1>
                <h2 id="title2" className="my-1 mx-1">web dev space</h2>
            </div>
            <br/>
            <br/>
            <div id="buttons_div" className="position-relative d-flex flex-row justify-content-center align-items-center">
                <button className="btn btn-lg my-5 mx-5" onClick={()=>{scroll2Ele("contact_div")}}>✉️ Contact</button>
                <button className="btn btn-lg my-5 mx-5" onClick={()=>{scroll2Ele("aboutMe_div")}}>🙋‍♂️ About Me</button>
                <button className="btn btn-lg my-5 mx-5" onClick={()=>{scroll2Ele("project_Name")}}>🖥️ My Works</button>
                {/* <MyButton idName="testButton" marginX="mx-5" marginY="my-5" iconPath="happy_face.svg" bText="🔨Test Button" /> */}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Title;