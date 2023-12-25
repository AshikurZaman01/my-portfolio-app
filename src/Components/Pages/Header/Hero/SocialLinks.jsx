import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div>

            <div className="flex items-center gap-5 ">
                <span><FaLinkedin className="text-xl md:text-2xl cursor-pointer" /></span>
                <span><FaGithub className="text-xl md:text-2xl cursor-pointer" /></span>
                <span><FaInstagramSquare className="text-xl md:text-2xl cursor-pointer" /></span>
                <span><FaFacebookSquare className="text-xl md:text-2xl cursor-pointer" /></span>
            </div>

        </div>
    );
};

export default SocialLinks;