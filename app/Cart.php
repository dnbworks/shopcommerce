<?php


namespace App;

class Cart {
    public $items = [];
    public $totalQty = 0;
    public $totalPrice = 0;

    public function __construct($oldcart){
        if ($oldcart) {
            $this->items = $oldcart->items;
            $this->totalQty = $oldcart->totalQty;
            $this->totalPrice = $oldcart->totalPrice;
            return true;
        }
    }

    public function add($item, $id, $Qty, $size){
        $inCart = false;
        $storedItem = ['id' => $id, 'Qty' => $Qty, 'price' => $item->product_price, 'item' => $item, 'size' => $size, 'totalPrice' => $Qty * $item->product_price];
        if($this->items){

            foreach($this->items as $item){
     
                if($item->id == $id){
                    $inCart = true;
              
                }

            }

            // echo gettype($this->items);
        }

        if(!$inCart){
            array_push($this->items, $storedItem);
    
            $this->totalQty++;
            // print_r($item);
            $this->totalPrice += $item->price;
        }
        // print_r($item->price);
        
    }

    public function reduceByOne($id) {
        $this->items[$id]['qty']--;
        $this->items[$id]['price'] -= $this->items[$id]['item']['price'];
        $this->totalQty--;
        $this->totalPrice -= $this->items[$id]['item']['price'];

        if ($this->items[$id]['qty'] <= 0) {
            unset($this->items[$id]);
        }
    }

    public function removeItem($id) {
        $this->totalQty -= $this->items[$id]['qty'];
        $this->totalPrice -= $this->items[$id]['price'];
        unset($this->items[$id]);
    }
}