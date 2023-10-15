import {useForm, usePage} from "@inertiajs/react";
import MyButton from "@/Components/Common/MyButton.jsx";
import { router } from '@inertiajs/react'
import {useContext, useState} from "react";

//форма на головній сторінці, що відповідає за створення напрямків навчання
export default function CreateBranchForm({showPopup}){

    //стейт для відображення помилок валідації
    const[visibleErrors,setVisibleErrors] = useState(false)
    // стейт ловить стандартний об'єкт error з laravel
    const { errors } = usePage().props

    const { data, setData } = useForm({
        name: '',
    });
    function handleInputChange(e){
        setData("name",e.target.value)
    }

    async function handleSubmit(){
        router.post("/createBranch",data,{
            onSuccess:(page)=>{
                showPopup("success","Напрямок успішно створено")
                setData("name","")
            },
            onError:(errors)=>{
                setData("name","")
                showPopup("error",`Помилка створення напрямку - ${errors.name}`)

            }
        })
    }
    return(
        <div className="flex p-4 items-start justify-between">
            <input type={"text"}
                   value={data.name}
                   placeholder={"назва напрямку"}
                   onChange={(e)=>{handleInputChange(e)}}/>
            <MyButton
                design={"default"}
                name={"Створити напрямок"}
                onClick={handleSubmit}
            />
        </div>
    )
}
