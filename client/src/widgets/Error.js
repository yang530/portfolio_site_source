import MyButton from "./MyButton.js";
import { openURL } from "../jslib/openURL";
import "./Error.css";

function Error(){

    return(
        <div id="error_div">
            <h1>Stay Tuned, </h1>
            <h2>good thing is coming soon.🌞🌞🌞</h2>
            <MyButton url="/" idName="takemeback" marginX="mx-5" marginY="my-5" bText="🔨Take Me Back" />
        </div>
    );

}

export default Error;