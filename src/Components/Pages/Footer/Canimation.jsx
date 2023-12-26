import Lottie from "lottie-react";
import animationData from '../../../assets/images/Animation - 1703584203090.json';

const Canimation = () => {
    return (
        <div>
            <div className="p-10">
                <Lottie className="h-[200px]" animationData={animationData} loop={true} />
            </div>
        </div>
    );
};

export default Canimation;