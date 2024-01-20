<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ZahtevResource extends JsonResource
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
         
            'status' => $this->status,
            'submitted_at' => $this->submitted_at,
            'processed_at' => $this->processed_at,
            'request_priority' => $this->request_priority,
            'additional_notes' => $this->additional_notes,
            'processing_deadline' => $this->processing_deadline, 
            'korisnik' => new UserResource($this->whenLoaded('korisnik')),
            'usluga' => new UslugaResource($this->whenLoaded('usluga')),
        ];
    }
}
