<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoomsController extends Controller
{
    /**
     * test fetch component
     */
    public function index(Request $request)
    {
        $request->validate(
            [
                "name" => "bail|required|min:3|string",
                "banned" => "bail|nullable|min:3|string",
                "logo" => 'bail|max:500|file|nullable',
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
