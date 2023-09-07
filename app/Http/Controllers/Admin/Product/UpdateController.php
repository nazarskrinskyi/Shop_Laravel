<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;

class UpdateController extends BaseController
{
    public function __invoke(Product $product, UpdateRequest $request)
    {
        $data = $request->validated();

        $product = $this->service->update($data, $product);
        return redirect()->route('admin.product.show', $product->id);
    }
}
