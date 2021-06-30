<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Address;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }
    
    public function index(Request $request){

        $Cart = Session::has('cart') ? Session::get('cart') : null;

        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }

        if($request->checkout == 'true'){
         
            return view('auth.register', ['status' => 1, 'cart' => $Cart]);
            
        }
        
       
        return view('auth.register', ['status' => 0, 'cart' => $Cart]);
        
    }

    public function store(Request $request){

        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email|required|unique:users',
            'password' => 'required',
            'city' => 'required',
            'address' => 'required',
            'zip' => 'required'
        ]);

        if($request->status == 1){
            User::create([
                'name' => $request->firstname . ' ' . $request->lastname,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
    
     
            auth()->attempt($request->only('email', 'password'));
    
    
            Address::create([
                'city' => $request->city,
                'full_address' => $request->address,
                'zip' => $request->zip,
                'user_id' => auth()->user()->id
            ]);

            return redirect()->route('checkout');
        }
     
        
        User::create([
            'name' => $request->firstname . ' ' . $request->lastname,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

 
        auth()->attempt($request->only('email', 'password'));


        Address::create([
            'city' => $request->city,
            'full_address' => $request->address,
            'zip' => $request->zip,
            'user_id' => auth()->user()->id
        ]);
        

 

        

        return redirect()->route('home');
    }
}
