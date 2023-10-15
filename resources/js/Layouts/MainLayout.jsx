import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import Popup from "@/Components/Common/Popup.jsx";
import {usePage} from "@inertiajs/react";
import {usePopupContext} from "@/Components/Helpers/PopupContext.jsx";


export default function MainLayout({children}){


    const { props } = usePage();
    const  {
        isVisiblePopup,
        typePopup,
        textPopup,
    } = usePopupContext()

    return(

        <div className=" flex flex-col justify-between h-screen">
            <Header user={props.auth.user.name}/>
            <div className="flex h-4/6">
                {children}
            </div>
            <Popup text={textPopup}
                   isVisible={isVisiblePopup}
                   type={typePopup}
            />
            <Footer/>
        </div>
    )
}
