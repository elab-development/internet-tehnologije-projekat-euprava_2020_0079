<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokument extends Model
{
    use HasFactory;
    protected $fillable = [
        'korisnik_id', 'tip', 'sadrzaj', 
        'document_name', 'issued_at', 'expires_at', 
    ];

     
    public function korisnik() {
        return $this->belongsTo(User::class, 'korisnik_id');
    }
}
