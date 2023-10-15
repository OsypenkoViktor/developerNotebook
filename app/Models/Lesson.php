<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];
    public function user(){
        return $this->belongsTo(Branch::class,"branch_id");
    }
    public function textNotes()
    {
        return $this->hasMany(TextNote::class);
    }
    public function ytVideos()
    {
        return $this->hasMany(YtVideo::class);
    }
    public function codes()
    {
        return $this->hasMany(Code::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
