<?php

use App\Http\Controllers\ChatsController;
use App\Http\Controllers\RoomsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */
Route::post("/", [RoomsController::class, "index"]);
Route::post("/room", [RoomsController::class, "show"]);
Route::post("/chat", [ChatsController::class, "store"]);
Route::get('/{id}', [RoomsController::class, 'chats']);
