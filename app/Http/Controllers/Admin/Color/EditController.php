<?php

namespace App\Http\Controllers\Admin\Color;

use App\Models\Color;
use Illuminate\View\View;

class EditController extends BaseController
{
    public function __invoke(Color $color): View
    {
        return view('admin.color.edit', compact('color'));
    }
}
