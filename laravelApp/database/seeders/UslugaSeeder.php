<?php

namespace Database\Seeders;

use App\Models\Usluga;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UslugaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Usluga::factory()->count(5)->create();
    }
}
