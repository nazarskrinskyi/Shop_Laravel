<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;
use Illuminate\Contracts\Container\BindingResolutionException;

class ShowController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(Product $product)
    {
        return new ProductResource($product);
    }
}
