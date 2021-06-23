<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class CheckoutController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware(['guest']);
    // }

    public function index(Request $request){

        if($request->auth == 'false') {
            return view('shop.checkout', ['subtotal' => $request->subtotal, 'total' => $request->total]);
        } 
        
        $userInfo = auth()->user()->address;
        return view('shop.checkout', ['subtotal' => $request->subtotal, 'total' => $request->total, 'userInfo' => $userInfo]);
    }
}
