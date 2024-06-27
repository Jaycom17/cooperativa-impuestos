import { FaCircleInfo } from "react-icons/fa6";

const InfoBubble = ({info, colorMode}) => {
    const color = colorMode === 'light' ? "text-primary hover:text-unicoop-slate-blue bg-transparent": "text-unicoop hover:text-slate-300 bg-primary";

    return(
        <FaCircleInfo className={`size-5 rounded-full duration-150 ${color}`}/>
    );
};

export default InfoBubble