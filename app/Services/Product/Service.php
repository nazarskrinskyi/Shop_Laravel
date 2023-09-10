<?php

namespace App\Services\Product;

use App\Models\Color;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Service
{
    public function update(array $data, Product $product): Product|string
    {
        try {
            DB::beginTransaction();
            if (isset($data['preview_image'])) $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
            if (isset($data['hover_image'])) $data['hover_image'] = Storage::disk('public')->put('/images', $data['hover_image']);

            if (isset($data['tags'])) {
                $tags = $data['tags'];
                $tags_id = $this->getTagIdsUpdate($tags);
                $product->tags()->sync($tags_id);
                unset($data['tags']);
            } else {
                // If 'tags' array is empty, detach all tags from the product
                $product->tags()->detach();
            }

            if (isset($data['colors'])) {
                $colors = $data['colors'];
                $colors_id = $this->getColorIdsUpdate($colors);
                $product->colors()->sync($colors_id);
                unset($data['colors']);
            } else {
                // If 'colors' array is empty, detach all colors from the product
                $product->colors()->detach();
            }


            $data['is_published'] = $data['is_published'] ?? false;

            $product->update($data);

            DB::commit();
        } catch
        (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $product;
    }

    public function store(array $data): Product|string
    {
        try {
            DB::beginTransaction();
            if (isset($data['preview_image'])) $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
            if (isset($data['hover_image'])) $data['hover_image'] = Storage::disk('public')->put('/images', $data['hover_image']);

            if (isset($data['tags'])) {
                $tags = $data['tags'];
                unset($data['tags']);
            }
            if (isset($data['colors'])) {
                $colors = $data['colors'];
                unset($data['colors']);
            }

            $data['is_published'] = $data['is_published'] ?? 0;
            $product = Product::create($data);

            if (isset($tags)) {
                $tags_id = $this->getTagIds($tags);
                $product->tags()->attach($tags_id);
            }
            if (isset($colors)) {
                $colors_id = $this->getcolorIds($colors);
                $product->colors()->attach($colors_id);
            }

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $product;
    }

    private function getTagIds(array $tags): array
    {
        $tags_id = [];
        foreach ($tags as $tag_id) {
            $tag = !isset($tag_id) ? Tag::create($tag_id) : Tag::find($tag_id);
            $tags_id[] = $tag->id;
        }
        return $tags_id;
    }

    private function getTagIdsUpdate(array $tags): array
    {
        $tags_id = [];
        foreach ($tags as $tag) {
            if (!Tag::find($tag)) {
                $tag = Tag::create($tag);
            } else {
                $current_tag = Tag::find($tag);
                $current_tag->update();
                $tag = $current_tag->fresh();
            }
            $tags_id[] = $tag->id;
        }
        return $tags_id;
    }

    private function getColorIds(array $colors): array
    {
        $colors_id = [];
        foreach ($colors as $color_id) {
            $color = !isset($color_id) ? Color::create($color_id) : color::find($color_id);
            $colors_id[] = $color->id;
        }
        return $colors_id;
    }

    private function getColorIdsUpdate(array $colors): array
    {
        $colors_id = [];
        foreach ($colors as $color) {
            if (!Color::find($color)) {
                $color = Color::create($color);
            } else {
                $current_color = Color::find($color);
                $current_color->update();
                $color = $current_color->fresh();
            }
            $colors_id[] = $color->id;
        }
        return $colors_id;
    }
}
