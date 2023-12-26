import { TiMessages } from "react-icons/ti";
import './Contact.css'
import Canimation from "../Footer/Canimation";

const Contact = () => {
    return (
        <div className="p-10">
            <div>
                <h1 className='flex items-center gap-3 text-3xl '><span><TiMessages /></span> Contact Us</h1>
                <p className="ml-10 mt-5">Contact us for more information and get notified when i publish somethig new.</p>
            </div>

            <div className="flex justify-center items-center">
                <form className="p-10 flex-grow space-y-10 mt-10">
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="" id="message" ></textarea>
                    </div>

                    <button className="submitt  ">Submit</button>
                </form>

                <div className="bg-gray-900 shadow shadow-gray-700 hidden md:block flex-grow p-10">
                    <Canimation></Canimation>
                </div>

            </div>

        </div>
    );
};

export default Contact;