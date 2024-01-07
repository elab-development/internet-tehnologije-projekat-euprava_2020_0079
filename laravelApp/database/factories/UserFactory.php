<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = User::class;
    public function definition( )
    {
        return [
            'ime' => $this->faker->firstName,
            'prezime' => $this->faker->lastName,
            'imeOca' => $this->faker->name('male'),
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('secret'),  
            'uloga' => 'korisnik',  
            'jmbg' => $this->faker->numerify('###########'),
            'brLicneKarte' => $this->faker->numerify('########'),
            'datumRodjenja' => $this->faker->date(),
            'mestoRodjenja' => $this->faker->city,
            'br_lk' => $this->faker->numerify('#######'),
            'adresaPrebivalista' => $this->faker->address,
            'opstinaPrebivalista' => $this->faker->city,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
