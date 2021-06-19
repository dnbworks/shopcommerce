<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'city',
        'full_address',
        'zip'
    
    ];

    public function user()
     {
         return $this->belongsTo(User::class);
     }
}