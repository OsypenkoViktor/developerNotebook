<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLoginPage(){
        if(Auth::check()){
            return redirect(route("mainPage"));
        }
        return Inertia::render("Auth/LoginPage");
    }
    public function showRegistrationPage(){
        if(Auth::check()){
            return redirect(route("mainPage"));
        }
        return Inertia::render("Auth/RegistrationPage");
    }
    public function login(Request $request){

        $validatedData = $request->validate([
            "email"=>"email|required",
            "password"=>"string|required"
        ]);
        if(Auth::attempt($validatedData)){
            $request->session()->regenerate();
            return redirect(route("mainPage"));
        }
        return redirect(route("login"));
    }

    public function registration(Request $request){
        if(Auth::check()){
            return redirect(route("mainPage"));
        }
        $validatedData = $request->validate([
            "name"=>"required|string",
            "email"=>"required|string|min:4|unique:users,email",
            "password"=>"required|string|min:8"
        ]);
        if($validatedData)
        {
            $newUser=User::create($validatedData);
            Auth::login($newUser);
            return redirect(route("mainPage"));
        }
        return redirect(route("login"));
    }
    public function logout(){
        Auth::logout();
        return redirect(route("login"));
    }
}

