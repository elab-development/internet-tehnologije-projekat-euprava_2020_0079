<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'ime' => $this->ime,
            'prezime' => $this->prezime,
            'imeOca' => $this->imeOca,
            'email' => $this->email,
            'uloga' => $this->uloga,
            'jmbg' => $this->jmbg,
            'brLicneKarte' => $this->brLicneKarte,
            'datumRodjenja' => $this->datumRodjenja,
            'mestoRodjenja' => $this->mestoRodjenja,         
            'adresaPrebivalista' => $this->adresaPrebivalista,
            'opstinaPrebivalista' => $this->opstinaPrebivalista, 
           
        ];
    }
}
