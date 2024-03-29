<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZahtevResource;
use App\Models\User;
use App\Models\Usluga;
use App\Models\Zahtev;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
class ZahtevController extends Controller
{
    public function index()
    {
        $zahtevi = Zahtev::all();
        return response()->json(ZahtevResource::collection($zahtevi));
    }



    public function store(Request $request)
    {
        
        // Dobijamo ID trenutno ulogovanog korisnika
        $korisnik_id = Auth::id();
    
        // Postavljamo trenutni datum i vreme za submitted_at i processed_at
        $submitted_at = Carbon::now();
        $processed_at = Carbon::now();
    
        // Dodajemo 7 dana na trenutni datum za processing_deadline
        $processing_deadline = Carbon::now()->addDays(7);
    
        $validator = Validator::make($request->all(), [
            'usluga_id' => 'required|exists:uslugas,id', 
            // 'submitted_at', 'processed_at', 'processing_deadline' ne treba validirati jer ih mi postavljamo ovde
            'request_priority' => 'required|string|max:255',
            'additional_notes' => 'nullable|string|max:1000',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        // Dodajemo korisnik_id i ostale vrednosti u podatke koje validiramo
        $validatedData = $validator->validated();
        $validatedData['korisnik_id'] = $korisnik_id;
        $validatedData['status_zahteva'] = "pending";
        $validatedData['submitted_at'] = $submitted_at;
        $validatedData['processed_at'] = $processed_at;
        $validatedData['processing_deadline'] = $processing_deadline;
    
        // Kreiramo zahtev sa validiranim podacima
        $zahtev = Zahtev::create($validatedData);
    
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


    public function statistics()
    {
        // Broj zahteva za svaku uslugu sa nazivom
        $zahteviPoUslugama = Zahtev::join('uslugas', 'zahtevs.usluga_id', '=', 'uslugas.id')
            ->select('uslugas.naziv', Zahtev::raw('count(*) as total'))
            ->groupBy('uslugas.naziv')
            ->get()
            ->pluck('total', 'naziv');
    
        // Ukupan broj usluga
        $ukupanBrojUsluga = Usluga::count();
    
        // Ukupan broj korisnika koji nisu admin
        $ukupanBrojKorisnika = User::where('role', 'user')->count();
    
        return response()->json([
            'zahtevi_po_uslugama' => $zahteviPoUslugama,
            'ukupan_broj_usluga' => $ukupanBrojUsluga,
            'ukupan_broj_korisnika' => $ukupanBrojKorisnika,
        ]);
    }
    
}
