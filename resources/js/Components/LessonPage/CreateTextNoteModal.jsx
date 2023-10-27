import Modal,{useModal} from "../Common/Modal";
import MyButton from "../Common/MyButton";
import React, { useState } from 'react'

export default function CreateTextNoteModal(){
    //хук для керуванням станом модального вікна
    const [isVisible,changeModalState] = useModal()
    //стейт інпутів для створення текстової нотатки
    const [data, setdata] = useState({
        name:"",
        text:""
    })
    //функція для перетворення інпутів в керовані
    function inputsHandler(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    //функція для відправки данних в роут
    function handleSubmit(){

    }
    return(
        <Modal
        isVisible={isVisible}
        changeModalState={changeModalState}
        >
            <TextNoteForm/>
        </Modal>
    )
}

//форма для створення нової текстової нотатки
function TextNoteForm(){
return(
    <div
    className="flex flex-col justify-around bg-black bg-opacity-50 p-10"
>
    <h3 className="text-white self-center text-xl">Назва нотатки</h3>
    <input
    value={data.name}
    type="text"
    name="name"
    onChange={(e)=>{inputsHandler(e)}}
    />
    <h3 className="text-white self-center text-xl">Текст нотатки</h3>
    <textarea
    value={data.text}
    cols="50"
    rows="20"
    className="resize-none mb-16"
    name="text"
    onChange={(e)=>{inputsHandler(e)}}
    ></textarea>
    <MyButton
    design="default"
    name="Створити нотатку"
    onClick={()=>handleSubmit()}
    />
    </div>
)
}
