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
        Schema::create('uslugas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->text('opis')->nullable();
            $table->decimal('cena', 8, 2)->nullable();
            $table->string('kategorija');
            $table->integer('vreme_obrade')->nullable();
            $table->text('dokumentacija_potrebna')->nullable();
            $table->boolean('digitalni_potpis_potreban')->default(false);
            $table->string('prioritet')->default('medium');
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
        Schema::dropIfExists('uslugas');
    }
};
