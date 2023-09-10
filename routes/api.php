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

Route::get('/products', \App\Http\Controllers\API\Product\IndexController::class);
Route::get('/products/{product}', \App\Http\Controllers\API\Product\ShowController::class);
Route::get('/categories', \App\Http\Controllers\API\Category\IndexController::class);
Route::get('/tags', \App\Http\Controllers\API\Tag\IndexController::class);
Route::get('/colors', \App\Http\Controllers\API\Color\IndexController::class);
