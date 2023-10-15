import {useState} from "react";

export default function Popup({type,text,isVisible}){

    const types = {
        "error":"bg-red-500",
        "success":"bg-green-500",
        "info":"bg-yellow-500"
    }

    return(
        <div
            className={`overflow-x-hidden fixed rounded-md p-4 text-center text-xl right-10
            bottom-20 ${types[type]} min-w-[300px] ${isVisible?"opacity-90":"opacity-0"} ${isVisible?"":"transform translate-x-[1000px]"} transition-all ease-in-out duration-1000`}>
            {text}
        </div>
    )
}

