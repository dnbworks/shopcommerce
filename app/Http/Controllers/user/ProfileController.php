<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index(){
        return view('user.profile');
    }

    public function store(){
        auth()->logout();
        return redirect('/');
    }
}
