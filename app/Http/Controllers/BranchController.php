<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BranchController extends Controller
{
    public  function showBranchPage($branchId){
        $currentBranch = Branch::find($branchId);
        $lessons = $currentBranch->lessons;
        return Inertia::render("BranchPage",[
            "id"=>$branchId,
            "lessons"=>$lessons
        ]);
    }
    public  function createLesson(Request $request,$branchId){
        $parentBranch = Branch::find($branchId);
        $validData = $request->validate([
           "name"=>"required|string",
        ]);
        if($validData && $parentBranch)
        {
            $parentBranch->lessons()->create($validData);
            return to_route("branchPage",[
                "branchId"=>$branchId
            ]);
        }
        return to_route("branchPage",[
            "branchId"=>$branchId
        ]);
    }

    public function deleteLesson($branchId,$lessonId){
        $lessonToDelete = Lesson::find($lessonId);
        $lessonToDelete->delete();
        return to_route("branchPage",[
            "branchId"=>$branchId
        ]);
    }
}
