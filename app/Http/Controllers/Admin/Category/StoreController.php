<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Requests\Category\StoreRequest;
use Illuminate\Http\RedirectResponse;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request): RedirectResponse
    {

        $data = $request->validated();
        $category = $this->service->store($data);
        return redirect()->route('admin.category.index', $category->id);
    }
}
