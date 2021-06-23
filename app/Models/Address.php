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
        'zip',
        'user_id'
    
    ];

    protected $hidden = [
        'id',
        'user_id',
        'created_at',
        'updated_at'
    ];

    public function user()
     {
         return $this->belongsTo(User::class);
     }
}
