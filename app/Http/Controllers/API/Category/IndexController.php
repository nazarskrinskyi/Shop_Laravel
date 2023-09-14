<?php

namespace App\Http\Controllers\API\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Contracts\Container\BindingResolutionException;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke()
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }
}
