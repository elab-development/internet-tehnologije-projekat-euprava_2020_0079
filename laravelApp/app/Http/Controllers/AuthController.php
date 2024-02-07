<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'ime' => 'required|string|max:255',
        'prezime' => 'required|string|max:255',
        'imeOca' => 'nullable|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6',
        'jmbg' => 'required|string|max:13|unique:users',
        'brLicneKarte' => 'required|string|max:20|unique:users',
        'datumRodjenja' => 'required|date',
        'mestoRodjenja' => 'required|string|max:255',
    
        'adresaPrebivalista' => 'required|string|max:255',
        'opstinaPrebivalista' => 'required|string|max:255'
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    $user = User::create([
        'ime' => $request->ime,
        'prezime' => $request->prezime,
        'imeOca' => $request->imeOca,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'jmbg' => $request->jmbg,
        'brLicneKarte' => $request->brLicneKarte,
        'datumRodjenja' => $request->datumRodjenja,
        'mestoRodjenja' => $request->mestoRodjenja,
      
        'adresaPrebivalista' => $request->adresaPrebivalista,
        'opstinaPrebivalista' => $request->opstinaPrebivalista
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
}


    public function login(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function searchUsers(Request $request)
    {
        $query = User::query();
    
        if ($request->has('opstinaPrebivalista')) {
            $query->where('opstinaPrebivalista', $request->opstinaPrebivalista);
        }
    
        if ($request->has('mestoRodjenja')) {
            $query->where('mestoRodjenja', $request->mestoRodjenja);
        }
    
        if ($request->has('datumRodjenjaStart') && $request->has('datumRodjenjaEnd')) {
            $query->whereBetween('datumRodjenja', [$request->datumRodjenjaStart, $request->datumRodjenjaEnd]);
        } elseif ($request->has('datumRodjenjaStart')) {
            $query->where('datumRodjenja', '>=', $request->datumRodjenjaStart);
        } elseif ($request->has('datumRodjenjaEnd')) {
            $query->where('datumRodjenja', '<=', $request->datumRodjenjaEnd);
        }
    
        $users = $query->get();
    
        return response()->json($users);
    }
    
    public function exportUsersToCsv()
    {
        $fileName = 'users_' . date('Y-m-d_His') . '.csv'; //users_2024-11-01_020031215546.csv
        $filePath = storage_path('app/public/' . $fileName);  
        $users = User::all();
        
        $columns = array_keys($users->first()->toArray());
        
        $file = fopen($filePath, 'w');  
        fputcsv($file, $columns);
    
        foreach ($users as $user) {
            fputcsv($file, $user->toArray());
        }
    
        fclose($file);
    
        return response()->json(['message' => 'File saved successfully', 'file' => $fileName]);
    }
    
    
 

    public function getCurrentUser(Request $request)
    {
        $user = $request->user();
        return new UserResource($user);
    }
}
