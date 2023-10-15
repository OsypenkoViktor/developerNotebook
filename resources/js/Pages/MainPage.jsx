import MainLayout from "@/Layouts/MainLayout.jsx";
import MainDisplay from "@/Components/MainPage/MainDisplay.jsx";
import Sidebar from "@/Components/MainPage/Sidebar.jsx";


export default function MainPage(){

    return(
        <MainLayout>
                <Sidebar/>
                <MainDisplay/>
            </MainLayout>

    )
}


