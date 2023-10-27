import { Tooltip } from "react-tooltip"
import addItemIcon from "../res/addItem.png"

export default function CreateItemCard({title,btnClick,tooltipClass,tooltipMsg}){
    return(
        <div className="m-1 p-2 justify-center items-center flex border-b-2 border-black flex-1 flex-row">
        <h3 className="text-xl flex-1">{title}</h3>
        <img
        className={`w-5 h-5 hover:bg-green-200 rounded-full ${tooltipClass}`}
        src={addItemIcon}
        />
        <Tooltip anchorSelect={`.${tooltipClass}`}
        place={"top"}
        >
            {tooltipMsg}
        </Tooltip>
        </div>
    )
    }
