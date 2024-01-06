<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('prezime');
            $table->string('imeOca')->nullable();
            $table->string('jmbg')->unique();
            $table->string('brLicneKarte')->unique();
            $table->date('datumRodjenja');
            $table->string('mestoRodjenja');
            $table->string('adresaPrebivalista');
            $table->string('opstinaPrebivalista');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            
            $table->dropColumn([
                'prezime',
                'imeOca',
                'jmbg',
                'brLicneKarte',
                'datumRodjenja',
                'mestoRodjenja',
                'adresaPrebivalista',
                'opstinaPrebivalista'
            ]);
        });
    }
};
