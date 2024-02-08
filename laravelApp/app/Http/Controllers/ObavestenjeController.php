<?php

namespace App\Http\Controllers;

use App\Http\Resources\ObavestenjeResource;
use App\Models\Obavestenje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ObavestenjeController extends Controller
{
    public function index()
    {
        $obavestenja = Obavestenje::all();
        return response()->json(ObavestenjeResource::collection($obavestenja));
    }
     
    public function show($id)
    {
        $obavestenje = Obavestenje::find($id);
        if (!$obavestenje) {
            return response()->json(['message' => 'Obavestenje not found'], 404);
        }
        return response()->json(new ObavestenjeResource($obavestenje));
    }
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'opstina' => 'required|string|max:255',
            'vrsta_prekida' => 'required|in:voda,struja',
            'datum_pocetka' => 'required|date',
            'datum_zavrsetka' => 'required|date|after:datum_pocetka',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $obavestenje = Obavestenje::create($validator->validated());
        return response()->json(new ObavestenjeResource($obavestenje), 201);
    }

    public function update(Request $request, $id)
    {
        $obavestenje = Obavestenje::find($id);
        if (!$obavestenje) {
            return response()->json(['message' => 'Obavestenje not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'opstina' => 'required|string|max:255',
            'vrsta_prekida' => 'required|in:voda,struja',
            'datum_pocetka' => 'required|date',
            'datum_zavrsetka' => 'required|date|after:datum_pocetka',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $obavestenje->update($validator->validated());
        return response()->json(new ObavestenjeResource($obavestenje));
    }

    public function destroy($id)
    {
        $obavestenje = Obavestenje::find($id);
        if (!$obavestenje) {
            return response()->json(['message' => 'Obavestenje not found'], 404);
        }

        $obavestenje->delete();
        return response()->json(['message' => 'Obavestenje deleted successfully']);
    }
}
