import { FaArrowRightLong, FaLink } from 'react-icons/fa6';
import { SiTelegram } from "react-icons/si";
import './Main.css'

const Card = ({ project }) => {


    const { image, title, description, liveLink, githubLink, category } = project || {}

    return (
        <div className='mx-auto'>
            <div className='lg:w-[350px] card'>

                <div className='w-full h-[200px]'>
                    <img className='w-full h-full rounded' src={image} alt="" />
                </div>

                <div className='mt-5 mb-5 p-2'>
                    <h1 className='text-xl py-2'>{title}</h1>
                    <h5 className='text-sm text-gray-500'>{description}</h5>
                </div>

                <div className='flex justify-between items-center p-5'>
                    <div className='flex gap-2 text-gray-400'>
                        <a href={liveLink}><FaLink /></a>
                        <a href={githubLink}><SiTelegram /></a>
                    </div>
                    <div >
                        <a href=""><p className='flex items-center justify-center gap-2 text-blue-500 cursor-pointer' >more<FaArrowRightLong /></p></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;