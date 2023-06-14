import React from "react";

//This is a popup window component
//required props:
//pState: must be a state variable of boolean such as: const [popup_state, setPopupState] = useState(false);
//setPState: must be a set state function for pState, so that the "X" button may close the popup
//props.children: contents enclosed between <Popup></Popup> will be displayed inside popup window
function Popup(props){

    if(props.pState == true){
        //if pState is true, renders the popup window
        return(
            <div id="popup" className="">
                <div id="popup_content">
                    <div id="popup_bar" className="">
                        <button id="close_button" className="" onClick={()=>{props.setPState(false)}}>X</button>
                    </div>
                    <div id="pop_body" className="">
                        {props.children}
                    </div>
                </div>
            </div>
        );

    }else{

        //if pState is false, render nothing
        //add action for popup close state here...

    }

}

export default Popup;