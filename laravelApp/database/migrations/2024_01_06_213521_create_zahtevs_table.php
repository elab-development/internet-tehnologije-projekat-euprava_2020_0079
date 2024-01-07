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
            $table->dateTime('submitted_at')->nullable();
            $table->dateTime('processed_at')->nullable();
            $table->string('request_priority');
            $table->text('additional_notes')->nullable();
            $table->dateTime('processing_deadline')->nullable();
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
