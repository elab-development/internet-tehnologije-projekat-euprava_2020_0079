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

 
Route::get('/usluge', [UslugaController::class, 'index']);
Route::post('/usluge', [UslugaController::class, 'store']);
Route::put('/usluge/{id}', [UslugaController::class, 'update']);
Route::delete('/usluge/{id}', [UslugaController::class, 'destroy']);

Route::prefix('api')->group(function () {
    Route::get('/zahtevi', [ZahtevController::class, 'index']);
    Route::post('/zahtevi', [ZahtevController::class, 'store']);
    Route::put('/zahtevi/{id}', [ZahtevController::class, 'update']);
    Route::delete('/zahtevi/{id}', [ZahtevController::class, 'destroy']);
});
Route::get('/searchUsers', [AuthController::class, 'searchUsers']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);