<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usluga extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv', 
        'opis', 
        'cena',
        'kategorija',
        'vreme_obrade',
        'dokumentacija_potrebna',
        'digitalni_potpis_potreban',
        'prioritet',
     
    ];

 
    public function zahtevi() {
        return $this->hasMany(Zahtev::class);
    }
}
