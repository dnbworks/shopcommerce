<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Session;
class ProfileController extends Controller
{
    public function index(){
        $Cart = Session::has('cart') ? Session::get('cart') : null;
        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }
        return view('user.profile', ['cart' => $Cart]);
    }

    public function store(){
        auth()->logout();
        return redirect('/');
    }
}
