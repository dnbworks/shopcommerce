<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }
    
    public function index(Request $request){
        if(!$request->checkout){
            return view('auth.login');
        } 
        return view('auth.login', ['Fromcheckout' => $request->checkout]);
    }

    public function store(Request $request){
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        if(!$request->checkout){
            if(!auth()->attempt($request->only('email', 'password'))){
                return back()->with('status', 'Invalid login details');
            }
            
       
            return redirect()->route('profile');
        }

    

        if(!auth()->attempt($request->only('email', 'password'))){
            return back()->with('status', 'Invalid login details');
        }
        
   
        return redirect()->route('checkout');
    }
}
