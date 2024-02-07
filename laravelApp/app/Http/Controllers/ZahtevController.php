<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZahtevResource;
use App\Models\Zahtev;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ZahtevController extends Controller
{
    public function index()
    {
        $zahtevi = Zahtev::all();
        return response()->json(ZahtevResource::collection($zahtevi));
    }

    public function store(Request $request)
    {
        return $request;
        // Dobijamo ID trenutno ulogovanog korisnika
        $korisnik_id = Auth::id();
    
        $validator = Validator::make($request->all(), [
            'usluga_id' => 'required|exists:uslugas,id',
            'status_zahteva' => 'required|string|max:255',
            'submitted_at' => 'required|date',
            'processed_at' => 'nullable|date',
            'request_priority' => 'required|string|max:255',
            'additional_notes' => 'nullable|string|max:1000',
            'processing_deadline' => 'nullable|date',
        ]);
    
        // Dodajemo korisnik_id u podatke koje validiramo
        $validator->merge(['korisnik_id' => $korisnik_id]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $zahtev = Zahtev::create($validator->validated());
        return response()->json(new ZahtevResource($zahtev), 201);
    }

    public function update(Request $request, $id)
    {
        $zahtev = Zahtev::find($id);
        if (!$zahtev) {
            return response()->json(['message' => 'Zahtev not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'korisnik_id' => 'required|exists:users,id',
            'usluga_id' => 'required|exists:uslugas,id',
            'status_zahteva' => 'required|string|max:255',
            'submitted_at' => 'required|date',
            'processed_at' => 'nullable|date',
            'request_priority' => 'required|string|max:255',
            'additional_notes' => 'nullable|string|max:1000',
            'processing_deadline' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $zahtev->update($validator->validated());
        return response()->json(new ZahtevResource($zahtev));
    }

    public function destroy($id)
    {
        $zahtev = Zahtev::find($id);
        if (!$zahtev) {
            return response()->json(['message' => 'Zahtev not found'], 404);
        }

        $zahtev->delete();
        return response()->json(['message' => 'Zahtev deleted successfully']);
    }
}
