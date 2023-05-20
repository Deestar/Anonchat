<?php

namespace App\Http\Controllers;

use App\Models\Chats;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class ChatsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'room_id' => 'required|numeric',
                'chats' => 'string|nullable',
                'ifreply' => 'boolean|required',
                'reply' => 'string|nullable',
                'img' => 'file|image|nullable|max:500',
            ]
        );
        if ($request->hasFile("img")) {
            $user_img = $request->file("img");
            $new_name = time() . "_" . $user_img->getClientOriginalName();
            $img = Image::make($request->file("img"));
            $img->resize(300, 300);
            $stored_path = $img->save("../../chatimg/" . $new_name)->basePath();
            $validated['logo'] = $stored_path;
        }
        Chats::create($validated);
        return response()->json("Chat succesfully sent");

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
