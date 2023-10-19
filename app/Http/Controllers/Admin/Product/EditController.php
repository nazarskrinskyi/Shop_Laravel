<?php

namespace App\Http\Controllers\Admin\Product;

use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\View\View;

class EditController extends BaseController
{
    public function __invoke(Product $product): View
    {
        $categories = Category::all();
        $tags = Tag::all();
        $colors = Color::all();
        return view('admin.product.edit', compact('product', 'categories', 'colors', 'tags'));
    }
}
