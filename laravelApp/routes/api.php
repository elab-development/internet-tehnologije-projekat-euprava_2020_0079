<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ObavestenjeController;
use App\Http\Controllers\UslugaController;
use App\Http\Controllers\ZahtevController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Ostale rute koje su nezaštićene
Route::get('/usluge', [UslugaController::class, 'index']);
Route::get('/usluge/{id}', [UslugaController::class, 'show']);
Route::get('/zahtevi', [ZahtevController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/searchUsers', [AuthController::class, 'searchUsers']);
Route::get('/exportUsersToCsv', [AuthController::class, 'exportUsersToCsv']);


Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'getCurrentUser']);


Route::resource('/usluge', UslugaController::class)->only(['store', 'update', 'destroy']);  //izvadjeno iz donje grupe ruta za potrebe react domaceg
// Zaštita svih ruta koje izvršavaju delete, update i store akcije
Route::middleware(['auth:sanctum'])->group(function () {

   
    Route::get('/zahtevi/statistics', [ZahtevController::class, 'statistics']);
    Route::resource('/zahtevi', ZahtevController::class)->only(['store', 'update', 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/obavestenja', [ObavestenjeController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/obavestenja', [ObavestenjeController::class, 'store']);
    Route::get('/obavestenja/{id}', [ObavestenjeController::class, 'show']);
    Route::put('/obavestenja/{id}', [ObavestenjeController::class, 'update']);
    Route::delete('/obavestenja/{id}', [ObavestenjeController::class, 'destroy']);
});