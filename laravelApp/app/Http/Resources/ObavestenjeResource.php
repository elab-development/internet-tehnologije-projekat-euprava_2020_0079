<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ObavestenjeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'opstina' => $this->opstina,
            'vrsta_prekida' => $this->vrsta_prekida,
            'datum_pocetka' => $this->datum_pocetka,
            'datum_zavrsetka' => $this->datum_zavrsetka,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
