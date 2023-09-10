<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $guarded = false;
    protected $table = 'products';

    public function tags(): belongsToMany
    {
        return $this->belongsToMany(Tag::class,'product_tags', 'product_id', 'tag_id');
    }

    public function category(): belongsTo
    {
        return $this->belongsTo(Category::class,'category_id', 'id');
    }
    public function colors(): belongsToMany
    {
        return $this->belongsToMany(Color::class,'color_products', 'product_id', 'color_id');
    }

    public function getPreviewImagePathAttribute(): string
    {
        return url("storage/" . $this->preview_image);
    }

    public function getHoverImagePathAttribute(): string
    {
        return url("storage/" . $this->hover_image);
    }

}
