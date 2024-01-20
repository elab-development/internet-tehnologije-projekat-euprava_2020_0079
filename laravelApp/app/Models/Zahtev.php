<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zahtev extends Model
{
    use HasFactory;
    protected $fillable = [
        'korisnik_id',
         'usluga_id', 
         'status',  
         'submitted_at', 
         'processed_at', 
         'request_priority',
         'additional_notes',
        'processing_deadline',
    ];

   
    public function korisnik() {
        return $this->belongsTo(User::class, 'korisnik_id');
    }

   
    public function usluga() {
        return $this->belongsTo(Usluga::class, 'usluga_id');
    }
}
