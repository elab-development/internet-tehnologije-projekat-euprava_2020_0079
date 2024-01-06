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
        Schema::table('zahtevs', function (Blueprint $table) {
            $table->foreign('korisnik_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('usluga_id')->references('id')->on('usluge')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('zahtevs', function (Blueprint $table) {
            $table->dropForeign(['korisnik_id']);
            $table->dropForeign(['usluga_id']);
        });
    }
};
