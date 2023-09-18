<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\Api\Product\IndexRequest;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;

use Illuminate\Contracts\Container\BindingResolutionException;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        $filter = app()->make(ProductFilter::class, ['queryParams' => array_filter($data)]);
        if (!isset($data['id'])) $products = Product::filter($filter)->where('is_published', '=', 1)->paginate(1);
        else {
            foreach ($data['id'] as $id) {
                $products[] = Product::find($id);
            }
        }

        return ProductResource::collection($products);
    }
}
