<?php

namespace App\Http\Controllers\Admin\Product;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;

class DeleteController extends BaseController
{
    public function __invoke(Product $product): RedirectResponse
    {

        $product->delete();
        return redirect()->route('admin.product.index');
    }
}
