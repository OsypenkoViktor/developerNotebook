import { useState } from "react"


//для роботи Modal імпортуємо у батьківський компонент хук useModal
//та передаємо isVisible,changeModalState як пропси до Modal
export default function Modal({children,isVisible,changeModalState}){
    //фн. для закриття модального вікна після кліку за межами форми
    function closeModal(){
            changeModalState(!isVisible)
        }

    return(
        <div onClick={(e)=>{closeModal(e)}}
        className={`flex ${isVisible?null:"hidden"} justify-center items-center absolute top-0 bg-opacity-75 h-screen w-screen bg-black`}>
            /**відміна випливання івента кліку для роботи
            ф-кції closeModal лише при кліку за межами форми*/
            <div onClick={(e)=>{e.stopPropagation()}}>
                /**форма або інший компонент для модалки */
            {children}
            </div>
        </div>
    )
}

//хук для керування станом модального вікна
export function useModal(){
    //стейт видимості модального вікна
    const[isVisible,setIsVisible] = useState(false);
    //керування зміною видимості модального вікна
    function changeModalState(){
        setIsVisible(!isVisible)
    }
    return [isVisible,changeModalState]
}
