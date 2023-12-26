import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='flex md:flex-row flex-col justify-between items-center p-4'>
                <ul className='flex justify-center items-center gap-4'>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Uses</a></li>
                </ul>

                <div className='text-center md:mt-0 mt-5'>
                    <p className='text-gray-600'>Copyright © 2023 - All right reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;