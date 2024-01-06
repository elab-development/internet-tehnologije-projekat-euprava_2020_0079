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
        Schema::create('zahtevs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('korisnik_id');
            $table->unsignedBigInteger('usluga_id');
            $table->string('status_zahteva');
            $table->dateTime('datum_podnosenja')->nullable();
            $table->dateTime('datum_obrade')->nullable();
            $table->string('prioritet_zahteva')->nullable();
            $table->text('dodatne_napomene')->nullable();
            $table->dateTime('rok_za_obradu')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('zahtevs');
    }
};
