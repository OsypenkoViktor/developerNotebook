import MainLayout from "@/Layouts/MainLayout.jsx";
import CreateLessonForm from "@/Components/BranchPage/CreateLessonForm.jsx";
import LessonsDisplay from "@/Components/BranchPage/LessonsDisplay.jsx";

export default function BranchPage(){

    return(
        <MainLayout>
            <div className="flex flex-col items-center">
            <CreateLessonForm/>
            <LessonsDisplay/>
            </div>
        </MainLayout>

    )
}
