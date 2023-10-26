<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function showLesson($branchId,$lessonId){
        return Inertia::render("LessonPage/LessonPage");
    }
}
