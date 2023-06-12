//a function to generate a custom golden button
//need to import myButton.css to apply additional styles of created buttons
//props:
//idName <= string of the id of the button
//marginX <= str, such as: mx-1,  horizontal margin of the button
//marginY <= str, such as: my-1, vertical margin of the button
//iconPath <= str of the parth for the icon on the button
//bText <= text string will be displayed on the button
//callBack <= what happens when button is clicked, must be a function
//

function MyButton(props){
    //console.log(props);
    const rPath = props.iconPath

    let strCN = "myButton btn btn-lg d-flex flex-row justify-content-evenly" + " " + props.marginX + " " + props.marginY;
    let path = null;
    if(props.iconPath === undefined || props.iconPath === null){
        path = "";
    }else{
        path = props.iconPath;
        //console.log(strCN);
    }

    return(
        <button onClick={()=>{window.location.assign(props.url)}} id={props.idName} className={strCN}>
            {/* <img className="mx-1" src={rPath} /> */}
            {props.bText}
        </button>
    );

}

export default MyButton;