<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;

class RoomsController extends Controller
{
    /**
     * test fetch component
     */
    public function index(Request $request)
    {
        $request->validate(
            [
                "name" => "required||min:3||string",
                "banned" => "min:3||string",
                "logo" => [File::types(["jpg", "png", "jpeg"])->max("500kb")],
            ]
        );
        return response()->json($request);
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
