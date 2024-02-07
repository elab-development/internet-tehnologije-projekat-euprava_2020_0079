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
        // Kreiramo admin korisnika
        User::factory()->create([
            'role' => 'admin',
        ]);

        // Kreiramo 20 običnih korisnika
        User::factory()->count(20)->create([
            'role' => 'user',
        ]);
       
    }
}
