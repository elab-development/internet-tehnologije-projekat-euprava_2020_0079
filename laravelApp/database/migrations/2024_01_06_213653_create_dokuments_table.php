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
        Schema::create('dokuments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('korisnik_id')->constrained('users');
            $table->string('tip');
            $table->string('velicina');
            $table->text('sadrzaj')->nullable();
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
        Schema::dropIfExists('dokuments');
    }
};
