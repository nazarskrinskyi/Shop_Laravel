<?php


use Illuminate\Support\Facades\Auth;
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

    Route::group(['prefix' => 'users', "namespace" => 'User'], function () {
        Route::get('/', IndexController::class)->name('admin.user.index');
        Route::get('/create', CreateController::class)->name('admin.user.create');
        Route::get('/{user}/edit', EditController::class)->name('admin.user.edit');
        Route::post('/', StoreController::class)->name('admin.user.store');
        Route::get('/{user}', ShowController::class)->name('admin.user.show');
        Route::patch('/{user}', UpdateController::class)->name('admin.user.update');
        Route::delete('/{user}', DeleteController::class)->name('admin.user.delete');
    });

    Route::group(['prefix' => 'tags', "namespace" => 'Tag'], function () {
        Route::get('/', IndexController::class)->name('admin.tag.index');
        Route::get('/create', CreateController::class)->name('admin.tag.create');
        Route::get('/{tag}/edit', EditController::class)->name('admin.tag.edit');
        Route::post('/', StoreController::class)->name('admin.tag.store');
        Route::get('/{tag}', ShowController::class)->name('admin.tag.show');
        Route::patch('/{tag}', UpdateController::class)->name('admin.tag.update');
        Route::delete('/{tag}', DeleteController::class)->name('admin.tag.delete');
    });

    Route::group(['prefix' => 'products', "namespace" => 'Product'], function () {
        Route::get('/', IndexController::class)->name('admin.product.index');
        Route::get('/create', CreateController::class)->name('admin.product.create');
        Route::get('/{product}/edit', EditController::class)->name('admin.product.edit');
        Route::post('/', StoreController::class)->name('admin.product.store');
        Route::get('/{product}', ShowController::class)->name('admin.product.show');
        Route::patch('/{product}', UpdateController::class)->name('admin.product.update');
        Route::delete('/{product}', DeleteController::class)->name('admin.product.delete');
    });

});

Auth::routes();

Route::get('/', \App\Http\Controllers\Client\MainController::class);
Route::get('{page}', \App\Http\Controllers\Client\MainController::class)->where('page', '.+');





