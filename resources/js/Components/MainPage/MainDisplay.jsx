import MyTooltip from "@/Components/Common/Tooltip.jsx";
import CreateBranchForm from "@/Components/MainPage/CreateBranchForm.jsx";
import BranchesTable from "@/Components/MainPage/BranchesTable.jsx";
import {usePopupContext} from "@/Components/Helpers/PopupContext.jsx";
import {usePage} from "@inertiajs/react";

export default function MainDisplay(){
    let branches = usePage().props.branches
    const {showPopup} = usePopupContext()
    return(
        <div className="basis-3/4 p-4 h-auto overflow-auto border-l-2 border-black">
            <div className="flex flex-1 items-center justify-center">
                <h1 id="branchesTooltip" className="text-2xl border-b-2 border-black">Напрямки навчання</h1>
                <MyTooltip
                id={"branchesExplain"}
                tooltip={"Вкажіть напрямок навчання. Це може бути мова програмування, фреймворк тощо."}
                />
            </div>
            <CreateBranchForm
            showPopup={showPopup}
            />
            {branches?.length>0?
                <BranchesTable
                    showPopup={showPopup}
                branches={branches}
                />
                :<h2>Створіть принаймні один напрямок навчання.</h2>}
        </div>
    )
}
