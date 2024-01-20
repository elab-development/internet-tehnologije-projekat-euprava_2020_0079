<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Usluga;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Zahtev>
 */
class ZahtevFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'korisnik_id' =>  User::factory(), 
            'usluga_id' =>  Usluga::factory(),  
            'status_zahteva' => $this->faker->randomElement(['pending', 'processed', 'denied']),
            'submitted_at' => $this->faker->dateTimeThisYear(),
            'processed_at' => $this->faker->randomElement([null, $this->faker->dateTimeThisYear()]),
            'request_priority' => $this->faker->randomElement(['low', 'medium', 'high']),
            'additional_notes' => $this->faker->sentence(),
            'processing_deadline' => $this->faker->dateTimeThisYear(),
        ];
    }
}
