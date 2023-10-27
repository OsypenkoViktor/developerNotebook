<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class LessonController extends Controller
{
    public function showLesson($branchId,$lessonId){
        $currentLesson = Lesson::find($lessonId);
        return Inertia::render("LessonPage/LessonPage",[
            "currentLesson"=> $currentLesson
        ]);
    }
}
