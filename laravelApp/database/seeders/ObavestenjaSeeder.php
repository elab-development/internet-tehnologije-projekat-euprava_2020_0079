<?php

namespace Database\Seeders;

use App\Models\Obavestenje;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ObavestenjaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Obavestenje::create([
            'opstina' => 'Opština A',
            'vrsta_prekida' => 'voda',
            'datum_pocetka' => '2024-02-15 08:00:00',
            'datum_zavrsetka' => '2024-02-15 15:00:00',
        ]);

        Obavestenje::create([
            'opstina' => 'Opština B',
            'vrsta_prekida' => 'struja',
            'datum_pocetka' => '2024-02-17 10:00:00',
            'datum_zavrsetka' => '2024-02-17 12:00:00',
        ]);
    }
}
