import PropTypes from 'prop-types';
import MyButton from "@/Components/Common/MyButton.jsx";
import {Link, router} from "@inertiajs/react";
export default function BranchesTable({branches,showPopup}){

 return(
     <table className="w-full">
         <thead>
         <tr className="border-b-2 ">
             <th>No</th>
             <th>Назва напрямку</th>
             <th>Дата створення</th>
         </tr>
         </thead>
         <tbody>
         {branches?.map((branch,index)=><tr key={index}>
             <td className="p-4">{index+1}</td>
             <td className="p-4 text-xl">{<Link href={`/branch/${branch.id}`}>{branch.name}</Link>}</td>
             <td className="p-4">{new Date(branch.created_at).toLocaleDateString() }</td>
             <td className="p-4"><MyButton
             name={"Видалити"}
             type={"button"}
             design={"danger"}
             onClick={()=>deleteBranch(branch.id,showPopup)}
             /></td>
         </tr>)}
         </tbody>
     </table>
 )
}

function deleteBranch(branchId,showPopup){
    router.delete(`/deleteBranch/${branchId}`, {
onError:(err)=>{
    showPopup("error",`Помилка при видаленні`)
},
onSuccess:()=>{
    showPopup("success",`Напрямок успішно видалено`)
}
    })
}

BranchesTable.propTypes={
    branches : PropTypes.array
}
