import {router, usePage} from "@inertiajs/react";
import {usePopupContext} from "@/Components/Helpers/PopupContext.jsx";
import MyButton from "@/Components/Common/MyButton.jsx";
import {useState} from "react";
import MyTooltip from "@/Components/Common/Tooltip.jsx";

export default function CreateLessonForm(){
    const currentURL = usePage().url
    const [lesson,setLesson]=useState({
        name:"",
    });

    const {showPopup} = usePopupContext()

    function handleInput(e){
        setLesson({...lesson,[e.target.name]:e.target.value})
    }
    async function submitHandler(currentUrl){
        router.post(currentUrl+"/createLesson",lesson,{
            onSuccess:(page)=>{
                showPopup("success","Напрямок успішно створено")
                setLesson({...lesson,name: ""})
            },
            onError:(errors)=>{
                console.log(errors)
                setLesson({...lesson,name: ""})
                showPopup("error",`Помилка збереження уроку: ${errors.name}`)
            }
        })
    }
    return (
        <div className="flex flex-col w-screen">
            <div className="flex items-center justify-center">
            <h2 className="text-2xl">Створіть урок</h2>
            <MyTooltip
                id={"lessonExplain"}
                tooltip={"Урок-контейнер для створення записів по конкретним темам. 'Margin CSS',тощо"}
            />
            </div>
            <div className="flex justify-around items-center">
            <MyButton
                name={"Створити урок"}
                design={"default"}
                onClick={()=>submitHandler(currentURL)}
            />
            <input
                name="name"
                value={lesson.name}
                onChange={(e)=>handleInput(e)}
                type={"text"}
            />
            </div>
        </div>
    )
}
