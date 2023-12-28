import { TiMessages } from "react-icons/ti";
import './Contact.css'
import Canimation from "../Footer/Canimation";
import { useForm, ValidationError } from '@formspree/react';
import { FaThumbsUp } from "react-icons/fa";


const Contact = () => {

    const [state, handleSubmit] = useForm("mzbnpnov");
    if (state.succeeded) {
        return <h1 className="text-center flex justify-center items-end text-accent text-2xl">Your message has been sent successfully <FaThumbsUp className="text-5xl text-yellow-400 ml-2" /></h1>;
    }

    return (
        <div className="p-10">
            <div>
                <h1 className='flex items-center gap-3 text-3xl '><span><TiMessages /></span> Contact Us</h1>
                <p className="ml-10 mt-5">Contact us for more information and get notified when I publish something new.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center">
                <form onSubmit={handleSubmit} className="p-10 flex-grow md:w-1/2 space-y-10 mt-10 md:mr-5">
                    <div className="flex flex-col space-y-2 ">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" className="w-full" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="" id="message" name="message" className="w-full"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className="submitt">Submit</button>
                </form>

                <div className="bg-gray-1000 shadow shadow-gray-600 hidden md:block flex-grow p-10 md:w-1/2">
                    <Canimation></Canimation>
                </div>
            </div>
        </div>
    );
};

export default Contact;
