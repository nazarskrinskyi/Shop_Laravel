<?php

namespace App\Http\Controllers\API\Color;

use App\Http\Controllers\Controller;
use App\Http\Resources\Color\ColorResource;
use App\Models\Color;
use Illuminate\Contracts\Container\BindingResolutionException;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke()
    {
        $colors = Color::all();
        return ColorResource::collection($colors);
    }
}
