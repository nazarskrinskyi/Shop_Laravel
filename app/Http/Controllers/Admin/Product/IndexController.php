<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\View\View;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(): View
    {
        $products = Product::paginate(10);
        return view('admin.product.index', compact('products'));
    }
}
