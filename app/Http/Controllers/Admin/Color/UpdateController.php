<?php

namespace App\Http\Controllers\Admin\Color;

use App\Http\Requests\Color\UpdateRequest;
use App\Models\Color;

class UpdateController extends BaseController
{
    public function __invoke(Color $color, UpdateRequest $request)
    {
        $data = $request->validated();

        $color = $this->service->update($data, $color);
        return redirect()->route('admin.color.show', $color->id);
    }
}
