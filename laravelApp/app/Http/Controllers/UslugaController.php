<?php

namespace App\Http\Controllers;

use App\Http\Resources\UslugaResource;
use App\Models\Usluga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UslugaController extends Controller
{
    public function index()
    {
        $usluge = Usluga::all();
        return response()->json(UslugaResource::collection($usluge));
    }
     
    public function show($id)
        {
            $u = Usluga::find($id);
            return response()->json(new UslugaResource($u));
        }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'opis' => 'required|string|max:1000',  
            'cena' => 'required|numeric|min:0',
            'kategorija' => 'required|string|max:255',
            'vreme_obrade' => 'required|integer|min:0',
            'dokumentacija_potrebna' => 'sometimes|string|max:1000',  
            'digitalni_potpis_potreban' => 'required|boolean',
            'prioritet' => 'required|string|in:low,medium,high',  
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $usluga = Usluga::create($validator->validated());
        return response()->json(new UslugaResource($usluga), 201);
    }

    public function update(Request $request, $id)
    {
        $usluga = Usluga::find($id);
        if (!$usluga) {
            return response()->json(['message' => 'Usluga not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'opis' => 'required|string|max:1000',  
            'cena' => 'required|numeric|min:0',
            'kategorija' => 'required|string|max:255',
            'vreme_obrade' => 'required|integer|min:0',
            'dokumentacija_potrebna' => 'sometimes|string|max:1000',  
            'digitalni_potpis_potreban' => 'required|boolean',
            'prioritet' => 'required|string|in:low,medium,high',  
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $usluga->update($validator->validated());
        return response()->json(new UslugaResource($usluga));
    }

    public function destroy($id)
    {
        $usluga = Usluga::find($id);
        if (!$usluga) {
            return response()->json(['message' => 'Usluga not found'], 404);
        }

        $usluga->delete();
        return response()->json(['message' => 'Usluga deleted successfully']);
    }
}
