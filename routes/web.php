<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\auth\RegisterController;
use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\user\ProfileController;
use App\Http\Controllers\CheckoutController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/', [HomeController::class, 'store']);

Route::get('/account/profile', [ProfileController::class, 'index'])->name('profile');
Route::post('/account/profile', [ProfileController::class, 'store']);

Route::get('/product/{slug}', [HomeController::class, 'show'])->name('product.show');

Route::get('/account/login', [LoginController::class, 'index'])->name('login');
Route::post('/account/login', [LoginController::class, 'store']);

Route::get('/account/register', [RegisterController::class, 'index'])->name('register');
Route::post('/account/register', [RegisterController::class, 'store']);


Route::get('/cart/checkout', [CheckoutController::class, 'index'])->name('checkout');




