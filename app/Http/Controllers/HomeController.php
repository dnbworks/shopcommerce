<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

use App\Cart;
use App\SessionStore;
use App\Models\Basket;

// use Illuminate\Contracts\Session\Session;

use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    public function index(Request $request){
        $products = Product::all();

        $Cart = Session::has('cart') ? Session::get('cart') : null;
        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }

        // if(!empty($request->id)){
        //     Session::put('count', 0);

        //     $count = Session::get('count');
        //     $oldsesion = Session::has('hashes') ? Session::get('hashes') : null;
        //     $usersHash = new SessionStore(Json_decode($oldsesion));
        //     $usersHash->add($request->id);
        //     Session::put('hashes', Json_encode($usersHash));
        //     return view('shop.index', ['products' => $products, 'cart' => $Cart, 'hashes' => Session::get('hashes'), 'hash' => $request->id, 'count' => $count]);
        //     dd($request->id);
        // }



        // dd(Session::get('hashes'));

        Session::put('count', 0);

        $count = Session::get('count');
    
        $hash = '';
        // while ($count < 1) {
        //     $hash = bin2hex(random_bytes(32));
        //     Session::put('hash', $hash);
        //     $count++;
        //     Session::put('count', $count);
        // }

        // $oldsesion = Session::has('hashes') ? Session::get('hashes') : null;
        // $usersHash = new SessionStore(Json_decode($oldsesion));
        // $usersHash->add($hash);
        // Session::put('hashes', Json_encode($usersHash));
       
        
        // dd($hash, Session::get('count'), Session::get('hashes'));
        
        // dd( gettype($Cart));
        $cartItem = json_decode(Session::get('cart'));
        return view('shop.index', ['products' => $products, 'cart' => $Cart, 'count' => $count, 'hashes' => Session::get('hashes'), 'hash' => $hash, 'cartItem' => $cartItem]);
    }

    public function show($slug, Request $request){
        $product = Product::where('product_name', $slug)->firstOrFail();

        $Cart = Session::has('cart') ? Session::get('cart') : null;
        if($Cart){
            $Cart = Json_decode(Session::get('cart'));
        } else {
            $Cart = false;
        }
        
        
        return view('shop.show', ['product' => $product, 'cart' => $Cart]);
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

    public function getAddToCart(Request $request){
    //   dd(Json_decode(Session::get('cart')));
      $product = Product::findOrFail($request->id);
      
    //   $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        
        $cart = new Cart(Json_decode($oldCart));

        $cart->add($product, $product->id, $request->Qty, $request->size);

        Session::put('cart', Json_encode($cart));

        // dd(Session::get('cart'));

      return redirect()->route('home')->with('openCart', '1');
    }
}
