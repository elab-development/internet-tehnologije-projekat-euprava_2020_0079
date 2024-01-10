<?php

use App\Http\Controllers\AuthController;
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

Route::resource('/zahtevi', ZahtevController::class)->only(['store', 'update', 'destroy']);
// Zaštita svih ruta koje izvršavaju delete, update i store akcije
Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('/usluge', UslugaController::class)->only(['store', 'update', 'destroy']);
   
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Ostale rute koje su nezaštićene
Route::get('/usluge', [UslugaController::class, 'index']);
Route::get('/zahtevi', [ZahtevController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/searchUsers', [AuthController::class, 'searchUsers']);
Route::get('/exportUsersToCsv', [AuthController::class, 'exportUsersToCsv']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'getCurrentUser']);