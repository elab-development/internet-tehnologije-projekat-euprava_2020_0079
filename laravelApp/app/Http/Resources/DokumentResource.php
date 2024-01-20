<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DokumentResource extends JsonResource
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
           
            'tip' => $this->tip,
            'sadrzaj' => $this->sadrzaj,
            'document_name' => $this->document_name,
            'issued_at' => $this->issued_at,
            'expires_at' => $this->expires_at,
            'korisnik' => new UserResource($this->whenLoaded('korisnik')),
        ];
    }
}
