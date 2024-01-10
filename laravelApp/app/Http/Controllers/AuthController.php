<?php

namespace App\Http\Controllers;

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
        'uloga' => 'required|string|max:255',
        'jmbg' => 'required|string|max:13|unique:users',
        'brLicneKarte' => 'required|string|max:20|unique:users',
        'datumRodjenja' => 'required|date',
        'mestoRodjenja' => 'required|string|max:255',
        'br_lk' => 'required|string|max:20',
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
        'uloga' => $request->uloga,
        'jmbg' => $request->jmbg,
        'brLicneKarte' => $request->brLicneKarte,
        'datumRodjenja' => $request->datumRodjenja,
        'mestoRodjenja' => $request->mestoRodjenja,
        'br_lk' => $request->br_lk,
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
}
