import {useState} from "react";

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    

    function submitForm(event){

        event.preventDefault();
        //some test on console
        console.log("form submitted!");
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(content);

        //make ajax request
        let formData = {name: name, email: email, subject: subject, content: content};
        
        //make a request here
        //show error message for now
        window.location.assign("/Error");
    }

    return(
        <div id="contact_div" className="d-flex flex-column justify-content-center">
            <h1>Contact Yang</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name Please..." required
                        value={name}
                        onChange={(event)=>{setName(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="email">Email: </label>
                    <input type="email" class="form-control" id="email" placeholder="person@email.com" required
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="subject">Subject: </label>
                    <input type="text" class="form-control" id="subject" placeholder="What This Is About..." required
                        value={subject}
                        onChange={(event)=>{setSubject(event.target.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="content">Content: </label>
                    <textarea class="form-control" id="content" placeholder="Tell Me About It..." required
                        value={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light">Submit</button>
            </form>
        </div>
    );

}

export default Contact;