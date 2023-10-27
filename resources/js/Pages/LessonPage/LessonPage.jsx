import CreateItemCard from "@/Components/LessonPage/CreateItemCard";
import CreateTextNoteModal from "@/Components/LessonPage/CreateTextNoteModal";
import MainLayout from "@/Layouts/MainLayout.jsx";
import { usePage } from "@inertiajs/react";

export default function BranchPage(){

    const currentLesson = usePage().props.currentLesson
    return(
        <MainLayout>
        <div className="container text-3xl">
        <h2 className="text-center text-2xl">Урок {currentLesson.name}</h2>
        <div className="flex flex-row text-center text-lg">
            <CreateItemCard
            title={"text"}
            tooltipClass={"textTT"}
            tooltipMsg={"Створити нову текстову нотатку"}
            />
            <CreateItemCard
            title={"code"}
            tooltipClass={"codeTT"}
            tooltipMsg={"Створити нову нотатку коду"}
            />
            <CreateItemCard
            title={"image"}
            tooltipClass={"imgTT"}
            tooltipMsg={"Створити нову нотатку-картинку"}
            />
            <CreateItemCard
            title={"You-tube"}
            tooltipClass={"ytYY"}
            tooltipMsg={"Створити нове посилання на ютуб-відео"}
            />
        </div>

        </div>
        <CreateTextNoteModal/>
        </MainLayout>
    )
}


