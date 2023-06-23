import reactLogo from "../assets/reactjs_logo.png";

const footerStyles = {
    width: "100%",
    marginLeft: "1%",
    marginRight: "1%",
    textAlign: "center",
    color: "aliceblue",
    fontWeight: "500",
    padding: "1%",
    borderTop: "1px solid white",
};

const imgStyles = {
    height: "100%",
}

function Footer(){

    return (
        <div className="d-flex flex-row justify-content-center">
            <div style={footerStyles}>
                Powered by: 
                <img style={imgStyles} className="mx-1" src={reactLogo} alt="" />
            </div>
        </div>
    );

}

export default Footer;