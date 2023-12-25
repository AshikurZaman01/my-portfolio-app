import Lottie from "lottie-react";
import animationData from '../../../../assets/images/Animation.json';

const AnimationShow = () => {
    return (
        <div className="p-10">
            <Lottie className="h-[500px]" animationData={animationData} loop={true} />
        </div>
    );
};
export default AnimationShow;
