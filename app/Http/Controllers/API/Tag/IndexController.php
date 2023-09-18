<?php

namespace App\Http\Controllers\API\Tag;

use App\Http\Controllers\Controller;
use App\Http\Resources\Tag\TagResource;
use App\Models\Tag;
use Illuminate\Contracts\Container\BindingResolutionException;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke()
    {
        $categories = Tag::all();
        return TagResource::collection($categories);
    }
}
