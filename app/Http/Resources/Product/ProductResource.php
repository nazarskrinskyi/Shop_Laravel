<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category' => new CategoryResource($this->category),
            'colors' => $this->colors,
            'tags' => $this->tags,
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'price' => $this->price,
            'discount_price' => $this->discount_price,
            'quantity' => $this->quantity,
            'preview_image' => $this->previewImagePath,
            'hover_image' => $this->hoverImagePath,
        ];
    }
}
