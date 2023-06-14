const masterStyles = {
    color: "aliceblue",
    marginTop: "10%",
    marginBottom: "10%",
}

const imgStyles = {
    height: "80vh",
    margin: "2%",
    border: "1px solid white",
    borderRadius: "10px"
}

const infoStyles = {
    height: "80vh",
    padding: "2%",
    margin: "2%",
}

const buttonStyles = {
    width: "80%",
    padding: "5%",
    backgroundColor: "rgb(220, 180, 0)",
    textAlign: "center",
    color: "black",
    fontWeight: "500",
}

function Contact(){

    return(
        <div style={masterStyles} className="d-flex flex-column justify-content-center align-self-center">
            <div className="d-flex flex-row justify-content-center">
                <img className="mx-1" style={imgStyles} src={require("../assets/contactMe.jpg")}></img>
                <div className="d-flex flex-column justify-content-evenly align-items-center" id="contact_div" style={infoStyles}>
                    <h1>Contact Yang</h1>
                    <br></br>
                    <button className="btn btn-lg my-5 mx-5" style={buttonStyles} onClick={()=>{window.open("mailto:yjdeng13@yahoo.com");}}>📧Email Yang</button>
                    <button className="btn btn-lg my-5 mx-5" style={buttonStyles} onClick={()=>{window.open("https://www.linkedin.com/in/yangjia-deng-9b488656/");}}>
                        <img className="mx-1" src={require("../assets/icons/linkedin.svg").default} alt="" />
                        Linkedin Profile
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Contact;