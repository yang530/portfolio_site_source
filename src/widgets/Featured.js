import { openURL } from "../jslib/openURL";
import SlideShow from "./SlideShow.js";

function Featured(){

    return(
        <div id="featured_div" className="d-flex flex-column justify-content-center">
            <div id="featured_title">
                <h1>Featured Project</h1>
            </div>
            <br></br>
            <br></br>
            <div className="d-flex flex-row justify-content-center">
                <img className="rounded my-1 mx-1" width={320} height={180} src={require("../assets/placeholder.webp")} alt=""></img>
                <img className="rounded my-1 mx-1" width={320} height={180} src={require("../assets/placeholder.webp")} alt=""></img>
                <img className="rounded my-1 mx-1" width={320} height={180} src={require("../assets/placeholder.webp")} alt=""></img>
            </div>
            <br></br>
            <SlideShow/>
            <br></br>
            <h1>Project Name</h1>
            <br></br>
            <div className="position-relative end-0 d-flex flex-row justify-content-center align-items-center">
                <button onClick={()=>{window.location.assign("/Error")}} className="btn btn-lg my-1 mx-1">▶️ Run it Now</button>
                <button onClick={()=>{window.location.assign("/Error")}} className="btn btn-lg my-1 mx-1 d-flex flex-row justify-content-evenly">
                    <img className="mx-1" src={require("../assets/icons/github.svg").default} alt="" />
                    Download from Github
                </button>
                <button onClick={()=>openURL("/myWorks")} className="btn btn-lg my-1 mx-1">💬 More of My Works...</button>
            </div>
            <br></br>
            <p>As Michael Harvey writes, paragraphs are “in essence—a form of punctuation, and like other forms of punctuation they are meant to make written material easy to read.”[1] Effective paragraphs are the fundamental units of academic writing; consequently, the thoughtful, multifaceted arguments that your professors expect depend on them. Without good paragraphs, you simply cannot clearly convey sequential points and their relationships to one another. </p>
            <p>Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here.</p>
        </div>
    );

}

export default Featured;