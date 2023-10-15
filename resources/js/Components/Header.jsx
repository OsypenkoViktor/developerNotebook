import MyButton from "@/Components/Common/MyButton.jsx";
import MyLink from "@/Components/Common/MyLink.jsx";

export default function Header(props){
    return(<div className="flex  items-center justify-between h-1/6  w-screen">
        <div className="text-center text-5xl flex-1 items-center">
            <h1>Developer Notebook</h1>
        </div>
            {props.user?
                <div className="flex flex-col items-center p-4">
                    <p>{props.user}</p>
                    <MyLink
                    href={"/auth/logout"}
                    title={"Вийти"}
                    />
                </div>
                :null
            }
        </div>
    )
}
