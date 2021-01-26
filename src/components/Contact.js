import React, {useState} from 'react';
import './Contact.css';
import { db } from "../API/Firebase"
;
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const[loader,setLoader]=useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true);

        db.collection('contacts')
            .add({
                name:name,
                email:email,
                message:message,
                phone:phone,
            })
            .then(()=>{
                alert('Messagae has been submitted');
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
        });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

    return (
        <div className="contact-container" onSubmit={handleSubmit}>
                   <div className="contact-items">
                   <div className="contact-item">
                        <div className="contact-wrap">
                        <div className="contact-text">
                            <h1>How can we help?</h1>
                            <br/>
                            <h4>As a family owned business</h4>
                            <h4>we listen to ensure your vision</h4> 
                            <h4>nothing is too big or too small.</h4>  
                        </div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-link"> 
                            <div className="contact-wrap">
                            <form className='contact-form'>
                                
                                <label>Name</label>
                                <input 
                                    type="contact-text" 
                                    placeholder="Jane Doe"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />

                                <label>Email</label>
                                <input 
                                    type="contact-text" 
                                    placeholder="jdoe@gmail.com"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />

                                <label>Phone</label>
                                <input 
                                    type="contact-text" 
                                    placeholder="(704) 555-1212"
                                    value={phone}
                                    onChange={(e)=>setName(e.target.value)}
                                />

                                <label>Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e)=>setMessage(e.target.value)}
                                />

                                <button 
                                    type="submit" 
                                    style={{background : loader ? "#ccc" : "#FF4500"}}
                                >Submit
                                </button>

                            </form>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
    )
}

export default Contact
