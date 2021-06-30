<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }
    
    public function index(Request $request){
        // if(!$request->checkout){
        //     return view('auth.login');
        // } 

        // dd( $request->subtotal);

        $Cart = Session::has('cart') ? Session::get('cart') : null;
        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }

        return view('auth.login', ['Fromcheckout' => $request->checkout, 'total' => $request->total, 'subtotal' => $request->subtotal, 'cart' => $Cart]);
    }

    public function store(Request $request){
        
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        if(!$request->subtotal){

            if($request->checkout == 'true'){
                if(!auth()->attempt($request->only('email', 'password'))){
                    return back()->with('status', 'Invalid login details');
                }
                return redirect()->route('checkout');
            
            } else {
                if(!auth()->attempt($request->only('email', 'password'))){
                    return back()->with('status', 'Invalid login details');
                }

                 return redirect()->route('profile');
            }
        }
     
            
 
        if(!auth()->attempt($request->only('email', 'password'))){
            return back()->with('status', 'Invalid login details');
        }
    
   
        return redirect()->route('checkout');
    }
}
