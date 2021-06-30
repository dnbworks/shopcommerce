<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Session;

class CheckoutController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware(['guest']);
    // }

    public function index(Request $request){
        $Cart = Session::has('cart') ? Session::get('cart') : null;

        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }


        if($request->auth == 'false') {
            return view('shop.checkout', ['subtotal' => $request->subtotal, 'total' => $request->total, 'cart' => $Cart]);
        } 
        
        $userInfo = auth()->user()->address;
        return view('shop.checkout', ['subtotal' => $request->subtotal, 'total' => $request->total, 'userInfo' => $userInfo, 'cart' => $Cart]);
    }
}
