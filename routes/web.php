<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MainController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix("auth")->group(function (){
    Route::get('/login', [AuthController::class,"showLoginPage"])->name("login");
    Route::post('/login',[AuthController::class,"login"]);
    Route::get('/registration', [AuthController::class,"showRegistrationPage"]);
    Route::post('/registration',[AuthController::class,"registration"]);
    Route::get("/logout",[AuthController::class,"logout"])->name("logout");
});

Route::get("/",[MainController::class,"mainPage"])->middleware("auth")->name("mainPage");
Route::post("/createBranch",[MainController::class,"createBranch"])->middleware("auth");
Route::delete('/deleteBranch/{branchId}',[MainController::class,"deleteBranch"])->middleware("auth");
Route::prefix("branch")->group(function (){
    Route::get('/{branchId}',[BranchController::class,"showBranchPage"])->name("branchPage");
    Route::post('/{branchId}/createLesson',[BranchController::class,"createLesson"]);
    Route::delete('/{branchId}/deleteLesson/{lessonId}',[BranchController::class,"deleteLesson"]);
})->middleware("auth");
