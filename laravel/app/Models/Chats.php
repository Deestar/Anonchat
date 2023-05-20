<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chats extends Model
{
    protected $fillable = [
        "room_id", "chats", "ifreply", "reply", "img",
    ];
    use HasFactory;
}
