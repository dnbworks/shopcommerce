<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    protected function validator(array $data)
    {
        $validator = Validator::make($data, [
            'login_email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'login_password' => ['required', 'string'],
        ]);
        $validator->setAttributeNames([
            'login_email' => 'email',
            'login_password' => 'password',
        ]);
    
        return $validator;
    }
    
    public function index(){

        return view('auth.accounts');
    }


    public function login(Request $request){

            $this->validate($request, [
                'login_email' => 'required',
                'login_password' => 'required'
            ]);

 

       
       
        return redirect()->route('home');
    }

    public function register(Request $request){

            $this->validate($request, [
                'firstname' => 'required',
                'lastname' => 'required',
                'email' => 'email|required',
                'password' => 'required'
            ]);



 

        return redirect()->route('home');
       
        
    }

    

    
}
