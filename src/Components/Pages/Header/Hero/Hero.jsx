import './hero.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import img from '../../../../assets/images/01_image.jpg'
import SocialLinks from './SocialLinks';
import AnimationShow from './AnimationShow';

const Hero = () => {
    return (
        <div>

            <section className='hero flex md:flex-row flex-col justify-around mt-[3rem] '>
                <div className="left-section  w-[60%]  p-10">
                    <div className='parent-avatar w-[120px] h-[120px] rounded-full flex items-end'>
                        <img className='avatar w-full h-full bg-cover rounded-full p-[2px]' src={img} alt="my image" />
                        <span className='verification '><RiVerifiedBadgeFill cl /></span>
                    </div>

                    <div className='mt-10'>
                        <h1 className='title text-2xl md:text-4xl font-bold  '>Fontend Web Developer</h1>
                        <p className='sub-title text-xl md:text-2xl mt-3 md:mt-5 text-justify font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias ab ea a iste esse laboriosam libero architecto nihil nemo, aliquid quaerat consequuntur eligendi reiciendis temporibus molestiae magni facere iure?</p>
                    </div>

                    <div className='mt-5'>
                        <SocialLinks></SocialLinks>
                    </div>

                </div>

                <div className="right-section animation hidden md:block w-[40%]">
                    <AnimationShow></AnimationShow>
                </div>
            </section>

        </div>
    );
};

export default Hero;