import {router, usePage} from "@inertiajs/react";
import deleteIcon from "./res/deleteIcon.png"
import {Tooltip} from "react-tooltip";
import {usePopupContext} from "@/Components/Helpers/PopupContext.jsx";


export default function LessonsDisplay(){
    //об'єкт з уроками обраного напрямку
    let lessons = usePage().props.lessons;
    console.log(lessons)
    return(
        <div className="container overflow-y-auto">
            {lessons?.map((lesson,index)=><Lesson key={index} data={lesson}/>)}
            <Tooltip anchorSelect={`.tooltip`}
                     place={"top"}
            >
                Видалити урок
            </Tooltip>
        </div>
    )
}

function Lesson({data}){
    const currentURL = usePage().url
    const {showPopup} = usePopupContext()
    function deleteLesson(lessonId,showPopup){
        router.delete(currentURL+`/deleteLesson/${lessonId}`, {
            onError:(err)=>{
                showPopup("error",`Помилка при видаленні`)
            },
            onSuccess:()=>{
                showPopup("success",`Урок успішно видалено`)
            }
        })
    }

    return(
        <div className="flex justify-between m-1 p-1 pr-5 pl-5 bg-gray-200">
            <p className="w-4/5 hover:cursor-pointer">{data.name}</p>
            <p className="w-1/5">{new Date(data.created_at).toLocaleDateString()}</p>
            <p><img
                className="hover:cursor-pointer hover:bg-red-500 tooltip"
                src={deleteIcon}
                onClick={()=>{deleteLesson(data.id,showPopup)}}
            /></p>
        </div>
    )
}
