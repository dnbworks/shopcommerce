<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index(){
        // dd(auth()->user()->email );
        if(auth()->user()->email == 'y.nsaako@gmail.com'){
            return view('dashboard.login');
        }
        
        return redirect()->route('home');
    }

    public function store(Request $request){
        $this->validate($request, [

        ]);
        return view('dashboard.login');
    }
}
