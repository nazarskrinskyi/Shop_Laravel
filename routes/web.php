<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'admin', "namespace" => 'App\Http\Controllers\Admin',], function () {
    Route::get('/', AdminController::class)->name('admin.index');

    Route::group(['prefix' => 'categories', "namespace" => 'Category'], function () {
        Route::get('/', IndexController::class)->name('admin.category.index');
        Route::get('/create', CreateController::class)->name('admin.category.create');
        Route::get('/{category}/edit', EditController::class)->name('admin.category.edit');
        Route::post('/', StoreController::class)->name('admin.category.store');
        Route::get('/{category}', ShowController::class)->name('admin.category.show');
        Route::patch('/{category}', UpdateController::class)->name('admin.category.update');
        Route::delete('/{category}', DeleteController::class)->name('admin.category.delete');
    });

    Route::group(['prefix' => 'colors', "namespace" => 'Color'], function () {
        Route::get('/', IndexController::class)->name('admin.color.index');
        Route::get('/create', CreateController::class)->name('admin.color.create');
        Route::get('/{color}/edit', EditController::class)->name('admin.color.edit');
        Route::post('/', StoreController::class)->name('admin.color.store');
        Route::get('/{color}', ShowController::class)->name('admin.color.show');
        Route::patch('/{color}', UpdateController::class)->name('admin.color.update');
        Route::delete('/{color}', DeleteController::class)->name('admin.color.delete');
    });

});
