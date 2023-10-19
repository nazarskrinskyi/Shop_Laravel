<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Requests\Product\StoreRequest;
use Illuminate\Http\RedirectResponse;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request): RedirectResponse
    {

        $data = $request->validated();
        $product = $this->service->store($data);
        return redirect()->route('admin.product.index', $product->id);
    }
}
