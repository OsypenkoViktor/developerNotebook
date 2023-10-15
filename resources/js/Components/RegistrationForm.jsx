import MyButton from "@/Components/Common/MyButton.jsx";
import { useForm, usePage} from "@inertiajs/react";
import { router } from '@inertiajs/react'
import { useState} from "react";
import MyLink from "@/Components/Common/MyLink.jsx";
export default function RegistrationForm(){
    const[visibleErrors,setVisibleErrors] = useState(false)
    const { data, setData } = useForm({
        email: '',
        password: '',
        name:""
    });
    const { errors } = usePage().props

    async function handleSubmit(e){
        e.preventDefault()
        await router.post('/auth/registration', data)
        showErrors()
    }

    function showErrors(){
        setVisibleErrors(true)
        setTimeout(()=>{
            setVisibleErrors(false)
        },3000)
    }

    return(<>
            <form className={`flex flex-col h-96 w-96 items-center justify-around`}>
                <h2 className="text-4xl">Реєстрація</h2>
                <div className="flex flex-col">
                <input
                    className="w-96"
                    type={"text"}
                    name={"name"}
                    placeholder={"Ім'я"}
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <div className={`h-16 text-center text-red-500 transition-all ease-in-out duration-300 ${visibleErrors ? 'opacity-100' : 'opacity-0'}`}>{errors?.name}</div>
            </div>
                <div className="flex flex-col">
                    <input
                        className="w-96"
                        type={"text"}
                        name={"email"}
                        placeholder={"електронна пошта"}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <div className={`h-16 text-center text-red-500 transition-all ease-in-out duration-300 ${visibleErrors ? 'opacity-100' : 'opacity-0'}`}>{errors?.email}</div>
                </div>
                <div className="flex flex-col">
                    <input type={"password"}
                           className="w-96"
                           name={"password"}
                           placeholder={"пароль"}
                           value={data.password}
                           onChange={(e) => setData('password', e.target.value)}
                    />
                    <div className={`h-16 text-center text-red-500 transition-all ease-in-out duration-300 ${visibleErrors ? 'opacity-100' : 'opacity-0'}`}>{errors?.password}</div>
                </div>
                <div className="flex flex-col">
                <MyButton name={"Зареєструватися"}
                          type={"submit"}
                          design={"default"}
                          onClick={(e)=>handleSubmit(e)}
                />
                    <center><strong>або</strong></center>
                    <MyLink
                    href={"/auth/login"}
                    title={"Увійти"}
                    />
                </div>


            </form>

        </>
    )
}

