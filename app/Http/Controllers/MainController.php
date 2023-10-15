<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use function Laravel\Prompts\password;

class MainController extends Controller
{
    public function mainPage(){
        $user = Auth::user();
        $userBranches = $user->branches;
        return Inertia::render("MainPage",[
            "branches"=>$userBranches
        ]);
    }
    public function createBranch(Request $request){
        $user = Auth::user();
        $validatedData = $request->validate([
           "name"=>"required|string|unique:branches,name",
        ]);
        if($validatedData)
        {
            $user->branches()->create($validatedData);
           return to_route("mainPage");
        }

        return response("Error",500);
    }

    public function deleteBranch($branchId){
        $user = Auth::user();
        $branch = $user->branches()->find($branchId);
        $branch->delete();
        return to_route("mainPage");
    }
}
