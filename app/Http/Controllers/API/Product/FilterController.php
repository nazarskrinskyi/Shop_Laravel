<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Product\IndexRequest;
use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Contracts\Container\BindingResolutionException;

class FilterController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke()
    {
        $categories = Category::all();
        $colors = Color::all();
        $tags = Tag::all();


        $minDiscountPrice = Product::min('discount_price');

        $price = [
            'max' => Product::orderBy('price', "DESC")->first()->price,
            'min' => Product::orderBy('price', "ASC")->first()->price,
            'min_discount' => $minDiscountPrice,
        ];

        $result = [
            'categories' => $categories,
            'tags' => $tags,
            'colors' => $colors,
            'price' => $price,
            'discount_prices' => $price,
        ];

        return response()->json($result);
    }


}
