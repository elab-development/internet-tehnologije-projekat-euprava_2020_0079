<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Usluga;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(20)->create();
        Usluga::factory()->count(5)->create();
    }
}
