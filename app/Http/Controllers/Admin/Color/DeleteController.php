<?php

namespace App\Http\Controllers\Admin\Color;

use App\Models\Color;
use Illuminate\Http\RedirectResponse;

class DeleteController extends BaseController
{
    public function __invoke(Color $color): RedirectResponse
    {

        $color->delete();
        return redirect()->route('admin.color.index');
    }
}
