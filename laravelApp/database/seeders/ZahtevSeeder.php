<?php

namespace Database\Seeders;

use App\Models\Zahtev;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZahtevSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Zahtev::factory()->count(3)->create();
    }
}
