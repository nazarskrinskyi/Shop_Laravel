<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace' => "App\Http\Controllers\API\Product"], function (){
    Route::get('/products/filters', FilterController::class);
    Route::post('/products', IndexController::class);
    Route::get('/products/{product}', ShowController::class);
    Route::get('/categories', IndexController::class);
    Route::get('/tags', IndexController::class);
    Route::get('/colors', IndexController::class);
});

