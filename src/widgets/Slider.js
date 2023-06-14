import { useState } from "react";

//some placeholder images
const images = [
    require("../assets/sliderTest/1.jpg"),
    require("../assets/sliderTest/2.jpg"),
    require("../assets/sliderTest/3.jpg"),
]

//component style parameters
const imgStyles = {
    width: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};
  
const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "aliceblue",
    zIndex: 1,
    cursor: "pointer",
};
  
const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "aliceblue",
    zIndex: 1,
    cursor: "pointer",
};
  
const sliderStyles = {
    position: "relative",
    width: "100%",
};

const imgTextStyles = {
    position: "absolute",
    top: "95%",
    left: "50%",
    fontSize: "12px",
    color: "aliceblue",
    zIndex: 1,
    textAlign: "center",
}

function SlideShow(props){

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div style={sliderStyles}>
            <div>
                <div style={leftArrowStyles} onClick={go2Last}>❰</div>
                <div style={rightArrowStyles} onClick={go2Next}>❱</div>
            </div>
            <div style={imgTextStyles}>{currentIndex+1}/{images.length}</div>
            <img style={imgStyles} src={images[currentIndex]}></img>
        </div>
    )

    //switch to next picture
    function go2Next(){
        let nuIndex = (currentIndex + 1)%images.length;
        setCurrentIndex(nuIndex);
    }

    //switch to last picture
    function go2Last(){
        let nuIndex = (currentIndex - 1);
        if(nuIndex < 0){
            let aLen = images.length;
            nuIndex += aLen;
            nuIndex = nuIndex % aLen;
        }
        setCurrentIndex(nuIndex);
    }
    
}

export default SlideShow;