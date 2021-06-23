<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Address;

use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }
    
    public function index(){
        return view('auth.register');
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
