<?php

namespace App\Http\Controllers;

use App\Models\Rooms;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class RoomsController extends Controller
{
    /**
     * test fetch component
     */
    public function index(Request $request, Rooms $room)
    {
        $validated = $request->validate(
            [
                "name" => "bail|required|min:3|string|max:20",
                "banned" => "bail|nullable|min:3|string|max:20",
                "logo" => 'bail|max:500|file|nullable|image',
            ]
        );
        if ($request->hasFile("logo")) {
            $user_img = $request->file("logo");
            $new_name = time() . "_" . $user_img->getClientOriginalName();
            $img = Image::make($request->file("logo"));
            $img->resize(300, 300);
            $stored_path = $img->save("../../img/" . $new_name)->basePath();
            $validated['logo'] = $stored_path;
        }
        $no = $room->count() + 1;
        $validated['room_id'] = $request->name . $no;
        $new_room = $room->create($validated);
        $new_room["room_id"] = base64_encode($new_room["room_id"]);
        return response()->json($new_room);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Rooms $rooms)
    {
        $request->validate(
            [
                'room_id' => 'min:5|required|string',
            ]
        );
        $id = base64_decode($request->room_id);
        $room = $rooms::where("room_id", $id)->first();
        if (!$room) {
            return response()->json([
                "error" => true,
                "message" => "room does not exist",
            ]);
        } else {
            return response()->json($room);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function chats(Rooms $id)
    {
        $chat = $id->chats;
        return response()->json($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
