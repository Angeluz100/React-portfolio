import React, { useState } from "react"; 
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";



const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: {errors} } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_inncFjFZC3FGaoNrVSIaD";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }
    
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }
    return (
        <div  id="contact" className="contacts">
            <div className="text-center">
            <h1>Let's Connect</h1>
            <p>Please fill out a form and let's talk about current oportunities or software engeenier in general. Let's grow together!.</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        <input
                        text="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        autoComplete="nope"
                        {
                            ...register("name",{
                                required: "Please enter your name",
                                maxLength: {
                                    value:20,
                                    message: "Please enter a name with fewer than 20 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                        <input
                        text="text"
                        className="form-control"
                        placeholder="Phone Number" 
                        name="phone"
                        autoComplete="nope"
                        {
                            ...register("phone",{
                                required: "Please add your phone number",
                                
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                         <input
                        text="email"
                        className="form-control"
                        placeholder="Email" 
                        name="email"
                        autoComplete="off"
                        {
                            ...register("email",{
                                required: "Please provide your email",
                                pattern: {
                                    value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                                    message: "invalid Email"
                                }
                                
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">
                         <input
                        text="text"
                        className="form-control"
                        placeholder="Subject" 
                        name="subject"
                        autoComplete="nope"
                        {
                            ...register("subject",{
                                required: "OOOPPPPSSSS you forgot to add a subject",
                                
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                    <textarea
                    text="text"
                    className="form-control"
                    placeholder="Let's chat" 
                    name="description"
                    {
                        ...register("description",{
                            required: "What would you like us to get chatty about?",
                            
                        })
                    }
                    ></textarea>
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                    <button 
                    className="btn-main-offer contact-btn" 
                    type="submit">
                    Contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;