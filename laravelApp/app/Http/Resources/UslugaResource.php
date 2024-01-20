<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UslugaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'naziv' => $this->naziv,
            'opis' => $this->opis,
            'cena' => $this->cena,
            'kategorija' => $this->kategorija,
            'vreme_obrade' => $this->vreme_obrade,
            'dokumentacija_potrebna' => $this->dokumentacija_potrebna,
            'digitalni_potpis_potreban' => $this->digitalni_potpis_potreban,
            'prioritet' => $this->prioritet,
          
        ];
    }
}
