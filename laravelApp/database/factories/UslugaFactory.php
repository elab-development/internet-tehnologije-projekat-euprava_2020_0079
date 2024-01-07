<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usluga>
 */
class UslugaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'naziv' => $this->faker->words(3, true),
            'opis' => $this->faker->sentence(),
            'cena' => $this->faker->randomNumber(3),
            'kategorija' => $this->faker->word,
            'vreme_obrade' => $this->faker->randomDigitNotNull,
            'dokumentacija_potrebna' => $this->faker->sentence(),
            'digitalni_potpis_potreban' => $this->faker->boolean,
            'prioritet' => $this->faker->randomElement(['low', 'medium', 'high']),
        ];
    }
}
