import {useState} from "react";
/**
 * Хук для керування компонентом попапа.
 * @returns {object} Об'єкт зі станами та функцією виклика попапа.
 */
export function usePopup(){
    const [isVisiblePopup,setIsVisiblePopup] = useState(false)
    const [typePopup,setTypePopup] = useState("")
    const [textPopup,setTextPopup] = useState("");
    //функція для відображення попапу
    /**
     * Функція для запуску таймауту в 3с., що відображає попап.
     * @param {"error"|"success"|"info"} type - тип попапу
     * @param {string} text - текст попапу
     * @returns {null}
     */
    function showPopup(type,text){
        setTypePopup(type)
        setTextPopup(text)
        setIsVisiblePopup(true)
        setTimeout(()=>{
            setIsVisiblePopup(false)
        },3000)
    }
    return {
        isVisiblePopup,
        setIsVisiblePopup,
        typePopup,
        setTypePopup,
        textPopup,
        setTextPopup,
        showPopup
    }
}
