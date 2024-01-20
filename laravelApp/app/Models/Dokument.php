<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokument extends Model
{
    //ova klasa predstavlja dokumente poput licne karte, pasosa, raznih izvoda 
    use HasFactory;
    protected $fillable = [
        'korisnik_id', 'tip', 'sadrzaj', 
        'document_name', 'issued_at', 'expires_at', 
    ];

     
    public function korisnik() {
        return $this->belongsTo(User::class, 'korisnik_id');
    }
}
