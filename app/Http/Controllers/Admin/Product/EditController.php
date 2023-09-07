<?php

namespace App\Http\Controllers\Admin\Product;

use App\Models\Product;
use Illuminate\View\View;

class EditController extends BaseController
{
    public function __invoke(Product $product): View
    {
        return view('admin.product.edit', compact('product'));
    }
}
