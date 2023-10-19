<?php

namespace App\Http\Controllers\Admin\Product;

use App\Models\Category;
use App\Models\Color;
use App\Models\Tag;
use Illuminate\View\View;

class CreateController extends BaseController
{
    public function __invoke(): View
    {
        $categories = Category::all();
        $tags = Tag::all();
        $colors = Color::all();
        return view('admin.product.create', compact('tags', 'categories', 'colors'));
    }
}
