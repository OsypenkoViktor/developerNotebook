import ttimg from "./res/tooltip.png"
import {Tooltip} from "react-tooltip";

export default function MyTooltip({id,tooltip,place}){
    return(
        <>
        <img id={id} src={ttimg} className="h-4 relative block cursor-help"/>
        <Tooltip anchorSelect={`#${id}`}
        place={place||"top"}
        >
            {tooltip}
        </Tooltip>
        </>
    )
}
