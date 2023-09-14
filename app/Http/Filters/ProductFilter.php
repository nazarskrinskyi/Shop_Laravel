<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends AbstractFilter
{
    public const CATEGORIES = 'categories';

    public const COLORS = 'colors';
    public const DISCOUNT_PRICES = 'discount_prices';
    public const TAGS = 'tags';
    protected function getCallbacks(): array
    {
        return [
            self::CATEGORIES => [$this, 'categories'],
            self::COLORS => [$this, 'colors'],
            self::TAGS => [$this, 'tags'],
            self::DISCOUNT_PRICES => [$this, 'discount_prices'],
        ];
    }

    public function categories(Builder $builder, $value): void
    {
        $builder->whereHas('categories', function ($b) use($value) {
            $b->whereIn('category_id', $value);
        });
    }

    public function colors(Builder $builder, $value): void
    {
        $builder->whereHas('colors', function ($b) use($value) {
            $b->whereIn('color_id', $value);
        });
    }

    public function tags(Builder $builder, $value): void
    {
        $builder->whereHas('tags', function ($b) use($value) {
            $b->whereIn('tag_id', $value);
        });
    }
    public function discount_prices(Builder $builder, $value): void
    {
        $builder->where(function ($query) use ($value) {
            $query->where(function ($q) use ($value) {
                // Filter products by discount price if available
                $q->whereNotNull('discount_price')
                    ->whereBetween('discount_price', $value);
            })->orWhere(function ($q) use ($value) {
                // If discount price is not available, filter by regular price
                $q->whereNull('discount_price')
                    ->whereBetween('price', $value);
            });
        });
    }


}
