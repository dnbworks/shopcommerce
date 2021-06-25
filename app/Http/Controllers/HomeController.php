<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

use App\Models\Basket;

class HomeController extends Controller
{
    public function index(){
        $products = Product::all();
        return view('shop.index', ['products' => $products]);
    }

    public function show($slug){
        $product = Product::where('product_name', $slug)->firstOrFail();
        return view('shop.show', ['product' => $product]);
    }

    public function store(Request $request){
        $this->validate($request, [
            'order' => 'required'
        ]);
        
        Basket::create([
            'order' => $request->order
        ]);

        return view('shop.checkout', ['cartSummary' => 'hi']);
    }
}
