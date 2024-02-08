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
        Schema::create('obavestenjes', function (Blueprint $table) {
            $table->id();
            $table->string('opstina');
            $table->enum('vrsta_prekida', ['voda', 'struja']);
            $table->dateTime('datum_pocetka');
            $table->dateTime('datum_zavrsetka');
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
        Schema::dropIfExists('obavestenjes');
    }
};
