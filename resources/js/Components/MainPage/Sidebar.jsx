import {Link} from "@inertiajs/react";
import userIco from "./res/user.png";
import statisticsIco from "./res/statistics.png"
import settingIco from "./res/settings.png"
export default function Sidebar(){
    //данні для створення карток сайдбару
    const options={
        user:{
            img: userIco,
            link:"/profile",
            title:"Кабінет користувача"
        },
        statistics:{
            img: statisticsIco,
            link:"/statistics",
            title: "Статистика"
        },
        settings:{
            img:settingIco,
            link:"/settings",
            title:"Налаштування"
        }
    }
    return(
        <>

        <div className="basis-1/4 p-4">
            <h1 className="text-2xl text-center border-b-2 border-black">Опції</h1>
            {Object.keys(options).map(key=>
                <SidebarOptionCard
                    key={key}
                img={options[key].img}
                link={options[key].link}
                title={options[key].title}
                />)}
        </div>
        </>
    )
}

function SidebarOptionCard({img,link,title}){
    return(
        <div className="flex m-2 md:flex-row sm:flex-col bg-gray-200 p-4 text-lg rounded-md items-center text-center">
            <img src={img} className="w-6 p-1"/>
            <Link href={link}>{title}</Link>
        </div>
    )
}
