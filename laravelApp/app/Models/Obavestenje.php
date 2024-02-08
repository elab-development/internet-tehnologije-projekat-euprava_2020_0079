<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obavestenje extends Model
{
    use HasFactory;
    protected $fillable = ['opstina', 'vrsta_prekida', 'datum_pocetka', 'datum_zavrsetka'];
}
