<?php

use App\Http\Controllers\UslugaController;
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