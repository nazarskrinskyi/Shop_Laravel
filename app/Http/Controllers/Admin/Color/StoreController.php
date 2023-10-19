<?php

namespace App\Http\Controllers\Admin\Color;

use App\Http\Requests\Category\StoreRequest;
use Illuminate\Http\RedirectResponse;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request): RedirectResponse
    {

        $data = $request->validated();
        $color = $this->service->store($data);
        return redirect()->route('admin.color.index');
    }
}
